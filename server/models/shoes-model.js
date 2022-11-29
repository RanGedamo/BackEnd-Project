const mongoose = require('mongoose');

const shoesSchema = new mongoose.Schema({
    shoesType:{type:String,required:true},
    company:{type:String,required:true},
    brand:{type:String,required:true},
    price:{type:Number,required:true},
    amount:{type:Number,required:true},
    isSale:{type:Boolean,required:true},
    image:{type:String,required:true}
},
{ timestamps: true }
);

module.exports = mongoose.model('shoes',shoesSchema);