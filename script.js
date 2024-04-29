let rootEle = document.querySelector(":root");
let toggleBtn = documet.querySelector(".toggleBtn");

rootEle.classList.add("light-mode");
toggleBtn.children[1].classList.add("displayNone");

function modeToggle(){
     rootEle.classList.toggle("dark-mode");
     toggleBtn.children[0].classList.toggle("displayNone");
     toggleBtn.children[1].classList.toggle("displayBlock");
     
}

//navshadow
window.addEventListener("scroll",()=>{
     let navbar = document.querySelector("nav");
     if(window.scrollY > 0){
          navbar.classList.add(".navShadow");
     }
     else{
          navbar.classList.remove("navShadow")
     };
});

let allNavMenuItems = documet.querySelectorAll(".navMenuItem");
let navLogo = document.querySelector(".navLogo a");
let hireMe = document.querySelector("hireMe");

function activeClassFunction(clickEle, addClassEle){
     clickEle.addEventListener("click",() =>{
          allNavMenuItems.forEach((e) =>{
               e.classList.remove("navActive");
          });
          addClassEle.classList.add("navActive");
     });
};

for(let i=0;i<allNavMenuItems.length;i++){
     activeClassFunction(allNavMenuItems[i], allNavMenuItems[i])
};
activeClassFunction(navLogo, allNavMenuItems[0]);
activeClassFunction(hireMe, allNavMenuItems[4]);
