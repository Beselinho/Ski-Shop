a = 10;
function f(){
    let a = 20;
    console.log(a);
    console.log(window.a);
}


window.onload = function(){
    document.getElementById("abc").innerHTML="<b>xdd</b>"
    let v = document.getElementsByClassName("pgf");
    console.log(v.length)

    let buton = document.getElementsByTagName("button")[0];
    buton.onclick = function(){
        document.getElementById("abc").style.backgroundColor ="red";

    }
}
