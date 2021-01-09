//create an interface to the mongoose module 
const mongoose = require('mongoose');

//put the mongoose.Schema class into a variable for easier reading
const Schema = mongoose.Schema; 

//create an item Schema 
const userSchema = new Schema({
    name     :  String,
    message : String 
    },
    {
     timestamps : true     //use options to update time stamps 
    }
);

module.exports = mongoose.model("User", userSchema); 