function formatMoney(number){
    var unit="";
    var result=0;
    var numberStr=number.toString();
    if (numberStr.length>=4 && numberStr.length<=6){
        unit="K";
        result=(number/1000).toFixed(2);
    }
    else if (numberStr.length<=9){
        unit="M";
        result=(number/1000000).toFixed(2);
    }
    else if (numberStr.length<=12){
        unit="B";
        result=(number/1000000000).toFixed(2);
    }
    else{
        console.log("input number need less than 1.000.000.000.000")
    }
    result=parseFloat(result);
    result=result.toString()+unit;
    return result;
}
console.log(formatMoney(1000));
console.log(formatMoney(1123400000));
console.log(formatMoney(1342222));
