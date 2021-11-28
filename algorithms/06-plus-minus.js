/**
 * To verify solution and read challenge description check: https://www.hackerrank.com/challenges/plus-minus/problem
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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  const proportions = arr.reduce((acc,curr)=>{
    if (curr > 0) {
      acc[0]++;
      return acc;
    } else if (curr < 0) {
      acc[1]++;
      return acc;
    } else {
      acc[2]++;
      return acc;
    }
  }
  , [0, 0, 0]);

  const arrLength = arr.length;
  const posNumRatio = proportions[0] / arrLength;
  const negNumRatio = proportions[1] / arrLength;
  const zeroNumRatio = proportions[2] / arrLength;

  console.log(posNumRatio);
  console.log(negNumRatio);
  console.log(zeroNumRatio);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
