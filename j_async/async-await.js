// // async가 붙으면 비동기가 된다 - Promise 객체에 담김
// // 따라서 아래 함수를 콘솔에 출력하면, 리턴한 문자열이 Promise 객체에 담겨서 출력된다
// async function getName() {
//     // 여기서의 리턴값은 Promise 객체의 resolve(성공 시 실행)에 담긴다
//     return "hds";
// }

// // 함수를 비동기로 선언
// async function printName() {
//     // 비동기로 선언했더라도 한 번 더 await를 붙여준다
//     const name = await getName();
//     // 마무리는 안에서
//     // 만약 콜백을 사용하고 싶다면, 해당 콜백함수에 마무리를 맡긴다
//     console.log(name);
// }

// printName();

// // async function getName() {
// //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
// //     const users = await response.json();
// //     console.log(users);
// // }

// console.log(getName());

// () => {} 뒤에 () 가 한 번 더 들어가므로, userService에는 주소가 아닌 값이 들어간다
const userService = (() => {
    // 전체 조회 모듈
    /*
        selectAll의 목적은 어디까지나 'url에서 데이터를 가져오는 것'
        callback은 가져온 데이터를 가공(여기서는 출력)하기 위함

        selectAll이 모든 걸 다 할 필요가 없다.
        출력은 callback에 맡기자.
    */
    const selectAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();

        // callback이 있다면, callback의 인자에 users를 전달한다
        if (callback) {
            callback(users);
        }
    };

    // 특정 id로 조회하는 모듈
    /* 
        id는 조회에 필요하니까 전달
        그리고 위와 마찬가지로 이후의 처리를 맡길 callback을 따로 받는다
    */
    const findById = async (id, callback) => {
        const response = await fetch(`/abc?id=${id}`);
        const user = response.json();

        if (callback) {
            callback(user);
        }
    };

    return { selectAll: selectAll, findById: findById };
})();

userService.selectAll((users) => {
    console.log(users);
});

userService.findById(1, (user) => {
    console.log(user);
});

/*
    동기는 먼저 실행되고,
    비동기는 나중에 실행된다

    비동기는 통신(fetch)을, 동기는 나머지를 의미한다.

    따라서 통신을 위해서는 동기로 실행되는 모든 것을 비동기로 만들어줘야 한다(async)
*/
