let lunch = new Object();

lunch.name = "햄버거";
lunch.price = "4800";

console.log(lunch);

lunch.pay = () => {
    console.log("결제 완료");
};

lunch.pay();
