module.exports.index=(req,res)=>{
    //been file index.route mk da co phan /home roi, thi ben day tiep tuc noi sau prodct
    // link sang trang product co link la /home/
    // tu bien router mk dat tren mk goi ham get
    res.render("client/pages/home/index")
    // giai thich ham render ben file goc giong ben tren
}
// ham module.exports la de xuat, index la ten ham mk dat