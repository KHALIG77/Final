export function calculate(){
    // COUNT START
    const countTextInput = document.querySelector("#count-text-input")
    const countRangeInput = document.querySelector("#count-range-input")
// COUNT END

// MONTH START

 const monthTextInput = document.querySelector("#month-text-input")
 const monthRangeinput =document.querySelector("#month-range-input")

// MONTH END

// TEXTCONTENT START
const monthPayment = document.querySelector(".month-payment")
const percentageText = document.querySelector(".percentage")

// TEXTCONTENT END

let percentageValue = 0.10;
let countValue = 5000;
let monthValue = 3;






monthRangeinput.addEventListener("input",function(){
    // console.log(monthRangeinput.value)

if(monthRangeinput.value>12){
console.log("12den boyuk")
percentageValue = 0.20;
percentageText.textContent = "20%";
}
else{
    percentageValue = 0.10;
    percentageText.textContent = "10%";
}

    monthTextInput.value = monthRangeinput.value
    monthValue = monthRangeinput.value
    monthPayment.textContent = `${Math.round((countValue+(countValue * percentageValue)) / monthValue)} AZN`
})


  countTextInput.addEventListener("input",function(){
//    console.log(countTextInput.value)
countValue = Number(countTextInput.value)

   if(countTextInput.value>=5000){
    countRangeInput.value = Number(countTextInput.value)
    countValue = Number(countTextInput.value)
    
   }
   else{
    countRangeInput.value = 5000;
    countValue = 5000;
   }
   console.log(typeof countValue,typeof percentageValue,typeof monthValue)
   monthPayment.textContent = `${Math.round((countValue+(countValue * percentageValue)) / monthValue)} AZN`
   
  }
  
  
  )
  countRangeInput.addEventListener("input",function(){
  
   countValue = Number(countRangeInput.value)

        countTextInput.value = Number(countRangeInput.value)
        countValue = Number(countRangeInput.value)
        monthPayment.textContent = `${Math.round((countValue+(countValue * percentageValue)) / monthValue)} AZN`
    
  })



}