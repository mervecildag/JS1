let randomNumber = Math.floor(Math.random() * 11);


for (let i = 0; i < 4; i++) {
    let userNumber = prompt("give your number")
    let guessedNumber = Number(userNumber);
    let point = 100
    if (randomNumber === guessedNumber) {
        alert(point + " Congratulations. You found your son.")
        break;
    } else if (guessedNumber < randomNumber) {
        let randomNumber = alert("give a higher one");
        //let guessedNumber = Number(randomNumber);
    } else if (guessedNumber > randomNumber) {
        let randomNumber = alert("give a lower one");
        //let guessedNumber = Number(randomNumber);
    } else if (i > 3) {
        alert(point + " sorry, you couldn't find your son.")
    }
}