const express = require('express')
// import thu vien express vao file js
require('dotenv').config();

const route=require("./routes/client/index.route.js")
// import cai router nay vao, ten router la mk tu dat
// file nay cx cap luon roi nen dung mot dau cham
const app = express()
// khởi tạo app, đặt một cái cổng
const port = process.env.PORT;
// muon dung dc thu vien dotenv phai nhung vao
// de dung dc env phai tai thu vien npm i dotenv
// PORT la ten bien minh dinh nghia ben file .env
//http://localhost:3000 cong 3000
app.set("views","./views");
app.set("view engine","pug");
// cau hinh thang pug vao trong du an
// thang pug no se lay ra cac file trong thu muc view, thu muc view la do mk dat ten
app.use(express.static("public"))
// cau lenh nay dung de public file tinhx ra ngoai, public trong cau lenh la floder mk dat (floder mk muon public)
route(app)
// goi ham de no dan sang file route, treen kia ms chi la import thu vien, xuong day phai goi ham nua 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})