const mongoose = require('mongoose');

const studentsExamsSchema = new mongoose.Schema({
    firstName: { type: String, required: true, formType: 'text', tableType: 'string' },
    lastName: { type: String, required: true, formType: 'text', tableType: 'string' },
    email: { type: String, required: true, unique: true, lowercase: true, formType: 'email', tableType: 'string', },
    phone: { type: String, unique: true, tableType: 'string', formType: 'tel'},
    lastUpdate: { type: Date, default: Date.now, },
    createdAt: { type: Date, default: Date.now, tableType: 'dateTime' },
    createdBy: { type: String, required: true, noSearch: true }
},
{ timestamps: true }
);

module.exports = mongoose.model('StudentsExams',studentsExamsSchema);