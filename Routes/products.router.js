const Router = require("express").Router;
const router = Router();
const express = require('express');
const bodyParser = require('body-parser');

const ProductsManager = require("../src/productsManager")
path = "./archivos_json/products.json"
const obtener = new ProductsManager(path)

const app = express();
app.use(bodyParser.json());



router.get("/",(req,res)=>{
  
    const productos = obtener.getProducts()
    const limit = req.query.limit
    
    let limitProduct = ""
    if(limit <= productos.length){
      for(i=0; i<limit;i++){
         limitProduct+=   
        `<h1>${productos[i].title}</h1>
         <img src="${productos[i].description}"> 
         <p>precio: $${productos[i].price}</p>
        `}
      res.setHeader("content-type","text/html")
      res.status(200).send(limitProduct)
      
      
    }

    else{ 
   
    const pr = productos.map(item=>
         
         
         
         `<h1>${item.title}</h1>
          <img src="${item.description}"> 
          <p>precio: $${item.price}</p>
         
         `).join('')
    
    
    res.setHeader("content-type","text/html")
    res.status(200).send(pr)
    
    
    }
})




router.post("/:titulo/:img/:price",(req,res)=>{

     const titulo = req.params.titulo
     const img = req.params.img
     const price = parseInt(req.params.price)

     obtener.addProducts(titulo,img,price)

     



})

module.exports = router



router.put("/:pid",(req,res)=>{
  try {
   const { field , value } = req.body
   const id = parseInt(req.params.pid)
  

   obtener.updateProduct(id,field,value)
   console.log(req.body)

   res.json({id,field,value})
}catch(error){
   console.log("error: ",error)
   res.status(500).json({error:"ERR"})



}





})