var express= require ("express") 
const DatabaseConnect = require("./database")
const Blog = require("./model/blogmodel")
var app= express()
app.use (express.json())
DatabaseConnect()



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


app.listen(3000,()=>{
    console.log("Nodejs server has started at port 3000")
})