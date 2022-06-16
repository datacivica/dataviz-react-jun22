const obj = {
    a: 'a',
    b: 1,
    c: {
        test: '123'
    }
};

const arr = [1, 2];
const arr1 = [2, 1];
const arrArr = [NaN, undefined, {
    a: 'a',
    b: 1,
    c: {
        test: '123'
    }
}, obj, 123, 'string']
const arrFunc = [1, 2, 3, "1", "2", "3"];

// Find y FindIndex
arrFunc.find((element, i) => {
    console.log('element:', element, 'i:', i);

    return element === 1 || element === '1'
});

arrFunc.findIndex((element, i) => {
    console.log('element:', element, 'i:', i);

    return element === 5 || element === '1'
});

arrFunc.findIndex(function (elemento, i) {
    console.log('element:', elemento, 'i:', i);

    return elemento === 5 || elemento === '1'
})

// Filter
arrFunc.filter((element, i, arr) => {
    console.log('element:', element, 'i:', i, 'arr:', arr);

    return element === 5 || element === '1'
}); 

arrFunc.filter((element, i, arr) => element > 1);

arrFunc.filter((element, i, arr) => i > 0);

// Map

// ForEach

// Sort

// Slice y Splice

// function hola() {
   // console.log('hola');
// }