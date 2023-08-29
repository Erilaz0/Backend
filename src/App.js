const express = require("express")
const productos = require("../Routes/products.router")
PORT = 8080

const App = express()

App.use(express.json())
App.use(express.urlencoded({extended:true}))









App.use("/",productos)


/* 
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
*/
App.listen(PORT,()=>{console.log("server corriendo en el puerto: " + PORT)})