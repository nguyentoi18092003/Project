
const express = require('express')
const router =express.Router();
const controller=require("../../controllers/admin/product.controller")

router.get("/", controller.index  );
router.patch("/change-status/:status/:id",controller.changeStatus);
//vi sau nya xu li dang sau mk dung phuong thuc patch
module.exports=router;
