/**
 * To verify solution and read challenge description check: https://www.hackerrank.com/challenges/mini-max-sum/problem
 */
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    const sortedArr = arr.sort((a,b) => a -b);
    const miniMaxSum = sortedArr.reduce((acc, curr, i, arr) => {
        if (i < arr.length - 1) {
            acc[0] += curr;
        }
        
        if (i > 0) {
            acc[1] += curr;
        }
        
        return acc;
    }, [0, 0])
    
    console.log(miniMaxSum[0], miniMaxSum[1]);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
