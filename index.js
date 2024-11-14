const express=require("express");
const app=express();

const port =8080;

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:diceVal});
});
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json");
    const data=instadata[username]
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }
    
})
    