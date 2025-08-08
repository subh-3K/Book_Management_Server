const mongoose =require("mongoose")//import statement

const databaseConnection=async()=>{
   await mongoose.connect("mongodb+srv://rsubham4334:PZ4QFoOjRRuV9VmW@cluster0.tacz1wj.mongodb.net/bookstore") //db url
    .then(()=>{
        console.log("Database connection successfull");
    })
    .catch((err)=>{
        console.log("Database connection failed",err);
    });
};

module.exports= databaseConnection; //not default export