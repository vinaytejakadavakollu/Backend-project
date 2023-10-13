var express = require('express');
var router = express.Router();
var product=require('../models/product')
//creating new product in db
router.post('/product',(req,res)=>{

var myproduct=new product({
  productId:req.body.productId,
  productName:req.body.productName,
  productDesc:req.body.productDesc,
  productPrice:req.body.productPrice 
})
  myproduct.save()
          .then((p)=>{res.send(p)})
          .catch((err)=>{console.log(err)})
})

//reading all products from db
router.get('/allproducts',(req,res)=>{
    product.find({})
                .then((bs)=>{res.send(bs)})
                .catch((err)=>{console.log(err)})
})

//deleting product
router.delete('/deleteproduct/:id',(req,res)=>{
  var pid=req.params.id;
  product.findByIdAndDelete(pid)
          .then((re)=>{res.send(re)})
          .catch((err)=>{console.log(err)})
})
//updating product
router.put('/updateproduct/:id',(req,res)=>{
  var pid=req.params.id;
  var myproduct=new product({
    _id:pid,
    productId:req.body.productId,
    productName:req.body.productName,
    productDesc:req.body.productDesc,
    productPrice:req.body.productPrice 
  })
  product.findByIdAndUpdate(pid,myproduct)
          .then((result)=>{res.send(result)})
          .catch((err)=>{console.log(err)})

})

//reading a specific product based on id
router.get('/product/:pid',(req,res)=>{

  var pid=req.params.pid;
  product.findOne({_id:pid}).select('_id productId productName productDesc productPrice')
          .then((docs)=>{res.send(docs)})
          .catch((err)=>console.log(err));



})







module.exports = router;
