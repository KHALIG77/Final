 export function openClose(){
const btnCorporativ = document.querySelector(".btn-corporativ")
const sectionCorporativ = document.querySelector(".section-corporativ")
const btnTajir = document.querySelector(".btn-tajir")
const sectionTajir = document.querySelector(".section-tajir")
const btnCustoms = document.querySelector(".btn-customs")
const sectionCustoms = document.querySelector(".section-customs")

btnCorporativ.addEventListener("click",()=>{
if(sectionCorporativ.classList.contains("d-none")){
    sectionCorporativ.classList.remove("d-none")
    btnCorporativ.textContent = "Bagla"
}
else{
    sectionCorporativ.classList.add("d-none")
    btnCorporativ.textContent = "Ətraflı"
}
})
btnTajir.addEventListener("click",()=>{
    if(sectionTajir.classList.contains("d-none")){
        sectionTajir.classList.remove("d-none")
        btnTajir.textContent = "Bagla"
    }
    else{
        sectionTajir.classList.add("d-none")
        btnTajir.textContent = "Ətraflı"
    }

    })
    btnCustoms.addEventListener("click",()=>{
        if(sectionCustoms.classList.contains("d-none")){
            sectionCustoms.classList.remove("d-none")
            btnCustoms.textContent = "Bagla"
        }
        else{
            sectionCustoms.classList.add("d-none")
            btnCustoms.textContent = "Ətraflı"
        }
        })

}