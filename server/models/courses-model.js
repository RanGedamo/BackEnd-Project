const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
    course: { type: String, required: true, formType: 'text', tableType: 'string' },
    lastUpdate: { type: Date, default: Date.now, },
    createdAt: { type: Date, default: Date.now, tableType: 'dateTime' },
    createdBy: { type: String, required: true, noSearch: true }
},
{ timestamps: true }
);

module.exports = mongoose.model('Courses',coursesSchema);