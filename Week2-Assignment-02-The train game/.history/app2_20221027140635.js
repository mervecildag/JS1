let randomNumber = Math.floor(Math.random() * 10); // for random number assignment


for (let i = 0; i <= 4; i++) {
    alert(i);
    let userNumber = prompt("give your number")
    let guessedNumber = Number(userNumber);
    let point = 100-25*i;
   
    if (randomNumber === guessedNumber) {
        alert("Your skor:"+ point + " Congratulations. You found your son.");
        //console.log("Your skor:"+ point + " Congratulations. You found your son.")
        break;
    } else if (guessedNumber < randomNumber) {
        //let userNumber = prompt("give a higher one");
        //let guessedNumber = Number(randomNumber);
        alert("give a higher one")
    } else if (guessedNumber > randomNumber) {
        alert("give a lower one");
        //console.log("give a lower one.")
        //let guessedNumber = Number(randomNumber);
    } else if (i === k) {
        alert("Your skor:" + point + " Sorry, you couldn't find your son.");
        //console.log("heyhey")
        //console.log("Your skor:"+ point +"Sorry, you couldn't find your son.")
    }
}