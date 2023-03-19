const h1 = document.querySelector("div.hello:first-child h1 ");
//querySelector는 앞서 나열한 모든걸 할 수 있다.
//querySelectorAll을 사용하면 hello 라는 이름의 class를 전부 가져올수 있다.


//JavaScript에서 대부분 작업할일은 event를 listen 하는거다.
//click 마우스를 올려놓고 나 하는 다양한 작업들을 말한다.

function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText ="Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}

function handleWindowCopy(){
    alert("copier");
}

function handleWindowOffiline(){
    alert("SoS no WIFI")
}

h1.addEventListener("click",handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffiline);

