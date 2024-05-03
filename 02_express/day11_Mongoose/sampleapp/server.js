//1.Importing Modules
const express = require('express')
const mongoose = require('mongoose')
const dotenv=require('dotenv')
const multer=require('multer')

//2.Creating Express Application
//--Configuring Environment Variables
const app = express()
const port = 5000
dotenv.config()
const upload = multer()
//Parse the JSON data
app.use(express.json())

//3.Connecting to MongoDB Database:
const db = module.exports =async ()=>{
  try{
    await mongoose.connect(process.env.MONGODBURL, {  
      user: process.env.DBUSERNAME,
      pass:   process.env.DBPASSWORD
    })
    console.log("MongoDB Connection is Successful")
  } catch(error){
    console.log(error);
    console.log("MongoDB Connection is failed")
  }
}
db();
// 4.Create a Schema for Realgrande Database> houses collection
const HouseSchema = new mongoose.Schema({   
  _id: Number,
  address: String,
  county: String,
  description: String,
  price: Number,
  photo: String
})

// 5.Create a HouseModel
const HouseModel = mongoose.model('House',HouseSchema);

//6.RequestHandler to save a house information in houses collection
app.post("/inserthouse", upload.none(), async (request, response) => {
  const house=request.body;
  console.log(house);
  const housedata = new HouseModel(house);
  await housedata.save()
  try {
    response.status(200).send(housedata);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
