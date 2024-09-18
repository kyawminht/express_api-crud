
const express =require('express');
const app=express();
app.use(express.json());
app.use(express.static('public'));

const productRouter=require('./routes/productRoutes')

app.use(productRouter);

module.exports=app;