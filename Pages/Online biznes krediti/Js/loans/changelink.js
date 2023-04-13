export  function changeLink(){
    let num = 0;
   
window.addEventListener("load",function(){

  
num = Number(this.localStorage.getItem("link"))
num++;
   this.localStorage.setItem("link",num)
const videoFirst = this.document.querySelector(".video-first")
const videoSecond  = this.document.querySelector(".video-second")


   

   if(num % 2 == 0){
videoFirst.classList.add("d-none")
videoSecond.classList.remove("d-none")
   }
   else{
videoFirst.classList.remove("d-none")
videoSecond.classList.add("d-none")

   }
  
})
}