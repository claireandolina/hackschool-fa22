const mongoose = require('mongoose');
//schema = way that we structure data

const PurchaseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        cost: {
            type: Number,
            required: true
        },
        method: {
            type: String,
            required: true
        },        
        
    }
);

const Purchase = mongoose.model('Purchase', PurchaseSchema);
//what we will apply to code so it follows this schema
module.exports = Purchase;
