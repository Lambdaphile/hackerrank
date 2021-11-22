/**
 * To verify solution and read challenge description check: https://www.hackerrank.com/challenges/solve-me-first/problem
 */

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = '', inputArr = '', inputCurrLine = 0;

process.stdin.on('data', (data) => {
    input += data;
});

process.stdin.on('end', () => {
    inputArr = input.split('\n');
    main();
});

function readLine() {
    return inputArr[inputCurrLine++];
}

function add(a, b) {
    return a + b;
}

function main() {
    const a = parseInt(readLine());
    const b = parseInt(readLine());;

    const sum = add(a, b);
    console.log(sum);
}
