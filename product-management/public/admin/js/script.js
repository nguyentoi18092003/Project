
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
//end button status
// Form Search
const formSearch=document.querySelector("#form-search");
if(formSearch){
    let url=new URL(window.location.href);
    formSearch.addEventListener("submit",(e)=>{
        e.preventDefault();
        // ngan chan su kien mac dinh de no khoi load lai trang, cau lenh giup loc theo nhieu tieu chi(VD nhu bai nay la car hoat dong va ten mk nhap vao o input)
        const keyword=e.target.elements.keyword.value;
        // lay ra gia tri ma nguwoi dung nhap vao
        if(keyword){
            url.searchParams.set("keyword",keyword);

        }else{
            url.searchParams.delete("keyword");
            // khi k nhap ma lai an tim
        }
        window.location.href=url.href;

    });
}
// ENd formsearch


// pagnination
const buttonsPagination=document.querySelectorAll("[button-pagination]");
if(buttonsPagination){
    let url=new URL(window.location.href);
    buttonsPagination.forEach(button=>{
        button.addEventListener("click",()=>{
            const page=button.getAttribute("button-pagination");
            console.log(page);

            url.searchParams.set("page",page);
            //set lai cai duoi page tren thanh url
            window.location.href=url.href;
            // chuyen huwonh sang trang do
        });
    });
}
// End pagnination
//checkbox Multi
const checkboxMulti=document.querySelector("[checkbox-multi]");
if(checkboxMulti){
    const inputCheckAll=checkboxMulti.querySelector("input[name='checkall']");
    const inputsId=checkboxMulti.querySelectorAll("input[name='id']");
    inputCheckAll.addEventListener("click",() =>{
        console.log(inputCheckAll.checked);
        if(inputCheckAll.checked){
            //neu o checkall dc kich thi tat ca deu dc kich
            inputsId.forEach(input =>{
                input.checked=true;
            });
         } else{
            //neu o checkall dc bo thi tat ca deu dc bo
            inputsId.forEach(input =>{
                input.checked=false;
            });
            }
        
    });
    inputsId.forEach(input=>{
        input.addEventListener("click",()=>{
        const countChecked= checkboxMulti.querySelectorAll("input[name='id']:checked").length;
        if(countChecked==inputsId.length){
            //neu so o mk tich bang tong so o khi = se tich ca o tong tren, khi bo 1 cai thi cx tu dong bo o tich
            inputCheckAll.checked=true;
        }
        else{
            inputCheckAll.checked=false;

        }

        });
    });
}
//end checkbox Multi
//form change multi
const formChangeMulti=document.querySelector("[form-change-multi]");
if(formChangeMulti){
    formChangeMulti.addEventListener("submit",(e)=>{
        e.preventDefault();
        const checkboxMulti=document.querySelector("[checkbox-multi]");
        const inputsChecked=checkboxMulti.querySelectorAll("input[name='id']:checked");
        if(inputsChecked.length>0){
            let ids=[];
            const inputIds=formChangeMulti.querySelector("input[name='ids']");

            inputsChecked.forEach(input=>{
                const id=input.value;
                ids.push(id);
            });
            console.log(ids.join(", "));
            inputIds.value=ids.join(", ");
            formChangeMulti.submit();
            //sau khi submit form no se link snag caii duogn dan mk mk de o thuoc tinh action
        }
        else{
            alert("Vui lòng chọn ít nhất một bản ghi");
        }
    });

}
//end form change multi
