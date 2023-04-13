 export function animation(){
    window.addEventListener("beforeunload",()=>{
        window.scrollTo(0,0)
    })
    
    let sections = document.querySelectorAll("main section")
    sections = Array.from(sections).slice(2)
    sections.forEach((sec)=>{
    sec.classList.add("opacity-animation")
    })
    
    window.addEventListener("scroll",function(){
        
        let scrolled = window.pageYOffset;
        if(scrolled>500){
    
    
    sections.forEach((section)=>{
        
    if(scrolled>=section.offsetTop-400){
    section.classList.add("section-animation")
    }
    })
        }
    })
}

