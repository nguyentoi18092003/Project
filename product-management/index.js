const express = require('express')
// import thu vien express vao file js
const route=require("./routes/client/index.route.js")
// import cai router nay vao, ten router la mk tu dat
// file nay cx cap luon roi nen dung mot dau cham
const app = express()
// khởi tạo app, đặt một cái cổng
const port = 3000
//http://localhost:3000 cong 3000
app.set("views","./views");
app.set("view engine","pug");
// cau hinh thang pug vao trong du an
// thang pug no se lay ra cac file trong thu muc view, thu muc view la do mk dat ten
route(app)
// goi ham de no dan sang file route, treen kia ms chi la import thu vien, xuong day phai goi ham nua 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})