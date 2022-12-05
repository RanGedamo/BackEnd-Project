const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    firstName: { type: String, required: true, formType: 'text', tableType: 'string' },
    lastName: { type: String, required: true, formType: 'text', tableType: 'string' },
    email: { type: String, required: true, unique: true, lowercase: true, formType: 'email', tableType: 'string', },
    phone: { type: String, tableType: 'string', formType: 'tel' },
    sumTests: { type: Number, required: true },
    lastUpdate: { type: Date, default: Date.now, },
    createdAt: { type: Date, default: Date.now, tableType: 'dateTime' },
},
    { timestamps: true }
);

module.exports = mongoose.model('Students', studentsSchema);