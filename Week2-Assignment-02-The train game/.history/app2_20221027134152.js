let randomNumber = Math.floor(Math.random() * 10); // for random number assignment
let rightOfGuess= k ===


for (let i = 0; i < 4; i++) {
    alert(i);
    let userNumber = prompt("give your number")
    let guessedNumber = Number(userNumber);
    

    let point = 100-25*i;
    console.log(point);
    
    if (randomNumber === guessedNumber && i < 4) {
        alert("Your skor:"+ point + " Congratulations. You found your son.");
        //console.log("Your skor:"+ point + " Congratulations. You found your son.")
        break;
    } else if (guessedNumber < randomNumber && i < 3) {
        //let userNumber = prompt("give a higher one");
        //let guessedNumber = Number(randomNumber);
        alert("give a higher one")
    } else if (guessedNumber > randomNumber && i < 3) {
        alert("give a lower one");
        //console.log("give a lower one.")
        //let guessedNumber = Number(randomNumber);
    } else if (i == 4) {
        console.log("hey")
        alert("Your skor:" + point + " Sorry, you couldn't find your son.");
        console.log("heyhey")
        //console.log("Your skor:"+ point +"Sorry, you couldn't find your son.")
    }
}