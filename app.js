let add = document.getElementById("add")
let clear = document.getElementById("clear")
let tododiv = document.getElementById("tododiv")
let textarea = document.getElementById("textarea")

add.addEventListener("click",function(){
  let paragraph = document.createElement("li")
  paragraph.classList.add("li-style")
  tododiv.appendChild(paragraph)
  paragraph.innerHTML = textarea.value
  textarea.value = "";

  paragraph.addEventListener("click", function(){
    paragraph.style.opacity="0.5";
    paragraph.style.textDecoration="line-through";
  })
//tek tek silmek için
  paragraph.addEventListener("dblclick", function(){
    tododiv.removeChild(paragraph)
  })
//Clear butonu için
  clear.addEventListener("click", function(){
    //tododiv.remove(paragraph)
    paragraph.remove();
  })
})
