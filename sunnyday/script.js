window.onload = function() {

    // let grassClick = document.getElementByClassName("grass")
    // let result = document.getElementsByClassName('text-box');

    let textArray =  [
    "the grass rustled.", // I want this to be randomly selected more often than the others
    "the grass rustled.",
    "the grass rustled.",
    "the grass rustled.",
    "the grass rustled.",
    "the grass rustled.",
    "ooooo, wow.",
    "it's sunny today.",
    "the grass is soft.",
    "* R U S T L E *",
    "leave me alone!",
    "you rustled the grass. nothing happened.",
    "the grass rustled. nothing else happened.",
    "this is all there is to it.",
];

// function getRandomNumber(min, max) {  // I tried to get my array to work but this way unfortunately isn't working, back to the drawing board. 
//     let step1 = max - min + 1;
//     let step2 = Math.random() * step1;
//     let result = Math.floor(step2) + min;

//     return result;
// }

// grassClick.addEventListener('click', () => {
//     let index = getRandomNumber(0, textArray.length-1);
//     result.innerText = textArray[index];
// });

function displayArray() {
    document.getElementsByClassName("text-box")[0].innerHTML = textArray[11]
} 

displayArray();
}