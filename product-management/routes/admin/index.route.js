// const productRoutes=require("./product.route.js")
// const homeRoutes=require("./home.route.js")
// // nhung file product.routes.js vao
// module.exports = (app)=>{
//     // muon nhung dc thi phai dung cau lenh module.exports
//     app.get('/', (req, res) => {
//         res.render("client/pages/home/index")
//         // cau lenhj render no tu dong vao thu muc view roi nen la mk vao thang client, do app set o tren mk da cau hinh vao thu muc view
//       //test
//     })
//     app.use("/products",productRoutes);
//     app.use("/home",homeRoutes);
   

// }

// import cai bien he thong cu the o day la duoi admin dc viet tring file sytem
const systemConfig=require("../../config/system.js")
// import cai file chua hang admin
const dashboardRoutes=require("./dashboard.route.js")
const productdRoutes=require("./product.route.js")
//nhung
module.exports = (app)=>{
    const PATH_ADMIN=systemConfig.prefixAdmin;
    // PATH_ADMIN la ten khac ,day la dang lay ra hang /admin
    // khai bao 1 bien de lay ra dc admin dc khai bao trong file kia
    app.use(PATH_ADMIN+"/dashboard",dashboardRoutes);
    //su dung
    app.use(PATH_ADMIN+"/products",productdRoutes);
}