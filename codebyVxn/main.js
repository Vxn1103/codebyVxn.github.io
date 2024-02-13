onload = () =>{
        document.body.classList.remove("container");
};

var b = document.getElementById("no")
b.addEventListener("click",change);
function change() {
        var i = Math.floor(Math.random()*1000)+1;
        var j = Math.floor(Math.random()*700)+1;
        b.style.left = i+"px";
        b.style.top = j+"px";

} 