export function requestPost(){
    const requestName = document.querySelector(".request-name")
    const requestNumber = document.querySelector(".request-number")
    const btnSubmit =document.querySelector(".btn-request")
    const sectionModal = document.querySelector("#modal-for-guarantees")

let requestNameValue ="";
let requestNumberValue;

    requestName.addEventListener("change",function(){
       requestNameValue =  requestName.value
      
    })
    requestNumber.addEventListener("change",function(){
        requestNumberValue = requestNumber.value
       
    })
btnSubmit.addEventListener("click",function(){
    let imageCheck =document.querySelector("#modal-for-guarantees img")
    let textCheck = document.querySelector("#modal-for-guarantees h3")
   
    const phoneRegex = /^(050|051|055|070|077|099|010)\d{7}$/;
    const nameRegex = /^[a-zA-Z]+$/;
    if(nameRegex.test(requestNameValue)&&phoneRegex.test(requestNumberValue)){
        const user ={
            name:"",
            number:0
        }
        user.name = requestNameValue
        user.number = requestNumberValue
fetch('https://jsonplaceholder.typicode.com/posts',{
method:'POST',
headers:{
    'Content-type':'application/json'
},
body:JSON.stringify(user)}).then(responce => responce.json()).then(user =>{
    console.log('Success',user) ;

}).catch((error) =>{
    console.log("Error",error)
})


        sectionModal.classList.remove("d-none")
        imageCheck.setAttribute("src","../../assets/images/done.svg")
        textCheck.textContent = "Sorğunuz uğurla göndərildi"
        setTimeout(()=>{sectionModal.classList.add("d-none")},3000)

    }
    else
    {
        sectionModal.classList.remove("d-none")
        textCheck.textContent = "Məlumatları düzgün daxil edin"
        imageCheck.setAttribute("src","../../../assets/images/error3.png")
        setTimeout(()=>{sectionModal.classList.add("d-none")},3000)
        
    }
})


}