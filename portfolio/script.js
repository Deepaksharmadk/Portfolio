let openMenu=document.querySelector(".fa-bars");
console.log(openMenu);
let sidebar=document.querySelector("#sidemenu");
console.log(sidebar);
let closemenu=document.querySelector(".fa-xmark");
console.log(closemenu);
openMenu.addEventListener("click",function (){
    sidebar.style.right="0px";
  
});
closemenu.addEventListener("click",function(){
    sidebar.style.right="-200px";
});
