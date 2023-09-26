// 1. Write a JavaScript program to set the background color of a paragraph.


const set_background = ()=> {
    const paras = document.querySelectorAll("p");
    paras.forEach((para)=>{
        para.style.backgroundColor = "red";
    })
}