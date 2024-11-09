const express = require("express")
const app = express();
const path = require("path")
const hbs = require("hbs")

const partials_path = path.join(__dirname,"../partials")
const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath))

app.set('view engine','hbs')
hbs.registerPartials(partials_path)

app.get("",(req,res)=>{
    res.render('index')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.render('404error')
})

app.listen("8000",()=>{
    console.log("port is listning")
})