const db=require('./db')
const express=require('express');
const bodyParser=require('body-parser');
const app = express();
const Schema =require('./schema');

app.use(bodyParser.json());


async function registerUser(req,res){
    try{
        const {FirstName,LastName,EmailAdress,Password,DateOfBirth,Gender}=req.body;
        const data =await Schema.create(newData);
        res.status(201).json(data);

    }catch(error){
        console.error('Error creating data:',error);
        res.status(500).json({message:'error creating data', error});

    }

}


module.exports={
    registerUser,
}