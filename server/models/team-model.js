const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    team:{type:String,required:true},
},
{ timestamps: true }
);

module.exports = mongoose.model('team',teamSchema);