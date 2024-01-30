// setTimeout(() => {
//     console.log("timer");
// });

// setImmediate(() => {
//     console.log("check");
// });

// setTimeout 함수는 1ms가 최소 - 0으로 맞춰놔도 1ms 후에 동작하도록 설계되어있다
// 1. 타이머 큐에 등록
// 2. 검사 큐에 등록
// 3. 틱 큐에 등록

// 처리 순서
// 1. 틱 큐 비우기
// 1-1. 1번 틱 안의 타이머2를 처리하고자 타이머1도 처리
// 1-2. 1번 틱 안의 검사2를 처리하고자 검사1도 처리
// 2. 2번 틱 처리
setTimeout(() => {
    console.log("timer1");
}, 0);

setImmediate(() => {
    console.log("check1");
});

// tick이 모두 작동된 이후에 다음 작업으로 넘어간다
process.nextTick(() => {
    setTimeout(() => console.log("timer2"), 0);

    setImmediate(() => {
        process.nextTick(() => console.log("tick2"));
        console.log("check2");
    });

    console.log("tick1");
});
