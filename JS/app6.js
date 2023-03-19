const h1 = document.querySelector("div.hello:first-child h1 ");



function handleTitleClick(){
    if(h1.classname === "active"){
        h1.className = " ";
    } else {
        h1.className = "active";
    }
}

h1.addEventListener("click", handleTitleClick);


//step 1 element를 찾아라
//step 2 event를 listen 해라 
//step 3 그 event에 반응해라 