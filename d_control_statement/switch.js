// switch
// 하나의 변수에 여러 개의 값이 담길 수 있다면
// 매번 == 으로 비교하는 if문보다 switch문을 사용하면 더욱 간결해진다
// 각 case의 끝에는 break를 붙여줄 것. 안 그러면 아래의 case 문까지 실행됨

let choice = 1;

switch (choice) {
    case 1:
        console.log("choice는 1입니다.");
        break;

    case 2:
        console.log("choice는 2입니다.");
        break;

    case 3:
        console.log("choice는 3입니다.");
        break;

    default:
        console.log("다시 입력해주세요.");
        break;
}
