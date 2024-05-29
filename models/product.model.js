const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const Productschema = mongoose.Schema({

    name:{
        type:String,
        required:true['true',"please enter product name"],
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    image:{
        type:String,
        required:false
    },
},
{
    timestamps:true
}
);
const Product=mongoose.model('Product',Productschema);
module.exports=Product;