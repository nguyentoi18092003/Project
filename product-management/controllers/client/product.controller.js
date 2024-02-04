module.exports.index=(req,res)=>{
    //been file index.route mk da co phan /product roi, thi ben day tiep tuc noi sau prodct
    // link sang trang product co link la /product/
    // tu bien router mk dat tren mk goi ham get
    res.render("client/pages/products/index",{
        pageTitle:"Danh sach san pham"
        //controller là lấy data trả về cho view, nên ta có thể thêm objetc để cấu hình cho tiêu đề ở giao diện linh hoạt hơn
    })
    // giai thich ham render ben file goc giong ben tren
   }
//index la ten mk dat thoi, con file module export la mot ham co san