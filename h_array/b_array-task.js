// 10~1까지 Array 객체에 담은 후 짝수만 출력
const arr = [];

for (i = 0; i < 10; i++) {
    arr.push(10 - i);
}

const resultArr = arr.filter((data) => data % 2 == 0);

console.log(resultArr);

// 한글을 숫자로
// 삼사칠구 -> 3479
const exStr = "영일이삼사오육칠팔구";

// 숫자로 변환할 문자열
const sampleKor = "삼사칠구";

// 결과값(인덱스)이 담길 빈 문자열
const resultNumArr = [];

// for ... of 문으로 문자열의 각 문자들 하나씩 갖고 올 수 있음
// exStr -> '영' ~ '구' 까지
for (i of exStr) {
    // 만약 sampleKor 에 해당 문자가 있다면
    if (sampleKor.includes(i)) {
        // 그 문자의 인덱스(숫자)를 resultNumArr에 추가
        resultNumArr.push(exStr.indexOf(i));
    }
}

// join() 함수로 숫자 이어붙이고 출력
console.log(resultNumArr.join(""));

// 강사님 예시
// const changeNum = (...input) => {
//     const kor = [..."공일이삼사오육칠팔구"];
//     return Number(input.map((el) => kor.indexOf(el)).join(""));
// };

// const input = "일공이사";
// const resultInt = changeNum(...input);
// console.log(resultInt);

// 숫자를 한글로
// 3479 -> 삼사칠구
// const exStr = "공일이삼사오육칠팔구";
const sampleNum = "3479";
const resultKorArr = [];

// exStr을 배열로 변환
const exArr = exStr.split("");

// sampleNum 문자열을 문자(숫자) 하나하나 뜯고
for (i of sampleNum) {
    // exArr의 해당 인덱스에 있는 값(문자)을 resultKorArr에 push
    resultKorArr.push(exArr[i]);
}

// for문으로 생성한 배열을 문자열 형태로 변환
console.log(resultKorArr.join(""));

// 1~100까지 합 출력
const numArr = [];

for (i = 0; i < 100; i++) {
    numArr.push(i + 1);
}

const result = numArr.reduce((variable, data) => {
    return variable + data;
}, 0);

console.log(result);
