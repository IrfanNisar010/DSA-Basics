//Find Prime number in an Array?

function isPrime(num) {
    if(num <= 1) return false;
    for (let i = 2; i <num; i++) {
        if (num % i === 0) {
            return false // is not Prime
        }
    }
    return true // is prime 
}

function findPrimeInTheArray(arr) {
    return arr.filter(isPrime);
}

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const primes = findPrimeInTheArray(numbers);
console.log(primes);

// Find the Middle number in a Sorted Array?

// function findMiddleNum(arr) {
//     if (arr.length === 0) return null;
//     const middleIndex = Math.floor(arr.length / 2);
//     return arr[middleIndex];
// }

// const sorted = [1,2,3,4,5,6,7,8,9];

// console.log(findMiddleNum(sorted));

//Find the Middle number in a Unsorted Array?

// function middleNumUnsorted(arr) {
//     if(arr.length === 0) return null;
//     const sortedArray = arr.slice().sort((a,b) => a - b);
//     const middleIndex = Math.floor(sortedArray.length / 2);
//     return sortedArray[middleIndex];
// }


// const unSorted  = [9, 3, 7, 5, 1];

// console.log(middleNumUnsorted(unSorted));


// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1)
// }

// console.log(factorial(5));


// Recursive Fibonacci

// function Fibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return Fibonacci(n - 1) + Fibonacci(n - 2);
// }

// console.log(Fibonacci(6));

// 2D Array

// const array2D = [[2,3], [4,5],[6,7]];

// const flatten = array2D.flat();

// console.log(flatten);

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % 1 === 0) {
//             return false;
//         }
//     } 
//     return true;
// }

// function findPrimeInTheArray(arr) {
//     return arr.filter(isPrime)
// }

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// const primes = findPrimeInTheArray(numbers)

// console.log(primes);