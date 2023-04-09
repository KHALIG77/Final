 export function modal(){
    const closeModalBtn = document.querySelector(".close-modal span");
    const modalSection = document.querySelector("#modal");
    const supportBtn = document.querySelector("#btn-support-bundles")
    const shineBtn = document.querySelector("#btn-shine-bundles")
    const growBtn = document.querySelector("#btn-grow-bundles")
    const changabelStatus = document.querySelector(".changable-status")
    const changableText = document.querySelector(".changable-text")
    const modalHeaderText = document.querySelector(".modal-header h5")
    const modalContent = document.querySelector(".modal-content")

    supportBtn.addEventListener("click",function(){
        modalSection.classList.remove("d-none")
        changabelStatus.textContent = "Pulsuz"
        changableText.textContent = "0 AZN"
        modalHeaderText.textContent = "``Dəstək`` tarif paketi"
    })
    growBtn.addEventListener("click",function(){
        modalSection.classList.remove("d-none")
        changabelStatus.textContent = "32 AZN və ya 16 USD/EUR/GBP"
        changableText.textContent = "40 AZN"
        modalHeaderText.textContent = "Biznesinizi inkişaf etdirmək  istəyirsiniz?"
    })
   
    shineBtn.addEventListener("click",function(){
        modalSection.classList.remove("d-none")
        changabelStatus.textContent = "Pulsuz"
        changableText.textContent = "110 AZN"
        modalHeaderText.textContent = "Biznesiniz əmin addımlarla irəliləyir? "
    })
  closeModalBtn.addEventListener("click",function(){
    modalSection.classList.add("d-none")
    
  })
 modalSection.addEventListener("click",function(e){

  if(e.target.classList.contains("modal-check")){
    modalSection.classList.add("d-none")
  }
    
 })



 window.addEventListener("scroll",(event)=>{
  console.log("test")
event.stopPropagation();
 })
}