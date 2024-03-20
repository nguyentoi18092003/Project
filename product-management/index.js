const express = require('express')
// import thu vien express vao file js
const methodOverride=require('method-override');
// import phuong thuc chuyen post thanh patch ghi de
require("dotenv").config();
// cx la 2 trong nhung cau lenhj bat buoc de ket noi database
const database=require("./config/database");
// nhung file ket noi database vao
const systemConfig=require("./config/system");
// import de cai /admin co the dung trong tat ca cac file pug luon
const route=require("./routes/client/index.route.js")
const routeAdmin=require("./routes/admin/index.route.js")
// import cai router nay vao, ten router la mk tu dat
// file nay cx cap luon roi nen dung mot dau cham
database.connect(); 
//  goi cau lenh ket noi den database
const app = express()
// khởi tạo app, đặt một cái cổng
const port = process.env.PORT;
// muon dung dc thu vien dotenv phai nhung vao
// de dung dc env phai tai thu vien npm i dotenv
// PORT la ten bien minh dinh nghia ben file .env
//http://localhost:3000 cong 3000
app.use(methodOverride("_method"))
//ghi de bien phuong thuc post thanh path
app.set("views","./views");
app.set("view engine","pug");
// cau hinh thang pug vao trong du an
// thang pug no se lay ra cac file trong thu muc view, thu muc view la do mk dat ten
app.locals.prefixAdmin=systemConfig.prefixAdmin;
// sau khi import+goi cau lenhj nay cai /admin do co the import o tat ca cac file pug luon
app.use(express.static("public"))
// cau lenh nay dung de public file tinhx ra ngoai, public trong cau lenh la floder mk dat (floder mk muon public)
route(app)
routeAdmin(app)

// goi ham de no dan sang file route, treen kia ms chi la import thu vien, xuong day phai goi ham nua 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})