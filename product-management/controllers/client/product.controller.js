const Product =require("../../models/product.model");
//import de vao dile product model de lay du lieu
module.exports.index= async(req,res)=>{
    //been file index.route mk da co phan /product roi, thi ben day tiep tuc noi sau prodct
    // link sang trang product co link la /product/
    // tu bien router mk dat tren mk goi ham get
    const products = await Product.find({
        status:"active",
        deleted:false
        //ban dau k cos gi trong find la lay ra tat ca
        // co status tuc la chi lay ra cai co status la active...
    });
    const newProducts = products.map(item=>{
        item.priceNew=(item.price*(100-item.discountPercentage)/100).toFixed(0);
        return item;
    })
    //xu li logic tinh toan gia ms, viet ben cho pug cx dc nhuwng nen viet trong nay
    console.log(newProducts);

    res.render("client/pages/products/index",{
        pageTitle:"Danh sach san pham",
        //controller là lấy data trả về cho view, nên ta có thể thêm objetc để cấu hình cho tiêu đề ở giao diện linh hoạt hơn
        products:newProducts
    });
    // giai thich ham render ben file goc giong ben tren
   }
//index la ten mk dat thoi, con file module export la mot ham co san