let randomNumber = Math.floor(Math.random() * 11);
let point=100;

for (let i=0; i<4; i++){
    let userNumber = prompt("give your number")
    let guessedNumber = Number(userNumber);

if (randomNumber === guessedNumber) {
    alert(point+"Congratulations. You found your son.")
    break;
}   
else if (guessedNumber < randomNumber){
    let randomNumber = alert("give a higher one");
    //let guessedNumber = Number(randomNumber);
    i++;
    point=point-25;
}
else if (guessedNumber > randomNumber){
    let randomNumber = alert("give a lower one");
    //let guessedNumber = Number(randomNumber);
    i++;
    point=point-25;
}else if(i>4){
    alert(0+"sorry, you couldn't find your son.")
}
}