function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            if(arr[i] >  arr[j]) {
                [arr[i] , arr[j]] = [arr[j] , arr[i]]
            }
        }
    }
    return arr
}

const arr = [90,89,23,567,1,29,3321];

console.log(bubbleSort(arr))