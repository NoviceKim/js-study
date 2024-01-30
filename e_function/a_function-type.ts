// 함수는 무조건 값으로 본다
// function add(num1: number, num2: number): number {
//     return num1 + num2;
// }

// 디폴트 파라미터
// 값이 전달되지 않았을 경우 사용할 초기값을 전달할 수 있다
function add(num1: number, num2: number, num3 = 0): number {
    return num1 + num2 + num3;
}

let result = add(1, 3);
console.log(result);

// 아이디, 비밀번호, 닉네임을 전달받는다.
// 이 때 닉네임의 기본 값은 '없음'으로 설정한다.
function user(id: string, password: string, nickname = "없음"): string {
    result = `아이디: ${id}\n비밀번호: ${password}\n닉네임: ${nickname}`;

    return result;
}

console.log(user("kgh1234", "1234", "kgh"));
