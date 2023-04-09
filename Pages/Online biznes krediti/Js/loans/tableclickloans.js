export function tableClick(){
const importantText = document.querySelector(".important-text")
const creditText = document.querySelector(".credit-text")
const importantTable = document.querySelector(".important-table")
const creditTable = document.querySelector(".credit-table")
 
importantText.addEventListener("click",function(){
importantTable.classList.remove("d-none")
creditTable.classList.add("d-none")
})
creditText.addEventListener("click",function(){
    creditTable.classList.remove("d-none")
    importantTable.classList.add("d-none")
})
}
