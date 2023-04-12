export function filterFeatures(){


    const allBody = document.querySelectorAll(".features-info-body .body-ft")
    
    const allBtn = document.querySelectorAll(".features-info-buttons span")
    allBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
    let idBtn = btn.getAttribute("data-id")
    if(idBtn == null){
        allBody.forEach((ftbody)=>{
    ftbody.classList.remove("d-none")
        })
    }
    else{
        allBody.forEach((ftbody)=>{
        ftbody.classList.add("d-none")
        })
        allBody.forEach((ftbody)=>{
    let idBody=ftbody.getAttribute("data-id")
    if(idBody == idBtn){
        ftbody.classList.remove("d-none")
    }
        })
    }
    })
    })
    
    }