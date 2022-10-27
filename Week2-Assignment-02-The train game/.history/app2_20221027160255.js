let randomNumber = Math.floor((Math.random() * 10) + 1); // for random number assignment
let k = 4; //right of father's guess

for (let i = 0; i <= k; i++) {
    //alert(i);
    //console.log(i)
    let userNumber = prompt("give your number")
    let guessedNumber = Number(userNumber);
    let point = 100 - 25 * i;

    if (i === k) {
        //alert("Your skor:" + point + " Sorry, you couldn't find your son.");
        console.log("Your skor:" + point + "Sorry, you couldn't find your son")

    } else if (randomNumber === guessedNumber && i < k) {
        //alert("Your skor:" + point + " Congratulations. You found your son.");
        console.log("Your skor:" + point + " Congratulations. You found your son.")
        break;
    } else if (guessedNumber < randomNumber && i < k) {
        //alert("give a higher one")
        console.log("give a higher one.")
    } else if (guessedNumber > randomNumber && i < k) {
        //alert("give a lower one");
        console.log("give a lower one.")
    } else if (guessedNumber > 10 || userNumber <= 0) {
        //alert("please check the number you entered.");
        console.log("please check the number you entered.")
    }
}