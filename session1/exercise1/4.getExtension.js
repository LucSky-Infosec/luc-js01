function getExtensionFile(name){
    return name.split(".")[1];
}
console.log(getExtensionFile("image.png"));
console.log(getExtensionFile("Sound.mp3"));