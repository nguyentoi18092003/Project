//[GET] /dashboard
// dong comment dau chi de goi nho duong dan de link ra page nay
module.exports.index=(req,res)=>{
    //been file index.route mk da co phan /home roi, thi ben day tiep tuc noi sau prodct
    // link sang trang product co link la /home/
    // tu bien router mk dat tren mk goi ham get
    res.render("client/pages/home/index",{
        pageTitle:"Trang chủ"
        //controller là lấy data trả về cho view, nên ta có thể thêm objetc để cấu hình cho tiêu đề ở giao diện linh hoạt hơn
    });
    // giai thich ham render ben file goc giong ben tren
}
// ham module.exports la de xuat, index la ten ham mk dat