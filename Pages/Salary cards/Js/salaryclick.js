export function openClose(){
    const btnIndividual =document.querySelector(".adv-btn-first")
    const btnCard = document.querySelector(".adv-btn-second")
    const sectionIndividual = document.querySelector(".individual-container")
    const sectionCard = document.querySelector(".card-container")


    btnIndividual.addEventListener("click",()=>{
        sectionCard.classList.add("d-none")
        sectionIndividual.classList.remove("d-none")
        btnCard.style.color = "rgba(0,0,0,0.50)"
       btnIndividual.style.color = "black";
     
      
    })
      btnCard.addEventListener("click",()=>{
        sectionIndividual.classList.add("d-none")
        sectionCard.classList.remove("d-none")
        btnIndividual.style.color = "rgba(0,0,0,0.50)"
       btnCard.style.color = "black";
    })

}