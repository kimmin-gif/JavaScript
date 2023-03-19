// function sayHello(){
//     console.log("Hello my name is" + nameOfPerson +"and I'm" + age)
// }

// sayHellohello("nico", 10);
// // sayHello("dal", 23);
// // sayHello("lynn", 21)

// function plus(a,b){
//     console.log(a + b);
// }

// plus(8,60);

const a= 5; // const는 동일한 값을 넣을수없다.
let isNicoFat =true; //let은 업데이터가 가능하다.

// var // 변하지 못하는값이다.

let isNcoFat = false;
 
// bollean : 두가지 값만
// null : 비어있는값
//undefined : 변수에 값을 부여하지 않음 

const toBuy = ["ptato","tomato","pizza"]

console.log(toBuy[2]);

console.log(toBuy);
toBuy[2] = "water"
console.log(toBuy);

//array 또한 뭔가를 추가해줄수있다. 
toBuy.push("meat")

const player = {
    name : "Nico",
    age : 98,
};

player.name = "nicolas";
console.log(player);//object는 업데이트가 된다.

function plus(a,b){
    console.log(2+2);
}

plus(5,10);
plus(1.33453,9898);

const player = {
    add : function(a,b){
        console.log(a,b);
    }
};

calculator.add(5,1);
console.log()
