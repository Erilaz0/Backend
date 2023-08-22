const express = require("express")
const ProductManager = require("./productsManager.js")
path = "./archivos_json/products.json"
PORT = 8080

const App = express()


const obtener = new ProductManager(path)
obtener.addProducts("pan","https://www.semana.com/resizer/BfQNqxqkCDyLVpo7dH2KaAUf6-I=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/TKJSHJK5IREDPBS4TD7QYGLXTI.jpg","200")
obtener.addProducts("arroz","https://images.aws.nestle.recipes/original/cc1ed7245ed521b41e14c8c7ca0fa9f8_foto_arroz.jpg","300")
obtener.addProducts("soja","./img/descarga.jpg","400")

App.get("/",(req,res)=>{

     res.end("Estas actualmente en el directorio raíz")


  
})






App.get("/productos",(req,res)=>{
     const productos = obtener.getProducts()
     const limit = req.query.limit
     console.log(limit)
     let limitProduct = ""
     if(limit <= productos.length){
       for(i=0; i<limit;i++){
          limitProduct+=   
         `<h1>${productos[i].title}</h1>
          <img src="${productos[i].description}"> 
          <p>precio: $${productos[i].price}</p>
         
         
         
         
         `
        
         
       }
        
       res.send(limitProduct)
       
     }

     else{ 
    
     const pr = productos.map(item=>
          
          
          
          `<h1>${item.title}</h1>
           <img src="${item.description}"> 
           <p>precio: $${item.price}</p>
          
          
          
          
          `
     
     
).join('')
     
     

     res.send(pr)
     
     }
})


 
App.get("/productos/:pid",(req,res)=>{
       const productos = obtener.getProducts()
       const id = req.params.pid
       const prId = productos.find(item=> item.id === parseInt(id))
       if(prId){const pr = 
          
          
          
          `<h1>${prId.title}</h1>
           <img src=${prId.description}>
           <p>precio: $${prId.price}</p>
          
          
          
          
          `

          res.send(pr)


       }

       else{res.json("Producto no Encontrado")}
      
       
       





})

App.listen(PORT,()=>{console.log("server corriendo en el puerto: " + PORT)})