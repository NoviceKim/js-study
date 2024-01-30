// fetch.js 파일의 출력값은 객체 10개가 들어있는 배열
// 각 인덱스의 'address'키 -> 'zipcode' 키 순으로 접근
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        // for... of 사용 예시
        // 우선 각 인덱스 순회
        for (i of users) {
            // 각 인덱스 별 'address' 키 안의 값(객체) 안에 있는 'zipcode' 키 값 출력
            console.log(`id: ${i.id} / zipcode: ${i.address.zipcode}`);
        }

        /*
            forEach 사용 예시

            1. fetch() 함수 안 url에 데이터 요청
            2. 성공 시(then), 해당 요청에 대한 결과를 콜백함수의 인자(response)에 담음 - 현재 promise 타입
            3. json() 함수를 사용해서 response에 담긴 데이터를 JS 객체로 변환

            4. 위 json을 변환해서 나온 배열(users)을 각 인덱스 별로 분리
            5. forEach문 사용. 인자로 콜백함수를 받고, 콜백함수는 각 인덱스에 있는 내용(객체)를 받음
        */
        users.forEach((user) => {
            const { zipcode } = user.address;
            test(zipcode);
        });
    });

function test(zipcode) {
    console.log(zipcode);
}
