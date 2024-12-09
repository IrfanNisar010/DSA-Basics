function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1; 

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;
        }
    
        if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1
}

const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18];

const target = 18;

const result = binarySearch(numbers, target);

if (result !== -1) {
    console.log(`Target ${target} fount at index ${result}`);
} else {
    console.log(`Target ${target} not found`);
}