//Author: Nguyen Cong Luc
function formatMoney(x) {
    var money = "";
    if (x.toString().includes(".")) { 
        var arr_split = x.toString().split(".");
        money = arr_split[0];
    }
    else {
        money = x.toString();
    }
    var len = money.length;
    var count = 0;
    for (let i = len - 1; i >= 0; i--) {
        count += 1;
        if (count == 3) {
            count = 0;
            money = money.slice(0, i) + "," + money.slice(i);
        }
        if (i == 0 && money[0] == ",") {
            money = money.slice(1)
        }
    }
    if (x.toString().includes(".")) {
        money += "." + arr_split[1];
    }
    console.log(money)
}
formatMoney(10000000)
formatMoney(123456)
formatMoney(12000.02)
