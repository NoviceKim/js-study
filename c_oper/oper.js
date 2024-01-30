// // == : 값만 비교
// // === : 값과 타입 모두 비교
// data1 = 1;
// data2 = "1";

// console.log(data1 == data2);
// console.log(data1 === data2);

// // || : 앞에 있는 값이 false 값이라면, 뒤에 있는 값으로 사용됨
// // false로 취급되는 값: 0, 빈 문자열(""), null, undefined
// let value; // undefined
// let data = value || 10;
console.log(data);

// // && : 앞의 조건식이 false면 false, true면 뒤에 있는 값으로 취급
// let check = true;
// console.log(check && 10);

// 삼항 연산자 (?:)
// 조건식 ? 참 : 거짓
let check = 10 > 11; // false
console.log(check ? 10 : 11);
