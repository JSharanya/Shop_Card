const express =require('express')
const app=express()

const products=require('./routes/product')

app.use('/api/v1/',products) //middleware specificy address

module.exports=app
