'use strict';

// Fabric smart contract classes
const { Contract, Context } = require('fabric-contract-api');

// Distributor specific classes
const DrugBatch = require('./drug.js');
const DrugList = require('./druglist.js');
const QueryUtils = require('./queries.js');

class DrugBatchContext extends Context {

    constructor() {
        super();
        // All drugs are held in a list of drugs
        this.drugList = new DrugList(this);
    }

}

class DrugBatchContract extends Contract {

    constructor() {
        // Unique namespace when multiple contracts per chaincode file
        super('org.distributor.drugbatch');
    }

    createContext() {
        return new DrugBatchContext();
    }

    /** 
     * @param {Context} ctx the transaction context
     */ 

    async instantiate(ctx) {
        console.log('Instantiate the contract');
    }

    /**
     * Procure drug
     * 
     * @param {Context} ctx 
     * @param {String} manufacturer 
     * @param {String} manufacturer_address 
     * @param {String} distributor 
     * @param {String} description 
     * @param {Integer} qty 
     * @param {String} drugBatchNumber 
     * @param {String} expiry 
     * @param {Integer} unitPrice 
     * @param {Integer} totalPrice 
     * @param {String} procureDateTime 
     * @returns 
     */
    async procure(ctx, manufacturer, manufacturer_address, distributor, description, qty, drugBatchNumber, expiry, unitPrice, totalPrice, procureDateTime) {

        // create instance of the drug
        let drug = DrugBatch.createInstance(manufacturer, manufacturer_address, distributor, description, qty, drugBatchNumber, expiry, unitPrice, totalPrice, procureDateTime);
        
        // moves drug into PROCURED state
        drug.setProcured();

        // save the owner's MSP
        let mspid = ctx.clientIdentity.getMSPID();
        drug.setOwnerMSP(mspid);

        // newly procured is owned by the distributor
        drug.setOwner(distributor);

        // add the paper to the list of all similar drug batches in the ledger world state
        await ctx.drugList.addDrug(drug);

        // must return a serialized paper to caller of smart contract
        return drug;
    }

    /**
     * Order batch of drugs
     * Note: 'buy' puts drugs in 'PENDING' state - subject to transfer confirmation
     * 
     * @param {Context} ctx 
     * @param {String} currentOwner distributor
     * @param {String} newOwner retailer
     * @param {String} description 
     * @param {Integer} quantity 
     * @param {String} purchaseDatetime 
     */
    async order(ctx, currentOwner, newOwner, description, quantity, purchaseDatetime) {

        // Drug set to 'PENDING_DISTRIBUTE' - can only be transferred by distributor
        drug.setPending_Distribute();

        // Update the drug
        await ctx.drugList.updateDrug(drug);
        return drug;
    }

    /**
     * 
     * Transfer drug batch ownership with quantity: only the owning org has the authority to execute. It is the complement to the 'order'
     * e.g. procure -> order -> transfer -> request_recall -> transfer
     * 
     * @param {Context} ctx 
     * @param {String} manufacturer 
     * @param {String} manufacturer_address 
     * @param {String} currentOwner
     * @param {String} newOwner 
     * @param {String} description 
     * @param {Integer} qty 
     * @param {String} drugBatchNumber 
     * @param {String} expiry 
     * @param {Integer} unitPrice 
     * @param {Integer} totalPrice 
     * @param {String} confirmDateTime
     */
    async transfer(ctx, manufacturer, manufacturer_address, currentOwner, newOwner, newOwnerMSP, description, qty, drugBatchNumber, expiry, unitPrice, totalPrice, confirmDateTime) {
        
        // Retrieve the current drug batch using key fields provided
        let drugKey = DrugBatch.makeKey([currentOwner, newOwner, drugBatchNumber]);
        let drug = await ctx.drugList.getDrug(drugKey);

        // Validate current owner's MSP in the paper === invoking transferer's MSP ID - can only transfer if you are the owning org.
        if (drug.getOwnerMSP() !== ctx.clientIdentity.getMSPID()) {
            throw new Error('\nDrug ' + currentOwner + newOwner + drugBatchNumber + ' is not owned by the current invoking Organization, and not authorized to transfer');
        }

        // Drug needs to be 'pending' - which means you need to have run 'order' transaction first.
        if (!drug.isPending_Distribute() || !drug.isPending_Recall()) {
            throw new Error('\Drug ' + currentOwner + newOwner + drugBatchNumber + ' is not currently in state: PENDING_DISTRIBUTE or PENDING_RECALL. \n For transfer to occur: must run order or recall_request transaction first');
        }

        // HERE!!!!!!! Set drug state to DISTRIBUTED if owner is a distributor and state to RECALLED if owner is a retailer
        if (currentOwner === )
        // else all is well

        drug.setOwner(newOwner);
        // set the MSP of the transferee (so that, that org may also pass MSP check, if subsequently transferred)
        drug.setOwnerMSP(newOwnerMSP);
        drug.confirmDateTime = confirmDateTime;

        // Update the drug
        await ctx.drugList.updateDrug(drug);
        return drug;
    }

    /**
     *  Recall request: (2-phase confirmation: Drug batch is 'PENDING_RECALL' subject to completion of transfer by owning org)
     *  Note: 'recall_request' puts drug batch in 'PENDING_RECALL' state - subject to transfer confirmation.
     * 
     * @param {Context} ctx 
     * @param {String} manufacturer 
     * @param {String} manufacturer_address 
     * @param {String} distributor 
     * @param {String} retailer 
     * @param {String} drugBatchNumber 
     */
    async recall_request(ctx, manufacturer, manufacturer_address, distributor, retailer, drugBatchNumber) {
        
        // Retrieve the current drug using key fields provided
        let drugKey = DrugBatch.makeKey([distributor, retailer, drugBatchNumber]);
        let drug = await ctx.drugList.getDrug(drugKey);

        // Validate current owner
        if (drug.getOwner() !== retailer) {
            throw new Error('\nDrug ' + distributor + retailer + drugBatchNumber + ' is not owned by ' + retailer);
        }
        // drug set to 'PENDING_RECALL' - can only be transferred by identity from owning org (MSP check).
        drug.setPending_Recall();

        // Update the drug
        await ctx.drugList.updateDrug(drug);
        return drug;
    }
}