function randomNumber(number) {
    var randomNumber = (Math.random() * number) + 1 ;
    randomNumber = Math.floor(randomNumber);
     return randomNumber;
}

var randomNumber1 = randomNumber(6);
var randomNumber2 = randomNumber(6);

var setImageLeft = document.querySelector(".dice img");
var setImageRight = document.querySelectorAll(".dice img")[1];
var title = document.querySelector("h1");

var setString1 = "./images/dice" + randomNumber1 + ".png";
var setString2 = "./images/dice" + randomNumber2 + ".png";

setImageLeft.setAttribute("src",setString1);
setImageRight.setAttribute("src",setString2);

if(randomNumber1 > randomNumber2) {
    title.textContent = "🏴 Player 1 Wins";
}
else if(randomNumber2 > randomNumber1) {
    title.textContent = "Player 2 Wins 🏴";
}
else {
    title.textContent = "Draw!";
}