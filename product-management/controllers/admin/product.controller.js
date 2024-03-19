const Product=require("../../models/product.model");
//import model vao vi model la khung de lay du lieu, muc model nay duco cau hinh khi mk lam ben client r

//[GET] /admin/products
// dong comment dau chi de goi nho duong dan de link ra page nay
module.exports.index= async(req,res)=>{
    const products=await Product.find({
        deleted:false
    });
    console.log(products)
    res.render("admin/pages/products/index",{
        pageTitle:"Danh sách sản phẩm",
        products:products
    });
    
}