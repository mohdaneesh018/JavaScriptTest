Qs. 1. Write a function that takes an array of integers and returns a new array containing only the elements that appear more than once.
    Example:
Input →[4, 5, 9, 4, 9, 2]
Output →[4, 9]

let arr = [4, 5, 9, 4, 9, 2];
let newArr = [];
function arrayOfIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i && !newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(arrayOfIntegers(arr));





Qs. 2.  Write a function to rotate a 2D matrix(n x n) by 90 degrees clockwise.
    Example:
Input →[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
Output →[
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]

let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function rotateArr(nums) {
    let matrix = nums.length;
    const result = [];

    for (let i = 0; i < matrix; i++) {
        let degreeclockwise = []
        for (let j = matrix - 1; j >= 0; j--) {
            degreeclockwise.push(nums[j][i]);
        }
        result.push(degreeclockwise);
    }
    return result;
}
console.log(rotateArr(nums));





Qs. 3.(Binary Search Problem) Implement binary search to find the index of a given number in a sorted array.If not found, return -1.
Example:
Input →[2, 5, 7, 10, 14, 20], target = 10
Output → 3

let arr = [2, 5, 7, 10, 14, 20];
let target = 10;
function binarySearch(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let midddleIndex = Math.round((left + right) / 2);
        let middleElement = arr[midddleIndex];

        if (target == middleElement) {
            return midddleIndex;
        } else if (target > middleElement) {
            left = midddleIndex + 1;
        } else if (target < middleElement) {
            right = right - 1;
        }
        return -1;
    }
    return midddleIndex;
}
console.log(binarySearch(arr));





Qs. 4.(Subarray Problem) Write a function to find the maximum sum of any contiguous subarray of size k.
    Example:
Input →[2, 1, 5, 1, 3, 2], k = 3
Output → 9(5 + 1 + 3)

let arr = [2, 1, 5, 1, 3, 2];
let k = 3;
function subArray(arr, k) {
    for (let i = 0; i < arr.length; i++) {

    }
}
console.log(subArray(arr, k));





Qs. 5.(String Problem) Write a function to find the longest substring without repeating characters.
    Example:
Input → "abcabcbb"
Output → "abc"(length = 3)

let str = "abcabcbb";
let freq = {};
let char = 0;
function repeatingCharacter(str) {
    for (let i = 0; i <= str.length; i++) {

    }
    return;
}
console.log(repeatingCharacter(str));