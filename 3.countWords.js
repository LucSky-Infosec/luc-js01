function countWords(word){
    var len=word.length;
    var count=1;
    for (let i = 0; i <len; i++) {
        if (word[i]==word[i].toUpperCase()){
            count++;
        }
    }
    return count;
}
console.log(countWords("oneTwoThree"));
console.log(countWords("nine"));
