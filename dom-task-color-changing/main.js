let  container = document.getElementById("container");
for(let i =0 ;i < 8;i++){
    addingDiv(i)
}
function addingDiv(i){
    let p = document.createElement("span")
    p.setAttribute("class","box");
    p.setAttribute("style",`background-Color:${getRandomColor()}`);
   
    container.appendChild(p)

}
let boxes = document.getElementsByClassName("box")
for(let box of boxes){
    box.onmouseover = function(){
        box.setAttribute("style",`background-Color:${getRandomColor()}`)
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }