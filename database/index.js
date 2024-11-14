
var mongoose= require("mongoose")


 async function DatabaseConnect(){
 await mongoose.connect("mongodb+srv://richalamichhane3317:richa@cluster0.6nzxv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
console.log("database connected sucessfully")

}

module.exports=DatabaseConnect







