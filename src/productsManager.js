const fs = require("fs")

class ProductManager{

     


     constructor(Path){
      
      this.products = []
      this.path = Path
   }
        






     saveProducts(){

      fs.writeFileSync(this.path,JSON.stringify(this.products,null,"\t"))

     }
      






     updateProduct(id,field,value){

      const productUpdate = this.products.find(product => product.id === id)
      if(!productUpdate){console.log("ERROR")}
      productUpdate[field] = value
      this.saveProducts()

     }



     deleteProduct(id){

      const eliminarProducto = this.products.findIndex(product => product.id === id)
        if(eliminarProducto === -1){console.log("no se encontro el producto especificado")}
        this.products.splice(eliminarProducto,1)
        this.saveProducts()
     }








     addProducts(title,img,price,stock){
       let newProduct = {
          title,  //esto es como poner title:title , basta con solo poner las comas y el nombre
          img,
          price,
          stock
            }
       

        if(this.products.length === 0){

           newProduct.id = 1

        }
        else{

           newProduct.id = this.products.length + 1

        }




            this.products.push(newProduct)
            this.saveProducts()

     }

        getProductsforId(id){

           let buscar = this.products.find((product)=>product.id === id)
           if(buscar){return buscar}
           else{console.log("Not Found")} 

        }


        getProducts(){

        return this.products

        }

        
        
     }

    
path = "./archivos_json/products.json"   
const productManagers = new ProductManager(path)





module.exports = ProductManager