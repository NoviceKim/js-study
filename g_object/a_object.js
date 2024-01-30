// JS에서는 객체 내부의 필드를 '프로퍼티' 라고 부른다
let user = {
    name: "김광협",
    age: 27,
    address: "경기도 광주",
    introduce: () => {
        console.log("Hello :D");
    },
};

console.log(typeof user);

user.introduce();

// 보통 객체의 값에는 이 방식으로 접근
console.log(user.name);

// 만약 프로퍼티 이름에 특수문자(- 등)가 포함되어있거나
// 프로퍼티 이름에 규칙성(~1, ~2 등)이 있어서 한 번에 가져와야 되는 경우,
// [] 를 이용한 아래의 방법을 사용
console.log(user["name"]);
