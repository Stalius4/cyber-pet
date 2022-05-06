// const array1 = [1, 4, 9, 16, 50];

// // pass a function to map
// const map1 = array1.map(x => x * 3);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]


const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a - b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    return a/b;
}
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
}