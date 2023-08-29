const fs = require("fs")

class ProductManager{

     


     constructor(Path){
      
      this.products = []
      this.path = Path
      this.data = JSON.parse(fs.readFileSync(this.path, "utf-8"));
   }
        






     saveProducts(nuevaData){
      
      const dataUnida = []
      dataUnida.push(...this.data)
      dataUnida.push(nuevaData)
      fs.writeFileSync(this.path,JSON.stringify(dataUnida ,null,"\t"))

     }
      






     updateProduct(id,field,value){

      const productUpdate = this.data.find(product => product.id === id)
      if(!productUpdate){
         console.log("ERROR")
                        }
      else{
         productUpdate[field] = value

         const Actualizacion = this.data.map(item => (item.id === id ? productUpdate : item))
         fs.writeFileSync(this.path,JSON.stringify(Actualizacion , null , "\t"))

         



          }
     }



     deleteProduct(id){

      const eliminarProducto = this.products.findIndex(product => product.id === id)
        if(eliminarProducto === -1){console.log("no se encontro el producto especificado")}
        this.products.splice(eliminarProducto,1)
        this.saveProducts()
     }








     addProducts(title,img,price){
       let newProduct = {
          title,  //esto es como poner title:title , basta con solo poner las comas y el nombre
          img,
          price,
          
            }
       
        
        if(this.data.length === 0){

           newProduct.id = 1

        }
        else{

           newProduct.id = this.data.length + 1

        }

        this.saveProducts(newProduct)

        

     }

        getProductsforId(id){
           const jsonData = fs.readFileSync(this.path, "utf-8");
           let buscar = jsonData.find((product)=>product.id === id)
           if(buscar){return buscar}
           else{console.log("Not Found")} 

        }


        getProducts(){

         const jsonData = fs.readFileSync(this.path, "utf-8");
         const products = JSON.parse(jsonData);
         return products;

        }

        
        
     }

    
path = "./archivos_json/products.json"   
const productManagers = new ProductManager(path)





module.exports = ProductManager