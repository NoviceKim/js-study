// 프로토타입
// new 뒤에 나오는 생성자를 JS에서는 '프로토타입' 이라고 부른다
// 프로토타입은 함수(function)로 선언하며, 반드시 대문자로 시작한다
// this는 해당 객체를 의미한다
function User(id, pw, name, age) {
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.age = age;
}

kim = new User("kgh1234", "1234", "김광협", 27);

console.log(kim);
