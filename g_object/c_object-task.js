// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.

// 각 프로퍼티(고객) 이름을 customer1 ~ 3 으로 설정
const mart = {
    customer1: {
        name: "홍길동",
        age: 30,
        point: 3500,
    },
    customer2: {
        name: "이순신",
        age: 22,
        point: 0,
    },
    customer3: {
        name: "장보고",
        age: 66,
        point: 9500,
    },
};

// 각 프로퍼티 이름이 연속된 값을 포함하고 있으므로
// for문과 백틱(`), [] 를 사용해서 아래의 방법대로 한 번에 출력 가능
for (let i = 1; i < 4; i++) {
    console.log(mart[`customer${i}`]);
}

mart.customer3 = {
    name: "김광협",
    age: 27,
    point: 5000,
};

for (let i = 1; i < 4; i++) {
    console.log(mart[`customer${i}`]);
}
