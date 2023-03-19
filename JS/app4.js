const title = document.querySelector(".hello");

function handTitleClick(){
    console.log("title was clicked");
}


// 첫번째 우리는 eventListener는 말 그대로 event listen 하고 싶은지 알려줘야함

// 우리가 바라는건 유저가 title을 click할 경우에 자바스크립트가
// 실행버튼을 대신 눌러주길 바라는 거다. 

title.addEventListener("click", handTitleClick);

title.getElementsByClassName.color ="blue";