const express=require("express");
const databaseConnection= require("./database.js");
const bookRouter= require("./route/book.route.js");
const cors=require("cors"); //resolve cors error

//database connection 
databaseConnection();

//create a extress app
const app=express();

//data parse
app.use(express.json());

app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello world");
});

//direct to the route
app.use('/book',bookRouter)

app.listen(8000,()=>{
    console.log("port listen on 8000");
});