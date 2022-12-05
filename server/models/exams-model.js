const  mongoose = require('mongoose')

const Schema = mongoose.Schema
const studentsExamsSchema = new Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
  email: { type: String, required: true},
  phone: { type: String},
  status: { type: Boolean,required: true},
  createdAt: { type: Date, default: Date.now, tableType: 'dateTime' },
  createdBy: { type: String, required: true, noSearch: true },
},
{ timestamps: true }
);


module.exports = mongoose.model('StudentsExams',studentsExamsSchema)