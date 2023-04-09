 export function accordion(){
  const accordionHead = document.querySelectorAll(".accordion-act-head a")
  const accordionBody =document.querySelectorAll(".accordion-act-body")
  const accordionIcon = document.querySelectorAll(".accordion-act-head span")

accordionHead.forEach(function(acchead){
acchead.addEventListener("click",function(){

   if (acchead.parentElement.nextElementSibling.classList.contains("d-none")) {
    accordionIcon.forEach((icon)=>{
     icon.textContent = "add"
    })
   acchead.lastElementChild.textContent = "remove"
    accordionBody.forEach((accbody)=>{
        accbody.classList.add("d-none")

    })
    acchead.parentElement.nextElementSibling.classList.remove("d-none")
   } 
   else{
    acchead.lastElementChild.textContent = "add"
    acchead.parentElement.nextElementSibling.classList.add("d-none")
   }
})
})





}