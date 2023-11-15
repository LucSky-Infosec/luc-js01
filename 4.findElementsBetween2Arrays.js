function findElements(arr1,arr2){
    var arr = [];
    var len2=arr2.length;
    for (let i=0; i<len2;i++){ 
        let result=arr1.indexOf(arr2[i])
        if (result != true){
            arr.push(arr2[i])
        }
    }
    return arr;
}
arr1=[1,2,4,6,8];
arr2=[2,5,6,9];
console.log(findElements(arr1,arr2));
