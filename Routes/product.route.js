const express = require("express")
const mongoose = require("mongoose")

const {productModel} = require("../Models/Productmodel")

const productRouter = express.Router()

productRouter.post("/add",async(req,res)=>{ 
  try {
    // const user= new productModel(req.body)
   const product = await productModel.insertMany(req.body)
    // await user.save()

   res.status(200).json({"massage":"Item added successfully"})
    
 } catch (error) {
   res.status(400).json({"err":error})
 }
 
}) 
productRouter.get("/",async(req,res)=>{ 
  const {email,password}=req.body
  try {
    const user=await productModel.find({email,password})
   
      res.status(200).send(user)
} catch (error) {
   res.status(400).json({"err":error})
 }
 
})



productRouter.patch("/update/:id", async(req,res)=>{
 const id =  req.params.id
 
 try {
     
     await productModel.findByIdAndUpdate(id,{ $set: req.body})
     
       res.status(200).json({"msg":"Item Updated Successfully"})
    } catch (error) {
        res.status(400).json({"err":error})
      
    }
   
})

productRouter.delete("/delete/:id", async(req,res)=>{ 
  const id =  req.params.id
 
  try {
     await productModel.findByIdAndDelete(id)
    res.status(200).json({"msg":"Item deleted successfully"})
 } catch (error) {
     res.status(400).json({"err":error})
   
 }

  
})



module.exports = {productRouter}