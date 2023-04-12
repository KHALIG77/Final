export function direction(){
const btnYesIam  = document.querySelectorAll(".apply-buttons button")

$(document).ready(function() {
    $('.btn-direction').click(function() {
      $('html, body').animate({
        scrollTop: $('#apply-for-loan').offset().top-200
      }, 2000);
    });
  });


btnYesIam.forEach((btn)=>{
btn.addEventListener("click",()=>{
    if(btn.classList.contains("btn-white")){
window.location.href = "https://pashabank.digital/login?product=loans&creditType=ANNUITY&utm_source=direct&utm_medium=Scroller&utm_term=#/signup"
    }
    else{
        window.location.href = "https://pashabank.digital/login#/"
    }
})
})


}