// const age = 96;
// function calculateKrAge(ageOfForeigner){
//     ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);


 
//바로 조건문이다.

const age = parseInt(prompt("How old are you?"));



if(isNaN(age) || age < 0 ){
    console.log("Please write a real positive number");
} else if(age < 18){
    console.log("You are too young.");
} else if(age >= 18 && age <= 50){
    console.log("You can drink");
} else if(age > 50 && age <=80){
    console.log("You should exercise");
} else if(age >80){
    console.log("You can do whatever you want.");
}
//연산을 천천히 진행하면 참 값의 console들이 나온다.


