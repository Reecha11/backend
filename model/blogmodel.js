var mongoose =require ("mongoose")
var schema=mongoose.Schema
var blogschema=new schema({
    title:{
        type : String
    },
    subtitle:{
        type : String
    },
    description:{
        type : String
    },
})
var Blog= mongoose .model("Blog",blogschema)
module.exports=Blog