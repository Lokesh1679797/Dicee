var randomNumber1= Math.floor(Math.random()*6) +1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src",randomImageSource);

var randomNumber2 =Math.floor( Math.random()* 6 +1);
var rnadomDiceImage1 = "Dice" + randomNumber2 + ".png";
var randomImageSource1 = "images/" + rnadomDiceImage1;
var Image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource1);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins 🎯"
}
else{
    document.querySelector("h1").innerHTML = "draw!🦆"
}