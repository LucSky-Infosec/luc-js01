var result=0
function combination(k,n){
    if (k==0||n==k){
        return 1 
    }
    return combination(k,n-1)+combination(k-1,n-1)
}
console.log(combination(5,9))

