const express =require('express')
const app=express()
app.use(express.json());

const products=require('./routes/product')



app.use('/api/v1/',products) //middleware specificy address

module.exports=app;
