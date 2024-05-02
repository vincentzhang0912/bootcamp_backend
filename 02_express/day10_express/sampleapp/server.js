 
// const express = require('express'),在package.json中有"type":"module",可以用import
import express from "express";

const app = express()
const port = 5000

//Reguest Hanlder on GET type.
app.get('/', (req, res) => {
  console.log("Welcome to Experss")
  res.send('Welcome to Procareer')
})

//Reguest Hanlder on POST type.
app.post('/', (req, res) => {
  console.log("Welcome to Experss POST Handler")
  res.send("Welcome to Procareer Express Session")
})
//Reguest Hanlder on DELETE type.
app.delete('/', (req, res) => {
  console.log("Welcome to Experss DELETE Handler")
  res.send("Welcome to Experss DELETE Handler")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})