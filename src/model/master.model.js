const mongoose=require("mongoose")
const itemMasterSchema=new mongoose.Schema({
    code:{type:Number,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true}
},{
    timestamps:true,
    versionKey:false
})
const ItemMaster=mongoose.model("itemMaster",itemMasterSchema)
module.exports=ItemMaster