const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    sport:{type:String,required:true},
    product:{type:String,required:true},
    company:{type:String,required:true},
    price:{type:Number,required:true},
    amount:{type:Number,required:true}
},
{ timestamps: true }
);

module.exports = mongoose.model('equipment',equipmentSchema);