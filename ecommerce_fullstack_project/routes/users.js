var express = require('express');
var router = express.Router();
var user=require('../models/user')

//router for signup of the user
router.post('/register',(req,res)=>{
  var newuser=new user({
  userName:req.body.userName,
  password:req.body.password,
  mobileNum:req.body.mobileNum,
  email:req.body.email,
  address:req.body.address  
  })
  //saving the user to db
  newuser.save()
          .then((re)=>res.send(re))
          .catch((err)=>console.log(err));
})
//api for login
router.post('/login',(req,res)=>{
  //reading username and password entered by user
  var _username=req.body.userName
  var _password=req.body.password
  //finding the user account based on userName
  user.findOne({userName:_username}).select('_id userName password mobileNum email address')
  .then((docs)=>{
    //if docs is null that means user account not found with specific username
      if(docs!=null){
        //if the user account found, password must be match
        if(docs.password==_password)
        {
          //if login is success will send account details
          res.send(docs);
        }
        else{
          res.send("-1");
        }
      }
      else{
        res.send("0")
      }
  })




})





module.exports = router;
