//[GET] /admin/dashboard
// dong comment dau chi de goi nho duong dan de link ra page nay
module.exports.dashboard=(req,res)=>{
    res.render("admin/pages/dashboard/index",{
        pageTitle:"TRang tổng quan"
    });
}
