let randomNumber = Math.floor(Math.random() * 11);
let point

for (let i=0; i<4; i++){
    let userNumber = prompt("give your number")
    let guessedNumber = Number(userNumber);

if (randomNumber === guessedNumber) {
    prompt("Congratulations")
    break;
}   
else if (guessedNumber < randomNumber){
    let randomNumber = prompt("give a higher one");
    let guessedNumber = Number(randomNumber);
}
else if (guessedNumber > randomNumber){
    let randomNumber = prompt("give a lower one");
    let guessedNumber = parseInt(randomNumber);

}
}