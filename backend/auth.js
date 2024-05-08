const db=require('./db')
const express=require('express');
const bodyParser=require('body-parser');
const app = express();
const Schema =require('./schema');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');


app.use(bodyParser.json());


async function registerUser(req,res){
    try{
        const {FirstName,LastName,EmailAdress,Password,DateOfBirth,Gender}=req.body;


        const hashedPassword = await bcrypt.hash(Password, 10); // Hash with a salt of 10 rounds


        const data =await Schema.create({FirstName,LastName,EmailAdress,Password:hashedPassword,DateOfBirth,Gender});
      

        res.status(201).json(data);

    }catch(error){
        console.error('Error creating data:',error);
        res.status(500).json({message:'error creating data', error});

    }

}

async function getuser(req,res){
    try{
        const id =req.params.id;
        const data=await Schema.findById(id);
        if(!data){
            return res.status(404).json({message:'Data not found'});
        }
        res.status(200).json({message:"data fetched successfully",data});

    }catch(error){
        console.error('error fetching data:',error);
        res.status(500).json({message:'error fetching data',error});

    }
}

async function login (req,res){
    const {EmailAdress,Password}=req.body;
    try{
        const user=await Schema.findOne({EmailAdress});
        if(!user){
            return res.stauts(404).json({message:"User not found"});
        }
        //comparing passowrd
        const passowrdMatch = await bcrypt.compare(Password,user.Password);
        if(!passowrdMatch){
            return res.status(401).json({message:"Invalid credintails"});
        }
        //generate JWTtoken 
        const token =jwt.sign({EmailAdress:user.EmailAdress},'JWT_TOKEN');
        res.status(200).json({message:'Login successfull',token});

    }catch(error){
        console.error('error while logging in:',error);
        res.status(500).json({message:"error while logging in",error});

    }

}

module.exports={
    registerUser,
    getuser,
    login,
}