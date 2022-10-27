let randomNumber = Math.floor(Math.random() * 11);


for (let i=0; i<4; i++){

if (randomNumber == guessedNumber) {
    prompt("Congratulations")
    break
}   
else if (guessedNumber < randomNumber){
    let randomNumber = prompt("give a higher one");
    let guessedNumber = parseInt(randomNumber);

}
}