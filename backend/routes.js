const express=require('express')
const router=express.Router()
const auth=require('./auth')

router.put('/createuser',auth.registerUser);
router.get('/getuser/:id',auth.getuser);
router.post('/login',auth.login);



module.exports=router;