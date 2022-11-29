const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
    clothesType:{type:String,required:true},
    gender:{type:String,required:true},
    company:{type:String,required:true},
    brand:{type:String,required:true},
    price:{type:Number,required:true},
    amount:{type:Number,required:true},
    isShort:{type:Boolean,required:true},
    isDryFit:{type:Boolean,required:true},
    image:{type:String,required:true}
},
{ timestamps: true }
);

module.exports = mongoose.model('clothes',clothesSchema);