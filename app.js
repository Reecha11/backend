var express= require ("express") 
const DatabaseConnect = require("./database")
const Blog = require("./model/blogmodel")
var app= express()
app.use (express.json())
DatabaseConnect()

//hello

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.post ("/blog",async function (req,res){
    var title=req.body.title
    var subtitle=req.body.subtitle
    var description =req.body.description


    //alternative
    //var {title,subtitle,description}=req.body

     await Blog.create({
        title : title,
        subtitle: subtitle,
        description :description
     })
     res.json({
        message: "blog created sucessfully"
     })

})

app.get ("/blog",async function(req,res) {
    var blogs=await Blog.find()
    res.json({
        data:blogs
    })
    
})

app.get("/blog/:id",async function(req,res){

   var id= req.params.id
     var blogs= await Blog.findById(id)
     res.json({
        data: blogs
     })
})

app.delete("/blog/:id",async function(req,res){
    var id= req.params.id
     await Blog.findByIdAndDelete(id)
     res.json({
        message:"blogs deleted sucessfully"
     })

})

app.patch("/blog/:id", async function(req,res){
    var id=req.params.id
    var{title,subtitle,description}=req.body
    await Blog.findByIdAndUpdate(id,{
        title,
        subtitle,
        description
    })
    res.json({
        message:"blog updated sucessfully"
    })
})


app.listen(3000,()=>{
    console.log("Nodejs server has started at port 3000")
})