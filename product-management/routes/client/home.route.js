// file index.route.js la file route goc
const express = require('express')
const router =express.Router();
const controller=require("../../controllers/client/home.controller")
// ten router la mk dc dat 
router.get("/", controller.index  );
module.exports=router;
// day la cau lenh export ra de dem qua file index.route.js de nhung
// phai export ra thi noi khac ms dung dc no