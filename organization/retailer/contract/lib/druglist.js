'use strict';

// Utility class for collections of ledger states -- a state list 
const StateList = require('./../ledger-api/statelist.js');

const DrugBatch = require ('./drug.js');

class DrugList extends StateList {
    
    constructor(ctx) {
        super(ctx, 'org.pharmanet.drug');
        this.use(DrugBatch);
    }

    async addDrug(drug) {
        return this.addState(drug);
    }

    async getDrug(drugKey) {
        return this.getState(drugKey);
    }

    async updateDrug(drug) {
        return this.updateState(drug);
    }
}

module.exports = DrugList;