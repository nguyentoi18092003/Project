const productRoutes=require("./product.route.js")
const homeRoutes=require("./home.route.js")
// nhung file product.routes.js vao
module.exports = (app)=>{
    // muon nhung dc thi phai dung cau lenh module.exports
    app.get('/', (req, res) => {
        res.render("client/pages/home/index")
        // cau lenhj render no tu dong vao thu muc view roi nen la mk vao thang client, do app set o tren mk da cau hinh vao thu muc view
      
    })
    app.use("/products",productRoutes);
    app.use("/home",homeRoutes);
   

}