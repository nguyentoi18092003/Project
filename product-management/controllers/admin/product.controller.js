const Product=require("../../models/product.model");
//import model vao vi model la khung de lay du lieu, muc model nay duco cau hinh khi mk lam ben client r
const filterStatusHelper= require("../../helpers/filterStatus");
//import file ben helper vao
//[GET] /admin/products
// dong comment dau chi de goi nho duong dan de link ra page nay
const searchHelper=require("../../helpers/search")
const paginationHelper=require("../../helpers/pagination")
//import file ben helper vao
module.exports.index= async(req,res)=>{
    // tao khung cho nut bam co the sau nay co nhieu nut bam, k nhe khi sua phai sua ben ca fornt e nen viet ben nay sua cho tien
    const filterStatus=filterStatusHelper(req.query);
    //req.query ung vs query ben file helper
    // khi trang khac ma su dung 3 thanh nay t cx chi can import roi trueyn req.query thoi
    let find={
        deleted:false
        // ơ day van lay ra tat cai deleted =false
    }
    if(req.query.status){
        find.status=req.query.status;
    // Khi chua xu li bat su kien cho font end t phai dung cacsh sau de tesst
    // req.query. gì đó sẽ là cái mà người dùng search trên thanh tìm kiếm xem vd dưới, status là 1 rhuoc tinh trong database
    //http://localhost:3000/admin/products?status=active
    // co cau lenh nay no se loc các sp có status=active
    //hay thu thay active tren thanh tim kiem =inactive
    //muon lay tat ca hay bo het tu dau ?
    }
    
    const objectSearch=searchHelper(req.query);
    if(objectSearch.regex){
        find.title=objectSearch.regex;

    }
    //phan trang
    const countProducts= await Product.countDocuments(find);
    let objectPagination= paginationHelper(
        {
        currentPage:1,
        // mac dinh neu k truyen page tren url thi no se mac dinh la 1 
        limitItems:4
        },
        req.query,
        countProducts
        );
    
    //end phan trang
    const products=await Product.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip);
    // console.log(products)
    res.render("admin/pages/products/index",{
        // (muc nay lien ket vs file index o ben view)
        pageTitle:"Danh sách sản phẩm",
        products:products,
        filterStatus: filterStatus,
        // 2 cau lenh nay la de render ra ngoai giao dien
        keyword: objectSearch.keyword,
        pagination:objectPagination
    });
    
}
//[GET]/admin/products/change-status/:status/:id
module.exports.changeStatus= async (req,res)=>{
    // res.send("OK")
    console.log(req.params);
    const status=req.params.status;
    const id=req.params.id;
    await Product.updateOne({_id:id },{status:status});
    // _id, status o truoc la thuco tinh trong database, con cai sau la bien mk dinh nghia ra
    //Product la model, ham updateOne hay find o tren deu la ham o trong mongoose, ma mooge co the tac dong dc du lieu trong mongdb

    res.redirect("back");
    // cau lenh nay sau khi xu li xong data no se quay tro lai trang ma truoc khi no thay doi
    // o truoc sau khi xu li xong data nos se render ve giao dien pug trong view
    
    
}
