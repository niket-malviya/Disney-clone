const mongoose =require('mongoose');
const {Schema}=mongoose;

const SchemaMongo =new Schema({
    FirstName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true,
    },
    EmailAdress:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    DateOfBirth:{
        type:String,
        required:true,
    },
    Gender:{
        type:String,
        required:true,
    },

});

module.exports = mongoose.model('schema',SchemaMongo);