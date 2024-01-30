// 콜백 함수는 "분리"의 목적이다

// arrow expression(function)
// function printName(name) {
//     console.log(name);
// }

// const printName = (name) => {
//     console.log("name");
// };

// printName();

// 두 정수의 덧셈 결과 출력
// const add = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 + number2);
//     }
//
//     return number1 + number2;
// };

// add(1, 4, (result) => {
//     console.log(result);
// });

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
// const multply = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 * number2);
//     }

//     return number1 * number2;
// };

// const result = multply(3, 5, (result) => {
//     console.log(result * 2);
// });

// 성과 이름을 전달받아 풀네임을 만든 뒤, "000님" 출력
const fullName = (first_name, last_name, callback) => {
    if (callback) {
        callback(first_name + last_name);
    }

    return first_name + last_name;
};

fullName("김", "광협", (result) => console.log(`${result}님`));

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true, 아니면 false
const productCount = (price, total, callback) => {
    if (callback) {
        callback(total / price);
    }

    return total / price;
};

productCount(1000, 5000, (result) => {
    result <= 5 ? console.log(true) : console.log(false);
});

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 경우 결제 완료, false일 경우 결제 취소 출력

/*
    callback 없이 화살표 함수만으로 결제 상태 판별 + 출력까지 하나의 함수로 구현했지만,
    결제 상태의 값만 필요한 경우도 있으니 아래 예시처럼
    결제 상태(true/false)를 return 하는 함수와 출력하는 함수를 구분해서 쓰는 게 좋음
*/

// const paymentSystem = (price, isPaid) => {
//     isPaid == true
//         ? console.log(`${price}원 결제 완료`)
//         : console.log(`${price}원 결제 취소`);
// };

// paymentSystem(5000, false);

/*
    결제 상태를 설정하는 함수
    isPaid는 true/false 만 들어갈 수 있음
*/
const setPaidStatus = (price, isPaid, callback) => {
    // 만약 callback(함수)이 있다면
    if (callback) {
        // callback(함수)의 인자에 위 결과에 따라 다른 문자열 전달
        callback(isPaid ? `${price}원 결제 완료` : `${price}원 결제 취소`);
    }

    // 위 if문(callback 전달 여부)과는 별개로, 이 함수 자체에서 결제 상태에 따른 문자열 반환
    // callback을 전달하지 않으면 이 문자열을 다른 곳에서 값으로 사용할 수 있음
    return isPaid ? `${price}원 결제 완료` : `${price}원 결제 취소`;
};

/*
    setPaidStatus 함수 사용
    callback으로 화살표 함수 전달
    위 callback의 처리 결과로 나온 문자열을 인자로 받고, 그대로 출력
*/
setPaidStatus(3000, true, (message) => {
    console.log(message);
});

// setPaidStatus 함수에 callback에 해당하는 인자(함수) 전달하지 않고, return 하는 문자열을 값으로 사용
const resopnse = `${setPaidStatus(5000, false)}.\n이용해주셔서 감사합니다.`;

console.log(resopnse);
