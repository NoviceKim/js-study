// // 지역 변수
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i);

// // 전역 변수
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i);

// 전역 변수
// Node.js에서는 전역벼누를 모두 global 객체에서 관리
// 브라우저(.html)에서는 window 객체에서 전역변수를 관리
// 따라서, 둘 중 어디에서 쓸 지 모를 때에는 globalThis 객체를 사용하면 된다.
globalThis.x = 10;
// let x = 10;

function f() {
    // 지역 변수
    let x = 20;
    console.log(globalThis.x, x);
}

f();
console.log();
