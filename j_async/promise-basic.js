// Promise 타입은 대기, 이행(resolve), 거절(reject)의 3가지 상태가 있음
const promise = new Promise((resolve, reject) => {
    let check = true;

    if (check) {
        resolve("성공!");
    } else {
        reject("실패...");
    }
});

// then: promise 요청이 성공했을 때 실행
// catch: promise 요청이 실패했을 때 실행
promise
    .then((result) => {
        console.log(`resolve: ${result}`);
    })
    .catch((result) => {
        console.log(`reject: ${result}`);
    });
