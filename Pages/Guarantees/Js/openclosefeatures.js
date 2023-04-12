export function openCloseFeatures(){
  const btnAdvantages = document.querySelector(".first-title")
  const btnBenefits = document.querySelector(".second-title")
  const sectionAdv = document.querySelector(".features-first")
  const sectionBnf = document.querySelector(".features-second")


  btnAdvantages.addEventListener("click",function(){
    sectionBnf.classList.add("d-none")
    sectionAdv.classList.remove("d-none")
    btnBenefits.classList.remove("active-title")
    btnAdvantages.classList.add("active-title")
  })

  btnBenefits.addEventListener("click",function(){
    sectionAdv.classList.add("d-none")
    sectionBnf.classList.remove("d-none")
    btnAdvantages.classList.remove("active-title")
    btnBenefits.classList.add("active-title")
  })




}