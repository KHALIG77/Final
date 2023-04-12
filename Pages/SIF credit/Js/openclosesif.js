export function openCloseSif(){
    const btnDiscount = document.querySelector(".btn-discount")
    const btnEqp =document.querySelector(".btn-equipment")
    const sectionDiscount = document.querySelector(".discount-info")
    const sectionEqp = document.querySelector(".equipment-info")
    

    btnDiscount.addEventListener("click",()=>{
        if(sectionDiscount.classList.contains("d-none")){
sectionDiscount.classList.remove("d-none")
btnDiscount.textContent = "Bağla"
        }
        else{
            sectionDiscount.classList.add("d-none")
btnDiscount.textContent = "Ətraflı"
        }
    })
    
    btnEqp.addEventListener("click",()=>{
        if(sectionEqp.classList.contains("d-none")){
sectionEqp.classList.remove("d-none")
btnEqp.textContent = "Bağla"
        }
        else{
            sectionEqp.classList.add("d-none");
            btnEqp.textContent = "Ətraflı";
        }
    })
}