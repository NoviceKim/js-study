// const user = {
//     id: 1,
//     name: "Kim",
// };

// // 비구조 할당
// // const { id, name } = user;
// // console.log(id, name);

// // 안에 넣은 key 뒤에 :로 별칭 붙일 수 있음
// const { id: number, name } = user;
// console.log(number, name);

// // ... -> 값만 복사. 주소값은 다름
// // 새로운 key-value 값을 넣으면 추가
// // 기존에 있던 key에 다른 값을 넣으면 수정
// let userUpdated = { ...user, age: 20 };
// console.log(userUpdated);

// 객체 스프레드
// let userUpdated = { ...user };

// console.log(userUpdated);

// let userUpdated = { ...user, age: 20 };

// console.log(userUpdated);
// 이미 해당 프로퍼티가 존재하면 수정된다.
// let userUpdated = { ...user, name: "ted" };

// console.log(userUpdated);

// rest
const user = {
    id: 1,
    name: "Kim",
};

const userUpdated = { ...user, age: 20 };

const { age, ...rest } = userUpdated;
console.log(age, rest);
