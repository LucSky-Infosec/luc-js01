function randomNumber(arr){ 
    return arr[Math.floor(Math.random()*(arr.length))+0];
}
console.log(randomNumber([3,6,"36",5.9]))
