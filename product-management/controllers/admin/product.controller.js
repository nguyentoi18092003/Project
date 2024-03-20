const Product=require("../../models/product.model");
//import model vao vi model la khung de lay du lieu, muc model nay duco cau hinh khi mk lam ben client r

//[GET] /admin/products
// dong comment dau chi de goi nho duong dan de link ra page nay
module.exports.index= async(req,res)=>{
    // tao khung cho nut bam co the sau nay co nhieu nut bam, k nhe khi sua phai sua ben ca fornt e nen viet ben nay sua cho tien
    let filterStatus=[
        {
            name:"Tất cả",
            status:"",
            class:""
        },
        {
            name:"Hoạt động",
            status:"active",
            class:""
        },
        {
            name:"Dừng hoạt động",
            status:"inactive",
            class:""
        }

    ];
    if(req.query.status){
        const index=filterStatus.findIndex(item=>item.status==req.query.status);
        filterStatus[index].class="active";
    }
    else{
        const index=filterStatus.findIndex(item=>item.status=="");
        filterStatus[index].class="active";
        //them class active

    }
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
    
    let keyword="";
    if(req.query.keyword){
        //keyword trong ngoac la 1 phan trong URL, con tren kia la mk tu khai bao
        keyword=req.query.keyword;
        const regex =new RegExp(keyword,"i");
        // day de xu li tim kiem theo tu khoa ,"i" la de k phan bietj hoa thuong
        find.title=regex;
        //add vao object find o ben tren(cho dk loc i)

    }
    const products=await Product.find(find);
    // console.log(products)
    res.render("admin/pages/products/index",{
        // (muc nay lien ket vs file index o ben view)
        pageTitle:"Danh sách sản phẩm",
        products:products,
        filterStatus: filterStatus,
        // 2 cau lenh nay la de render ra ngoai giao dien
        keyword: keyword
    });
    
}