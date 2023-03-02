 const mon = "mon";
 const tue = "tue";
 const wed = "wed";
 const thu = "thu";
 const fri = "fri";
 const sat = "sat";
 const sun = "sund";

 const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat" , "sun"];

const nonsense =[1, 2, "hello", false, null, true ,undefined, "min"];

console.log(daysOfWeek); // fri 값이 출력된다.
// fri가 5번째에 있는데 dayOfWeek[4]인 이유는
// 컴퓨터는 1부터 시작이 아니라 0부터 시작을 한다.

daysOfWeek.push("sun"); // 마지막에 데이터를 넣어준다.

console.log(daysOfWeek);


const toBuy = ["potato1","tomato", "apple"]

console.log(toBuy[3]);

