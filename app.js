let day = prompt("Please enter your birthday. Format:`DD`")
let month = prompt("Please enter your birthmonth. FORMAT:`Month`")

//let monthlist = {January, February, March, April, May, June, July, August, September, October, November, December}

if (day > 31 || day <= 0) {
    console.log("Please check your birthday.")
} else if ((month == "January" && day <= 20) || (month == "December" && day >= 22)) {
    console.log("Your horoscope is Capricorn/Goat.")
} else if ((month == "January" && day >= 21) || (month == "February" && day <= 18)) {
    console.log("Your horoscope is Aquarius/Water Bearer.")
} else if ((month == "February" && day >= 19) || (month == "March" && day <= 20)) {
    console.log("Your horoscope is Pisces/Fishes.")
} else if ((month == "March" && day >= 21) || (month == "April" && day <= 20)) {
    console.log("Your horoscope is Aries/Ram.")
} else if ((month == "April" && day >= 21) || (month == "May" && day <= 20)) {
    console.log("Your horoscope is Taurus/Bull.")
} else if ((month == "May" && day >= 21) || (month == "June" && day <= 21)) {
    console.log("Your horoscope is Gemini/Twins.")
} else if ((month == "June" && day >= 22) || (month == "July" && day <= 22)) {
    console.log("Your horoscope is Cancer/Crab.")
} else if ((month == "July" && day >= 23) || (month == "August" && day <= 23)) {
    console.log("Your horoscope is Leo/Lion.")
} else if ((month == "August" && day >= 24) || (month == "September" && day <= 23)) {
    console.log("Your horoscope is Virgo/Maiden.")
} else if ((month == "September" && day >= 24) || (month == "October" && day <= 23)) {
    console.log("Your horoscope is Libra/Scales.")
} else if ((month == "October" && day >= 24) || (month == "November" && day <= 22)) {
    console.log("Your horoscope is Scorpio/Scorpion.")
} else if ((month == "November" && day >= 23) || (month == "December" && day <= 21)) {
    console.log("Your horoscope is Sagittarius/Archer.")
} else{
    console.log("Please check the information you entered.")
}