
export function navbarHover(){
    const hiddenNavInfo = document.querySelector(".header-info")
    const headerMenu = document.querySelector(".header-menu")
    const navbarA =  document.querySelectorAll(".header-menu a")
    const forBusiness = document.querySelector(".forbusiness")
    const forCredit = document.querySelector(".forcredit")
    const forFactoring=document.querySelector(".forfactoring")
    const forTransaction=document.querySelector(".fortransaction")
    const forAdditionalOperations=document.querySelector(".foradditional-operations")
    const hamburgerMenuIcon = document.querySelector(".hamburger-menu")
    const responsiveNav = document.querySelector(".responsive-nav")
    const businessResponsive = document.querySelector(".business-responsive")
    const businessUl = document.querySelector(".ul-business")
    const creditResponsive = document.querySelector(".credit-responsive")
    const creditUl = document.querySelector(".ul-credit")
    const factoringResponsive =document.querySelector(".factoring-responsive")
    const factoringUl = document.querySelector(".ul-factoring")
    const transactionResponsive =document.querySelector(".transaction-responsive")
    const transactionUl = document.querySelector(".ul-transaction")
    const additionalResponsive = document.querySelector(".additional-responsive")
    const additionalUl = document.querySelector(".ul-additional")
    const allUlInNav = document.querySelectorAll(".responsive-nav ul ul")
 

    

    
    navbarA.forEach(function(a){
    a.addEventListener("mouseover",function(event){
        
       let check =  event.target.getAttribute("data-check")
     
     
        
        hiddenNavInfo.classList.remove("d-none")
        if(a.classList.contains("business")||check ==="business"){
            // forCredit.classList.add("d-none")
            // forFactoring.classList.add("d-none")
            // forTransaction.classList.add("d-none")
            // forAdditionalOperations.classList.add("d-none")
            forBusiness.classList.remove("d-none")
           
        }
        else{
            forBusiness.classList.add("d-none")
        }
        if(a.classList.contains("credit")||check ==="credit"){
            // forBusiness.classList.add("d-none")
            // forFactoring.classList.add("d-none")
            // forTransaction.classList.add("d-none")
            // forAdditionalOperations.classList.add("d-none")
            forCredit.classList.remove("d-none")
        }
        else{
            forCredit.classList.add("d-none")
        }
        if(a.classList.contains("factoring") ||check ==="factoring"){
            // forBusiness.classList.add("d-none")
            // forTransaction.classList.add("d-none")
            // forAdditionalOperations.classList.add("d-none")
            // forCredit.classList.add("d-none")
            forFactoring.classList.remove("d-none")
    }
        else{
            forFactoring.classList.add("d-none")
        }
        if(a.classList.contains("transaction")||check ==="transaction"){
            // forBusiness.classList.add("d-none")
            // forAdditionalOperations.classList.add("d-none")
            // forCredit.classList.add("d-none")
            // forFactoring.classList.add("d-none")
            forTransaction.classList.remove("d-none")
        }
        else{
            forTransaction.classList.add("d-none")
        }
        if(a.classList.contains("additional-operations")||check==="operations"){
            // forBusiness.classList.add("d-none")
            // forTransaction.classList.add("d-none")
            
            // forCredit.classList.add("d-none")
            // forFactoring.classList.add("d-none")
            forAdditionalOperations.classList.remove("d-none")
        }
        else{
            forAdditionalOperations.classList.add("d-none")
        }
           
    })
 
    window.addEventListener("mousemove",function(e){
        if(e.clientY>330){
    hiddenNavInfo.classList.add("d-none")
        }
       })
    })
    headerMenu.addEventListener("mousemove",function(e){
        if(e.clientX>940||e.clientX<250){
            hiddenNavInfo.classList.add("d-none")
        }
    })
   





hamburgerMenuIcon.addEventListener("click",function(){
hamburgerMenuIcon.classList.add("d-none")
hamburgerMenuIcon.nextElementSibling.classList.remove("d-none")
responsiveNav.classList.remove("d-none")
businessResponsive.addEventListener("click",function(){
    activCheck()
  businessUl.classList.toggle("d-none")
  
})
creditResponsive.addEventListener("click",()=>{
    activCheck()
    creditUl.classList.toggle("d-none")
})
factoringResponsive.addEventListener("click",function(){
    activCheck()
    factoringUl.classList.toggle("d-none")
})
transactionResponsive.addEventListener("click",function(){
    activCheck()
    transactionUl.classList.toggle("d-none")
})
additionalResponsive.addEventListener("click",function(){
    activCheck()
    additionalUl.classList.toggle("d-none")
})

})
hamburgerMenuIcon.nextElementSibling.addEventListener("click",function(){
hamburgerMenuIcon.classList.remove("d-none")
hamburgerMenuIcon.nextElementSibling.classList.add("d-none")
responsiveNav.classList.add("d-none")
})
window.addEventListener("resize",function(){
    if(this.window.innerWidth>990){
responsiveNav.classList.add("d-none")
    }else{
        hiddenNavInfo.classList.add("d-none")
    }
})


function activCheck(){
    allUlInNav.forEach(function(ul){
   if(!ul.classList.contains("d-none")){
  ul.classList.add("d-none")
   }
    })
}

}

