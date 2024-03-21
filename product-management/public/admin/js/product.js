//change status
const buttonsChangeStatus=document.querySelectorAll("[button-change-status]");
if(buttonsChangeStatus.length>0){
    //lay ra form gia mk tao
    const formChangeStatus=document.querySelector("#form-change-status");
    const path=formChangeStatus.getAttribute("data-path");
    
   // khi an nut do thi no se doi active thanh inactive va nguoc lai
    buttonsChangeStatus.forEach(button => {
        button.addEventListener("click", ()=>{
            const statusCurrent=button.getAttribute("data-status");
            const id=button.getAttribute("data-id");
            let statusChange= statusCurrent=="active"?"inactive":"active";
           
            //cuoi cx ta dc 1 string co the hay the url o cac muc truoc
            const action=path+`/${statusChange}/${id}?_method=PATCH`
            formChangeStatus.action=action;
            // thay doi thuoc tinh action trong form bang string ma mk tao dc
            formChangeStatus.submit();
            // cau lenh submit nay no giong nhu cau lenh chuyen huowng ben url va String nay cx se xuat hien tren thanh tim kiem, binh thuong co o submit nhung o day la
            // an nut hoat dong hoac khong hoat dong 
            //
        });
    });
}
//end chane status
//delete item
const buttonsDelete=document.querySelectorAll("[button-delete]");
if(buttonsDelete.length>0){
    buttonsDelete.forEach(button =>{
        const formDeleteItem=document.querySelector("#form-delete-item");
        const path=formDeleteItem.getAttribute("data-path");
        button.addEventListener("click",()=>{
            const isConfirm=confirm("Bạn có chắc muốn xóa sản phẩm này?")
            if(isConfirm){
                const id=button.getAttribute("data-id");
                const action=`${path}/${id}?_method=DELETE`;
                // o day la xoa nen phai gui di phuong thuc delete
                console.log(action);
                formDeleteItem.action=action;
                formDeleteItem.submit();
            }
            
        });
    });
}
//enddelete item
