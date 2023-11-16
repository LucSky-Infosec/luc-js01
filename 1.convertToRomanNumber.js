const basicRoman = {
    1:"I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
};
const specialRoman = { 
    4: "IV",
    9: "IX",
    40: "XL",
    90: "XC",
    400: "CD",
    900: "CM"
}
function countBasicRomaInNum(num){
    var count={500:0, 100:0, 50:0, 10:0, 5:0, 1:0}
        var valueArr=[500,100,50, 10, 5, 1]
        for (var value of valueArr){
            if(Math.floor(num/value)>0){
                count[value]=Math.round(num/value)
                num=Math.round(num%value)
            }
        }
        var romaNum=""
        for (var key of Object.keys(count)) {
            romaNum+=basicRoman[key].repeat(count[key])
        }
    return romaNum.split('').reverse().join('');
    }
function convertToRoman(number){
    var romaNum=""
    var numberStr=number.toString()
    for (let i=0;i<numberStr.length;i++){
        var count0=(+"1"+"0".repeat(numberStr.length-1-i))
        var currentNumber=+(numberStr[i]*count0)
        if (currentNumber>=1 && currentNumber<4){
            romaNum+=countBasicRomaInNum(currentNumber)
        }
        else if(currentNumber==4){
            romaNum+=specialRoman[4]
        }
        else if(currentNumber>=5 && currentNumber<9){
            romaNum+=countBasicRomaInNum(currentNumber)
        }
        else if(currentNumber==9){
            romaNum+=specialRoman[9]
        }
        else if(currentNumber>=10 && currentNumber<40){
            romaNum+=countBasicRomaInNum(currentNumber)
        }
        else if(currentNumber>=40 && currentNumber<50){
            romaNum+=specialRoman[40]
        }
        else if(currentNumber>=50 && currentNumber<90){
            romaNum+=countBasicRomaInNum(currentNumber)
        }
        else if(currentNumber>=90 && currentNumber<100){
            romaNum+=specialRoman[90]
        }
        else if(currentNumber>=100 && currentNumber<400){
            romaNum+=countBasicRomaInNum(currentNumber)
        }
        else if(currentNumber>=400 && currentNumber<500){
            romaNum+=specialRoman[400]
        }
        else if(currentNumber>=500 && currentNumber <900){
            romaNum+=countBasicRomaInNum(currentNumber)
        }
        else if(currentNumber>=900 && currentNumber<1000){
            romaNum+=specialRoman[900]
        }
        else{romaNum+=basicRoman[1000]
            return romaNum
        }
    }
    return romaNum
}
for (let i =1;i<100;i++){
    console.log(convertToRoman(i))
}


