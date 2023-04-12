export function changeLink(){
    let num = 0;
window.addEventListener("load",function(){
num = this.localStorage.getItem("link")
num++;
   
   this.localStorage.setItem("link",num)
   let youtubeImg = this.document.querySelector(".youtube-video img")
//    console.log(youtubeImg)
let youtubeLink ;
   if(num % 2 == 0){
// console.log(num + "cut")
 youtubeLink = youtubeImg.setAttribute("src","../../../assets/images/flexible_credit_cover.png") 
   }
   else{
    // console.log(num + "tek")
     youtubeLink =youtubeImg.setAttribute("src","../../../assets/images/appstore.png") 
   }
  
})
}