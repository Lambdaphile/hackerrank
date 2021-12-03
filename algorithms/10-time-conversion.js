/**
 * To verify solution and read challenge description check: https://www.hackerrank.com/challenges/time-conversion/problem
 */
'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const isAm = s.includes('AM');
    const is12Am = isAm && s.slice(0, 2) == '12';

    if (is12Am) {
        return s.replace('12', '00').replace('AM', '');
    } else if (isAm) {
        return s.replace('AM', '');
    } else {
        let hours = parseInt(s.slice(0, 2));
        hours = hours == 12 ? hours + 0 : hours + 12;
        const minSec = s.slice(3, 8);
        
        return `${hours}:${minSec}`;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
