function randomNumber(min, max){
    if (max<min){return false}
    return Math.round(Math.floor(Math.random()*(max-min)+min))
}
console.log(randomNumber(5.8,15))
