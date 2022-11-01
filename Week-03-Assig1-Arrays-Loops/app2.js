const numbers = [1, 2, 3, 2, 4, 5, 5, 6, 6]; // My own array

//array I created to find repeating numbers
const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item)); // I find the repeating numbers with the filter method in an array 

console.log(duplicates); // to print repeating numbers to console


//const array = [1, 2, 1, 2, 1, 5, 5, 5];
//const output = [];
//count = 0;

//for (let i = 0; i < array.length; i++) {
//    for (let j = 0; j < array.length; j++) {
//        if (array[i] === array[j]) {
//            output.push(array[i]);    
//        }   
//    }
//}
//console.log(output);
//I tried to write the code myself but I couldn't progress.