var imgArr=[
    "img/darkMagician.jpeg",
    "img/divintity.jpeg",
    "img/dragon.jpeg",
    "img/exodia.jpeg",
    "img/gogeta.jpeg",
    "img/horakhty.jpeg",
    "img/obelisk.jpeg",
    "img/raviel.jpeg",
    "img/slifer.jpeg",
    "img/winged.jpeg"
]
var gridContainer = document.getElementById("gridContainer");
var cellsPerRow = 5;
var numberOfRows = 4;

var totalCells = cellsPerRow * numberOfRows;

for (var i = 1; i <= totalCells; i++) {
    var cell = document.createElement("img");
    cell.id="card"+i
    cell.src ="img/yugiohCard.jpeg"
    cell.classList.add("card");
    cell.style.width="100px"
    cell.style.height="130px"
    cell.style.margin="3px"
    // cell.textContent = i;
    var row = Math.ceil(i / cellsPerRow);
    if (i % cellsPerRow === 1) {
        var newRow = document.createElement("div");
        newRow.classList.add("row");
        gridContainer.appendChild(newRow);
    }
    document.querySelector(".row:last-child").appendChild(cell);
}
var randomImgArr=[]
for (let i=0;i<2;i++){
    while (imgArr.length>0){
        let img=imgArr[Math.floor(Math.random()*(arr.length))+0]
        console.log(img)
        randomImgArr.push(img)
        imgArr = imgArr.filter(item => item !== img);
    }
}
alert.apply(randomImgArr)
for (let i=1;i<=totalCells;i++){
    ;
}

var imgArr = [
    "img/darkMagician.jpeg",
    "img/divintity.jpeg",
    "img/dragon.jpeg",
    "img/exodia.jpeg",
    "img/gogeta.jpeg",
    "img/horakhty.jpeg",
    "img/obelisk.jpeg",
    "img/raviel.jpeg",
    "img/slifer.jpeg",
    "img/winged.jpeg"
];

var gridContainer = document.getElementById("gridContainer");
var cellsPerRow = 5;
var numberOfRows = 4;
var totalCells = cellsPerRow * numberOfRows;
var randomImgArr = [];

// Pair up images in randomImgArr
for (let i = 0; i < 2; i++) {
    randomImgArr = randomImgArr.concat(imgArr.slice()); // Duplicate the array
}

// Shuffle the array to get random pairs
randomImgArr.sort(() => Math.random() - 0.5);

for (var i = 1; i <= totalCells; i++) {
    var cell = document.createElement("img");
    cell.id = "card" + i;
    cell.src = "img/yugiohCard.jpeg";
    cell.classList.add("card");
    cell.style.width = "100px";
    cell.style.height = "130px";
    cell.style.margin = "3px";
    cell.setAttribute("data-index", i - 1); // Store the index for later matching

    cell.addEventListener("click", function () {
        flipCard(this);
    });

    var row = Math.ceil(i / cellsPerRow);

    if (i % cellsPerRow === 1) {
        var newRow = document.createElement("div");
        newRow.classList.add("row");
        gridContainer.appendChild(newRow);
    }

    document.querySelector(".row:last-child").appendChild(cell);
}

var flippedCards = [];
var flippedCount = 0;

function flipCard(card) {
    if (flippedCount < 2) {
        var index = card.getAttribute("data-index");
        card.src = randomImgArr[index];
        flippedCards.push({ card, index });

        if (flippedCount === 1) {
            setTimeout(checkMatch, 1000);
        }

        flippedCount++;
    }
}

function checkMatch() {
    if (flippedCards[0].index === flippedCards[1].index) {
        // Match
        alert("Match!");
    } else {
        // No match
        flippedCards.forEach((item, index) => {
            item.card.src = "img/yugiohCard.jpeg";
            shakeCard(item.card);
        });
    }

    flippedCards = [];
    flippedCount = 0;
}

function shakeCard(card) {
    const originalStyle = card.style.transform;
    card.style.transition = 'transform 0.1s ease-in-out';
    card.style.transform = 'translateX(-5px)';
    
    setTimeout(() => {
        card.style.transform = 'translateX(5px)';
    }, 100);

    setTimeout(() => {
        card.style.transform = 'translateX(0)';
    }, 200);

    setTimeout(() => {
        card.style.transition = '';
        card.style.transform = originalStyle;
    }, 300);
}