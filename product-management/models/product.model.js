const mongoose=require("mongoose");
//imort cai mongoose vao
const productSchema= new mongoose.Schema(
    {title: String,
    description:String,
    price:Number,
    discountPercentage:Number,
    stock:Number,
    thumbnail:String,
    status:String,
    positon:Number,
    deleted:Boolean
    }
);
// tao moi mot bo khung
const Product=mongoose.model('Product',productSchema, "products");
//product dau tien la ten bien kproduct thu 2 la ten model
//products cuoi cx la collection ma chung ta dat trong database cura chugn ta 
module.exports=Product;