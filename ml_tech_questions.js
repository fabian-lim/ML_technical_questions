// # 1. You are given an array of object as below, please write a function that counts the
// # total of names for each color. The result should be in array of object.
const info = [
 {
 'name': 'John',
 'color': 'blue'
 },
 {
 'name': 'Danny',
 'color': 'red'
 },
 {
 'name': 'James',
 'color': 'red'
 },
 {
 'name': 'Katty',
 'color': 'green'
 },
 {
 'name': 'Logan',
 'color': 'blue'
 },
 {
 'name': 'Noah',
 'color': 'red'
 },
 {
 'name': 'Benjamin',
 'color': 'red'
 },
 {
 'name': 'William',
 'color': 'green'
 },
 {
 'name': 'Elijah',
 'color': 'blue'
 },
 {
 'name': 'Ethan',
 'color': 'green'
 }
]

// # Answer for question 1:
const nameCounter = info.reduce((acc, cur) => {
    acc[cur.color] = (acc[cur.color] || 0) + 1;
    return acc;
}, {});

console.log(nameCounter)



// Question 2 - Below is a fibonaci series:
// [1, 1, 2, 3, 5, 8, 13, 21, ....]
// Please write a function to compute the n th term of a Fibonacci sequence.
// Ex: fibonaci(2) = 2

fibonaci_numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811] // list is for reference only

// # Answer for question 2:
const fibonaci = (n) => {
    if (n <= 1) {
        return n
    } else {
        return fibonaci(n-1) + fibonaci(n-2)
    }
}

result = fibonaci(20)
console.log(result)


