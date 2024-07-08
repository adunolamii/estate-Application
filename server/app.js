const express = require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv").config()
const adminBeachPropModel = require("./Models/adminBeachProp")
const adminMountainPropModel = require("./Models/adminMountainProp")
const adminVillagePropModel = require("./Models/adminVillageProp")
const cors = require("cors")
const app = express()

// MIDDLE WARE
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

// HOME PAGEEEEEEEEEEEE
app.get("/", (req, res)=>{
    res.send('<h1>WELCOME WORLD<h1>')
})


// CREATE adminBeachProppppppp
app.post("/adminBeachProps", async(req, res)=>{
    try {
      const adminBeachProp = await adminBeachPropModel.create(req.body)
       res.status(200).json(adminBeachProp)
    } catch (error) {
        res.status(500).json({error})
    }
  })

    // READ adminBeachPROPppppp
app.get("/adminBeachProps", async(req, res)=>{
  try {
     const adminBeachProp = await adminBeachPropModel.find(req.body)
     res.status(200).json(adminBeachProp)
  } catch (error) {
      res.status(500).json({error})
  }
})

 // CREATE adminMountainPropPPPPPP
app.post("/adminMountainProps", async(req, res)=>{
    try {
      const adminMountainProp = await adminMountainPropModel.create(req.body)
       res.status(200).json(adminMountainProp)
    } catch (error) {
        res.status(500).json({error})
    }
  }) 
 // READ adminMOUNTAINPROPppppp
  app.get("/adminMountainProps", async(req, res)=>{
    try {
       const adminMountainProp = await adminMountainPropModel.find(req.body)
       res.status(200).json(adminMountainProp)
    } catch (error) {
        res.status(500).json({error})
    }
  })


   // CREATE adminVillagePropPPPPPPPPP
app.post("/adminVillageProps", async(req, res)=>{
    try {
      const adminVillageProp = await adminVillagePropModel.create(req.body)
       res.status(200).json(adminVillageProp)
    } catch (error) {
        res.status(500).json({error})
    }
  }) 
 // READ adminVILLAGEPROPppppp
  app.get("/adminVillageProps", async(req, res)=>{
  try {
     const adminVillageProp = await adminVillagePropModel.find(req.body)
     res.status(200).json(adminVillageProp)
  } catch (error) {
      res.status(500).json({error})
  }
})

// SERVER CONNECTIONNNNN
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected successfully")
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(7001, ()=>{
    console.log("hey! listen on the port");
})