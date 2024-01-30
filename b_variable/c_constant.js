// 기본적으로 재선언, 재할당 불가
// const ERROR_CODE = 403;
// ERROR_CODE = 404;
// console.log(ERROR_CODE);

const arr = [1, 2, 3, 4, 5];

// 배열 대신 다른 값을 할당하는 것은 당연히 불가
// arr = 7;

// 단, 배열 안의 값을 바꾸는 것은 가능
arr[0] = 6;

// for (i in arr) {
//     console.log(arr[i]);
// }

console.log(arr);
