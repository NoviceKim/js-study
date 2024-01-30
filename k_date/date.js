let now = new Date();

console.log(now);

// 월 부분은 0(1월)부터 시작
let date1 = new Date(2023, 1, 1, 12, 0, 0);
console.log(date1);

// 문자열을 전달하면, 날짜와 상관 없는 부분은 생략된다
let date2 = new Date("오늘 날짜 2023-01-01");
console.log(date2);

const format = `${now.getHours()}시 ${now.getMinutes()}분`;
console.log(format);

// 가져온 시간은 기본적으로 UTC 시간
console.log(now.toUTCString());

// 따라서 운영체제에 등록된 로컬 시간을 가져오는 것이 일반적이다
console.log(now.toLocaleString());
