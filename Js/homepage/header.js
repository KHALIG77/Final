export function navbarHover() {
  const hiddenNavInfo = document.querySelector(".header-info");
  const headerMenu = document.querySelector(".header-menu");
  const navbarA = document.querySelectorAll(".header-menu a");
  const forBusiness = document.querySelector(".forbusiness");
  const forCredit = document.querySelector(".forcredit");
  const forFactoring = document.querySelector(".forfactoring");
  const forTransaction = document.querySelector(".fortransaction");
  const forAdditionalOperations = document.querySelector(".foradditional-operations");
  const hamburgerMenuIcon = document.querySelector(".hamburger-menu");
  const responsiveNav = document.querySelector(".responsive-nav");
  const businessResponsive = document.querySelector(".business-responsive");
  const businessUl = document.querySelector(".ul-business");
  const creditResponsive = document.querySelector(".credit-responsive");
  const creditUl = document.querySelector(".ul-credit");
  const factoringResponsive = document.querySelector(".factoring-responsive");
  const factoringUl = document.querySelector(".ul-factoring");
  const transactionResponsive = document.querySelector(".transaction-responsive");
  const transactionUl = document.querySelector(".ul-transaction");
  const additionalResponsive = document.querySelector(".additional-responsive");
  const additionalUl = document.querySelector(".ul-additional");
  const allUlInNav = document.querySelectorAll(".responsive-nav ul ul");
  const loadSection  = document.querySelector(".loading")



window.addEventListener("load",function(){
this.setTimeout(()=>{
loadSection.classList.add("loading-end")
},1000)
this.setTimeout(()=>{
  loadSection.classList.add("d-none")
},2000)
 
})


  navbarA.forEach(function (a) {
    a.addEventListener("mouseover", function (event) {
      let check = event.target.getAttribute("data-check");

      hiddenNavInfo.classList.remove("d-none");
      if (a.classList.contains("business") || check === "business") {
        
        forBusiness.classList.remove("d-none");
      } else {
        forBusiness.classList.add("d-none");
      }
      if (a.classList.contains("credit") || check === "credit") {
        
        forCredit.classList.remove("d-none");
      } else {
        forCredit.classList.add("d-none");
      }
      if (a.classList.contains("factoring") || check === "factoring") {
       
        forFactoring.classList.remove("d-none");
      } else {
        forFactoring.classList.add("d-none");
      }
      if (a.classList.contains("transaction") || check === "transaction") {
        
        forTransaction.classList.remove("d-none");
      } else {
        forTransaction.classList.add("d-none");
      }
      if (
        a.classList.contains("additional-operations") ||
        check === "operations"
      ) {
        
        forAdditionalOperations.classList.remove("d-none");
      } else {
        forAdditionalOperations.classList.add("d-none");
      }
    });

    window.addEventListener("mousemove", function (e) {
      if (e.clientY > 330) {
        hiddenNavInfo.classList.add("d-none");
      }
    });
  });
  headerMenu.addEventListener("mousemove", function (e) {
    if (e.clientX > 940 || e.clientX < 250) {
      hiddenNavInfo.classList.add("d-none");
    }
  });

  hamburgerMenuIcon.addEventListener("click", function () {
    hamburgerMenuIcon.classList.add("d-none");
    hamburgerMenuIcon.nextElementSibling.classList.remove("d-none");
    responsiveNav.classList.remove("d-none");
    businessResponsive.addEventListener("click", function () {
      businessUl.classList.toggle("d-none");
      activCheck(businessUl);
     
   
    });
    creditResponsive.addEventListener("click", () => {
      creditUl.classList.toggle("d-none");
      activCheck(creditUl);
     
      
    });
    factoringResponsive.addEventListener("click", function () {
      activCheck(factoringUl);
      factoringUl.classList.toggle("d-none");
    });
    transactionResponsive.addEventListener("click", function () {
      activCheck(transactionUl);
      transactionUl.classList.toggle("d-none");
    });
    additionalResponsive.addEventListener("click", function () {
      activCheck(additionalUl);
      additionalUl.classList.toggle("d-none");
    });
  });
  hamburgerMenuIcon.nextElementSibling.addEventListener("click", function () {
    hamburgerMenuIcon.classList.remove("d-none");
    hamburgerMenuIcon.nextElementSibling.classList.add("d-none");
    responsiveNav.classList.add("d-none");
  });
  window.addEventListener("resize", function () {
    if (this.window.innerWidth >= 992) {
      responsiveNav.classList.add("d-none");
      hamburgerMenuIcon.nextElementSibling.classList.add("d-none");
      hiddenNavInfo.classList.add("d-none")
      

    } else {
      // hamburgerMenuIcon.classList.remove("d-none")
      hamburgerMenuIcon.nextElementSibling.classList.add("d-none");
hamburgerMenuIcon.classList.remove("d-none")
      hiddenNavInfo.classList.add("d-none");
    }
  });

  function activCheck(nav) {
    allUlInNav.forEach(function (ul) {
      if (!ul.classList.contains("d-none")) {
        ul.classList.add("d-none");
        nav.classList.toggle("d-none")
      }
    });
  }
  const btnNav = document.querySelector(".btn-nav");
  btnNav.addEventListener("click", () => {
    window.location.href = "https://pashabank.digital/login#/";
  });
}
