let randomNumber = Math.floor(Math.random() * 11);
let point=100;

for (let i=0; i<4; i++){
    let userNumber = prompt("give your number")
    let guessedNumber = Number(userNumber);

if (randomNumber === guessedNumber) {
    console.log(prompt(skor+"Congratulations. You found your son."))
    break;
}   
else if (guessedNumber < randomNumber){
    let randomNumber = prompt("give a higher one");
    let guessedNumber = Number(randomNumber);
    
}
else if (guessedNumber > randomNumber){
    let randomNumber = prompt("give a lower one");
    let guessedNumber = Number(randomNumber);

}
}