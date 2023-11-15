function readNumberVietnamse(number){
    var arr=[]
    var num=number
    while (true){
        if(Math.floor(num/1000)>0){
            arr.unshift(Math.floor(num%1000))
            console.log(Math.floor(num%1000))
            num=Math.floor(num/1000)
            console.log(num)
        }
        else{
            arr.unshift(num)}
            break
    }
    console.log(arr)
    var numStr=number.toString()
    var count1=0, count2=0, stop=Math.round(numStr.length/3)+1
    for (var i = numStr.length - 1; i >= 0; i--) {
        if (count2==stop){}
        if (count1==3){count1=0;count2++}
        reversedStr += str[i];
        count1++
    }

}
readNumberVietnamse(95052702)
/*Millions, thousands, hundreds, units */