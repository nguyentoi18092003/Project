module.exports=(query)=>{
      // tao khung cho nut bam co the sau nay co nhieu nut bam, k nhe khi sua phai sua ben ca fornt e nen viet ben nay sua cho tien
      let filterStatus=[
        {
            name:"Tất cả",
            status:"",
            class:""
        },
        {
            name:"Hoạt động",
            status:"active",
            class:""
        },
        {
            name:"Dừng hoạt động",
            status:"inactive",
            class:""
        }

    ];
    if(query.status){
        const index=filterStatus.findIndex(item=>item.status==query.status);
        filterStatus[index].class="active";
    }
    else{
        const index=filterStatus.findIndex(item=>item.status=="");
        filterStatus[index].class="active";
        //them class active

    }
    return filterStatus;
}