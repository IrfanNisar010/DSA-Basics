// 1. Find the Largest and Smallest Element in an Array

// function findLargeAndSmall(arr) {
//     let Largest = arr[0];
//     let Smallest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > Largest) Largest = arr[i];
//         if (arr[i] < Smallest) Smallest = arr[i];
//     }

//     return { Largest, Smallest };
// }

// console.log(findLargeAndSmall([10,20,30,40,4,2,3]));

// 2. Move All Zeros to the End of the Array

// function moveZerosToEnd(arr) {
//     let nonZeroIndex = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] !== 0) {
         
//             [arr[nonZeroIndex] ,arr[i] ]= [arr[i], arr[nonZeroIndex]];
//             nonZeroIndex++
//         }
//     }
//     return arr
// }

// let nums = [0,1,0,2,12,16];

// console.log(moveZerosToEnd(nums));

// 3. Check if an Array is Sorted

// function  isSorted(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[i - 1]) return false;
//     }
//     return true;
// }

// console.log(isSorted([1,2,3,4,5,6]));

// 3. Find Duplicate Elements in an Array

// function findDuplicate(arr) {
//     let seen = new Set();
//     let duplicates = new Set();

//     for (let num of arr) { 
//         if(seen.has(num)) duplicates.add(num);
//         else seen.add(num)
//     }

//     return Array.from(duplicates);
// }

// console.log(findDuplicate([1,2,1,3,5,7,5,6]));


function commonFactors(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

const array1 =  [1,2,3,4];

const array2 = [3,4,5,6];

console.log(commonFactors(array1, array2));