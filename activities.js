// const array1 = [1, 4, 9, 16, 50];

// // pass a function to map
// const map1 = array1.map(x => x * 3);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]



function func2(callback) {
    setTimeout(() => {
        console.log("this is func2");
        callback()
    }, 5000);
}

func2(func1);
