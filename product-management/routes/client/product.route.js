// file index.route.js la file route goc
const express = require('express')
const router =express.Router();
// ten router la mk dc dat 
router.get("/", (req,res)=>{
    //been file index.route mk da co phan /product roi, thi ben day tiep tuc noi sau prodct
    // link sang trang product co link la /product/
    // tu bien router mk dat tren mk goi ham get
    res.render("client/pages/products/index")
    // giai thich ham render ben file goc giong ben tren
   });
module.exports=router;
// day la cau lenh export ra de dem qua file index.route.js de nhung
// phai export ra thi noi khac ms dung dc no