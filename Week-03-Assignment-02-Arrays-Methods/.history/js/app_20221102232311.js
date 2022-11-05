//In order for the newArrayList array definition to work correctly, before running a solution, please comment the other code in the line.
let myArray = [16, true, "8", 4, 9, "6", 36, false, 49, 9, "HiCoders", "false", 1, 4, "true"];
console.log(typeof (myArray[0]));

// newArrayList START
// Created a new array with items of type number.
let newArrayList = [];
for (let i = 0; i < myArray.length; i++) {
    if (typeof (myArray[i]) === "number") {
        newArrayList.push(myArray[i]);
    } else {
        continue;
    }
}
console.log(newArrayList);
// newArrayList END


// TO SQUARE START
let squaringList = []
for (let i = 0; i < newArrayList.length; i++) {
    newArrayList[i] = newArrayList[i] * newArrayList[i];
    squaringList.push(newArrayList[i]);
}
console.log(squaringList);
// TO SQUARE END

// ANOTHER METHOD TO SQUARE START
// the square of each item of the new array will be printed.
//let newArrayList = [16, 4, 9, 36, 49, 9, 1, 4];
let squaringList = []
for (let i = 0; i < newArrayList.length; i++) {
    newArrayList[i] = Math.pow(newArrayList[i], 2);
    squaringList.push(newArrayList[i]);
}
console.log(squaringList);
// ANOTHER METHOD TO SQUARE END


// squaringRootList START
//let newArrayList = [16, 4, 9, 36, 49, 9, 1, 4];
let squaringRootList = [];
for (let i = 0; i < newArrayList.length; i++) {
    newArrayList[i] = Math.sqrt(newArrayList[i]);
    squaringRootList.push(newArrayList[i]);
}
console.log(squaringRootList);
// squaringRootList END


// smallestNumber START 
//  console.log(Math.min(...newArrayList)); It can also be solved with a single line.
let smallestNumber = newArrayList[0]
for (let i = 0; i < newArrayList.length; i++) {
    if (smallestNumber > newArrayList[i]) {
        smallestNumber = newArrayList[i];
    }
}
console.log(smallestNumber);
// smallestNumber END


// largestNumber START
//  console.log(Math.max(...newArrayList));  It can also be solved with a single line.
//let newArrayList = [16, 4, 9, 36, 49, 9, 1, 4];
var largestNumber = newArrayList[0]
for (let i = 0; i < newArrayList.length; i++) {
    if (largestNumber < newArrayList[i]) {
        largestNumber = newArrayList[i];
    }
}
console.log(largestNumber);
// largestNumber END


// sum of the items of the newArrayList START 
let sum = 0;
for (let i = 0; i < newArrayList.length; i++) {
    sum += Number(newArrayList[i]);
}
console.log(sum);
// sum of the items of the newArrayList END

// ANOTHER METHOD FOR ADDITION START
const sum = (a, b) => a + b
const result = newArrayList.reduce(sum)
console.log(result);
// ANOTHER METHOD FOR ADDITION START


// average of the items START
let average = 0;
let sum = 0;

for (let i = 0; i < newArrayList.length; i++) {
    sum += Number(newArrayList[i]);
    average = Number(sum / newArrayList.length);
}
console.log(average);
// average of the items END

