// 3가지 연산을 한다
// 코드는 무조건 간격하게 출력하는게 제일 좋다



// variable을 사용하면 값을 저장하거나 유지하는 역할을 한다.
// variable을 만들기 위해서는 가장 먼저 const라는걸 사용한다.
// 이건 constant상수라는 의미다 바뀌지 않는 값을 뜻한다.

const a = 5;
const b = 2;
let myName = "min"; 

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("Hello " + myName);

// 이렇게하면 두번만 수정하면 된다. 
// 간단한 variable이다.

// 자바 스크립트는 카멜케이스를 쓴다.


// const : 바뀔수 없는값을 말한다.
// let : 바뀔수 있는 값을 말한다.
myName ="minseung"; //에러가 난다. 새로운 대입값을 넣을수없다.
                    // 그이유는 위에 myName을 바뀔수없는값인 const로 넣었기 때문이다.
                    // 만약 바뀌려면 let myName ="min"으로 바꾸면 된다.
console.log("your new name is " + myName);

// 대부분의 프로그램 모든 변수는 const로 기본적으로 쓴다.
// 기본적으로 const를 사용하고, 필요할때만 let을 사용한다.
// var는 어디서든 업데이트가 가능한다.  언어를 통한 보호를 받지못해 잘 사용하지 않는다.

const amIFat =true; 
let sometihing;

console.log(sometihing);

// null은 아무것도없다라는 뜻이다.
//true : true 타입, false : false타입
//null : null 타입 , undefined : undefined타입 정의되지 않은값.
//이것들은 각자의 타입이지 문자형타입이나 숫자형 타입이아니다.
//null 어떤 것이 없다는것을 말한다. 여기엔 값이 없다 비어있다라는 표현이다.

