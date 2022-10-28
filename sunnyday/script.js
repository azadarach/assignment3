// window.onload = function() {

//     let textArray =  [
//     "the grass rustled.", // I want this to be randomly selected more often than the others
//     "the grass rustled.",
//     "the grass rustled.",
//     "the grass rustled.",
//     "the grass rustled.",
//     "the grass rustled.",
//     "ooooo, wow.",
//     "it's sunny today.",
//     "the grass is soft.",
//     "* R U S T L E *",
//     "leave me alone!",
//     "you rustled the grass. nothing happened.",
//     "the grass rustled. nothing else happened.",
//     "this is all there is to it.",
// ];

// function displayArray() {
//     document.getElementsByClassName("text-box")[0].innerHTML = textArray[11]
// } 

// displayArray();
// }

// let grass = [
// "the grass rustled.",
// "the grass rustled.",
// "the grass rustled.",
// "the grass rustled.",
// "the grass rustled.",
// "the grass rustled.",
// "ooooo, wow.",
// "it's sunny today.",
// "the grass is soft.",
// "* R U S T L E *",
// "leave me alone!",
// "you rustled the grass. nothing happened.",
// "the grass rustled. nothing else happened.",
// "this is all there is to it."
// ];

// console.log(grass);

// var text = "the grass rustled.";
// var text2 = "the grass rustled.";
// var text3 = "the grass rustled.";
// var text4 = "the grass rustled.";
// var text5 = "the grass rustled.";
// var text6 = "the grass rustled.";
// var text7 = "the grass rustled.";
// var text8 = "ooooo, wow.";
// var text9 = "it's sunny today.";
// var text10 = "the grass is soft.";
// var text11 = "* R U S T L E *";
// var text12 = "leave me alone!";
// var text13 = "you rustled the grass. nothing happened.";
// var text14 = "the grass rustled. nothing else happened.";
// var text15 = "that's all there is to it.";

// var text = ["the grass rustled.", "the grass rustled.", "the grass rustled.", "the grass rustled.", "the grass rustled.", "the grass rustled.", "ooooo, wow.", "it's sunny today.", "the grass is soft.", "* R U S T L E *", "leave me alone!", "you rustled the grass. nothing happened.", "the grass rustled. nothing else happened.", "this is all there is to it."]; 

// const randomElement = text[Math.floor(Math.random() * text.length)];

const text = ["the grass rustled.", "the grass rustled.", "the grass rustled.", "the grass rustled.", "the grass rustled.", "the grass rustled.", "ooooo, wow.", "it's sunny today.", "the grass is soft.", "* R U S T L E *", "leave me alone!", "*rustle* nothing happened.", "you sucessfully rustled the grass.", "this is all there is to it."]; 

const random = Math.floor(Math.random() * text.length);
// console.log(random, text[random]);
document.getElementById("text-box").innerHTML = text[random];

// }