// let n, count = 0,
//     i, j, k, l;

// n = prompt("Enter the Number of Elements of the Array");
// let array = new Array(n);
// for (i = 0; i < n; i++) {
//     array[i] = prompt("Enter the Elements of the Array in Order");
//     //we got the values into array.
// }
// document.write("elements in array=" + array + "<br>");
// //Returns to find out if the elements in the first "two for" arrays are equal, for example dizi[3]=1 ve dizi[7]=1
// for (j = 0; j < n; j++) {
//     for (k = 0; k < n; k++) {
//         if (array[j] == array[k]) {
//             for (l = 0; l < j; l++) {
//                 //eğer değerin kaç kez girildiğini önceden yazdırmışsam bunu tekrar yazdırmama gerek yok
//                 if (array[l] == array[j])
//                     //sayacı -1 e eşitliyorum çünkü sonrasında 1 artıracak 0 olacak ve en son ekrana yazdırırken sayaç 0 değilse yazdıracak
//                     count = -1;
//             }
//             count++;
//         }
//     }
//     if (count != 0)
//         document.write(array[j] + " number " + count + " repeated times <br>");
//     count = 0;
// }
//Code showing how many times all elements are typed in the html page, taking the array elements and their number from the user.