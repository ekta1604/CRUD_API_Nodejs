const express = require('express');
const mongoose = require('mongoose');
const Product=require('./models/product.model');
const app = express();

app.use(express.json());
app.listen(3000, () => {
    console.log("server is running on 3000");
});

app.get('/', (req, res) => {
    res.send("hello from node API");
});
mongoose.set('strictQuery', true)

app.get('/api/products',async(req,res)=>{
    // console.log(req.body);
    // res.send("data received");
    try{
        const product=await Product.find({});
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }

});
app.get('/api/products/:id',async(req,res)=>{
    // console.log(req.body);
    // res.send("data received");
    try{
        const {id}=req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }

});
app.put('/api/products/:id',async(req,res)=>{
    // console.log(req.body);
    // res.send("data received");
    try{
        const {id}=req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        
        if(!product){
            return res.status(404).json({message:"product not found"});
        }
        const updatedproduct = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }

});

app.delete('/api/products/:id',async(req,res)=>{
    // console.log(req.body);
    // res.send("data received");
    try{
        const {id}=req.params;
        const product = await Product.findByIdAndDelete(id,req.body);
        
        if(!product){
            return res.status(404).json({message:"product not found"});
        }
        const deletedproduct = await Product.findById(id);
        res.status(200).json({message:"product deleted sucessfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }

});

app.post('/api/products',async(req,res)=>{
    // console.log(req.body);
    // res.send("data received");
    try{
        const product=await Product.create(req.body);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }

});

mongoose.connect("mongodb+srv://admin:admin@cluster0.vooczrq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("database connected");
})
.catch(() => {
    console.error("database connection error");
});
