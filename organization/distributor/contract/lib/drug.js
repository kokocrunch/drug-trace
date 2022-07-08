'use strict';

// Utility class for ledger state
const State = require('./../ledger-api/state.js');

// Enumerate drug batch state values
const cpState = {
    PROCURED: 1,
    PENDING_DISTRIBUTE: 2,
    DISTRIBUTED: 3,
    PENDING_RECALL: 4,
    RECALLED: 5
};

/**
 * DrugBatch class extends State class
 * Class will be used by application and smart contract to define a paper
 */
class DrugBatch extends State {
    
    constructor(obj) {
        super(DrugBatch.getClass(), [obj.distributor, obj.retailer, obj.drugBatchNumber]);
        Object.assign(this, obj);
    }

    getDistributor() {
        return this.distributor;
    }

    setDistributor(newDistributor) {
        this.distributor = newDistributor;
    }

    getOwner() {
        return this.owner;
    }

    setOwnerMSP(mspid) {
        this.mspid = mspid;
    }

    getOwnerMSP() {
        return this.mspid;
    }

    setOwner(newOwner) {
        this.owner = newOwner;
    }

    setProcured() {
        this.currentState = cpState.PROCURED;
    }

    setPending_Distribute() {
        this.currentState = cpState.PENDING_DISTRIBUTE;
    }

    setDistributed() {
        this.currentState = cpState.DISTRIBUTED;
    }

    setPending_Recall() {
        this.currentState = cpState.PENDING_RECALL;
    }

    setRecalled() {
        this.currentState = cpState.RECALLED;
    }

    isProcured() {
        return this.currentState === cpState.PROCURED;
    }

    isPending_Distribute() {
        return this.currentState === cpState.PENDING_DISTRIBUTE;
    }

    isDistributed() {
        return this.currentState === cpState.DISTRIBUTED;
    }

    isPending_Recall() {
        return this.currentState === cpState.PENDING_RECALL;
    }

    isRecalled() {
        return this.currentState === cpState.RECALLED;
    }

    static fromBuffer(buffer) {
        return DrugBatch.deserialize(buffer);
    }

    toBuffer() {
        return Buffer.from(JSON.stringify(this));
    }

    /**
     * Deserialize a state data to drug batch
     * @param {Buffer} data to form back into the object
     */
    static deserialize(data) {
        return State.deserializeClass(data, DrugBatch);
    }

    /**
     * Factory method to create a drug batch object
     */
    static createInstance(manufacturer, manufacturer_address, distributor, description, qty, drugBatchNumber, expiry, unitPrice, totalPrice, procureDateTime) {
        return new DrugBatch({manufacturer, manufacturer_address, distributor, description, qty, drugBatchNumber, expiry, unitPrice, totalPrice, procureDateTime});
    }

    static getClass() {
        return 'org.distributor.drugbatch';
    }
}

module.exports = DrugBatch;