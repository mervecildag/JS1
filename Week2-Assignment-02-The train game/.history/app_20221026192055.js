let randomNumber = Math.floor(Math.random() * 11);
let userNumber = input("give your number")
let guessedNumber = parseInt(userNumber);

for (let i=0; i<4; i++){
if (randomNumber == guessedNumber) {
    prompt("Congratulations")
    break
}    
}