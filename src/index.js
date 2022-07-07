
const express=require("express")
const app=express()

const connect=require("./config/db")
const productController = require("./controller/master.controller");

app.use("/itemMaster", productController);

app.use(express.json())
app.listen(8080,async()=>{
    try {
        await connect()
    } catch (error) {
      console.log(error.message)  
    }
    console.log("listening on port")
})