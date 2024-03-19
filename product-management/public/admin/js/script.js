
const buttonsStatus=document.querySelectorAll("[button-status]");
// vi day la thuco tinh chung ta tu dinh nghia nen la phai them dau ngoac vuong vao
// console.log(buttonsStatus)
if(buttonsStatus.length>0){
    let url= new URL(window.location.href);
    buttonsStatus.forEach(button=>{
    // new URL la ham de set lai URL tren thanh timf kiem
        button.addEventListener("click",()=>{
            const status=button.getAttribute("button-status");
            console.log(status)
            if(status){
                url.searchParams.set("status",status);
            //status dang truoc la thuco tinh trong database, con status ohia sau la bien o tren mk dinh nghia
            // ham searchParams.set()dung de xet lai phan sau ? cua thanh tim kiem

        }
        else{
            url.searchParams.delete("status");
            // hamf nay de xoa
        }
        window.location.href=url.href;
        // sau khi thay doi xong duong dan day la cau lenh chuyen sang trang duong dan ms
    });
});
}