var mongo=require('mongoose')

var schema=mongo.Schema;

var productSchema= new schema({
  productId:String,
  productName:String,
  productDesc:String,
  productPrice:String  
})

var product=mongo.model('Product',productSchema)

module.exports=product;
