const mongoose =require("mongoose")//import statement

const databaseConnection=async()=>{
   await mongoose.connect("URL/bookstore") //db url
    .then(()=>{
        console.log("Database connection successfull");
    })
    .catch((err)=>{
        console.log("Database connection failed",err);
    });
};

module.exports= databaseConnection; //not default export
