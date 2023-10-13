var mongo=require('mongoose')

var schema=mongo.Schema;

var userSchema= new schema({
  userName:String,
  password:String,
  mobileNum:String,
  email:String,
  address:String  
})

var user=mongo.model('User',userSchema)

module.exports=user;
