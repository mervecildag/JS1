
let randomNumber = Math.floor(Math.random() * 10); // for random number assignment


for (let i = 0; i <= 4; i++) {
    let userNumber = prompt("give your number")
    let guessedNumber = Number(userNumber);
    let point = 100-25*i;
    if (randomNumber === guessedNumber) {
        //alert("Your skor:"+ point + " Congratulations. You found your son.")
        console.log("Your skor:"+ point + " Congratulations. You found your son.")
        break;
    } else if (guessedNumber < randomNumber) {
        //let randomNumber = alert("give a higher one");
        console.log("give a higher one")
        //let guessedNumber = Number(randomNumber);
    } else if (guessedNumber > randomNumber) {
        //let randomNumber = alert("give a lower one");
        console.log("give a lower one.")
        //let guessedNumber = Number(randomNumber);
    } else if (i>=4) {
        //alert("Your skor:" + point + " Sorry, you couldn't find your son.")
        console.log("Your skor:"+  +"Sorry, you couldn't find your son.")
        break;
    }
}