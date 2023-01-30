let menu = document.querySelector(".binfo"),
    b = document.querySelector(".burger"),
    l = document.querySelectorAll(".line"),
    lc = document.querySelectorAll(".lineC"),
    navig = document.querySelector(".binfo ul");


b.addEventListener("click", OCmenu);
navig.addEventListener("click", OCmenu);

function OCmenu(){
    menu.classList.toggle("binfoActive")
    console.log(navig);
    lc.forEach((el)=>{
        el.classList.toggle("lineC_active")
        el.classList.toggle("lineC_inactive")
    })

    l.forEach((el)=>{
        el.classList.toggle("line_active")
        el.classList.toggle("line_inactive")
    })
};