
//[GET] /admin/products
// dong comment dau chi de goi nho duong dan de link ra page nay
module.exports.index=(req,res)=>{
    res.render("admin/pages/products/index",{
        pageTitle:"Danh sách sản phẩm"
    });
    
}