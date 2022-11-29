const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECT_DB).then(()=>console.log('connect to database')).catch(err=>console.error(err))



module.exports = mongoose.connection