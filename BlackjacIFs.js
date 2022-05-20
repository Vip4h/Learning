let cardOne = 7;
let cardTwo = 5;
let sum = cardOne + cardTwo; // 15

let cardThree = 7;
sum += cardThree;
if (sum > 21){
    console.log("Perdisteh");
    proces.exit(1); // salir del programa
}
console.log("Tienes ${sum} punticos")

let cardOneBank = 7;
let cardTwoBank = 5;
let cardThreeBank = 6;
let cardFourBank = 4;

let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank;
if (bankSum > 21 || (sum <= 21 && sum > bankSum)) {
    console.log("Ganaste we");
} else {
    console.log("La banca siempre gana");
}