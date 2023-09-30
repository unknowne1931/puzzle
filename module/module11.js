const mongoose = require('mongoose');

const winnnSchema = new mongoose.Schema({
    email : String,
    Time : String,
    IP : String,
    star :String,
    no : String,
    name : String,
    instaID :String
    
});

module.exports = mongoose.model('Winnn', winnnSchema)