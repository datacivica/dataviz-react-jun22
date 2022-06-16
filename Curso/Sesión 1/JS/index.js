const obj = {
  a: "a",
  b: 1,
  c: {
    test: "123",
  },
};

const arr = [1, 2];
const arr1 = [2, 1];
const arrArr = [
  NaN,
  undefined,
  {
    a: "a",
    b: 1,
    c: {
      test: "123",
    },
  },
  obj,
  123,
  "string",
];
const arrFunc = [1, 2, 3, "1", "2", "3"];
const arrObj = [
  {
    hola: "hola",
  },
  {
    hola: "adiós",
  },
  {
    hola: "adios",
    num: 1,
  },
];

// Find y FindIndex
arrFunc.find((element, i) => {
  console.log("element:", element, "i:", i);

  return element === 1 || element === "1";
});

const found = arrObj.find((element, i) => {
  console.log("element:", element);

  return element.hola === "adiós";
});

arrFunc.findIndex((element, i) => {
  console.log("element:", element, "i:", i);

  return element === 5 || element === "1";
});

arrFunc.findIndex(function (elemento, i) {
  console.log("element:", elemento, "i:", i);

  return elemento === 5 || elemento === "1";
});

// Filter
arrFunc.filter((element, i, arr) => {
  console.log("element:", element, "i:", i, "arr:", arr);

  return element === 5 || element === "1";
});

arrFunc.filter((element, i, arr) => element > 1);

arrObj.filter((element) => {
  console.log(element.num);

  return element.num;
});

// Map
arrFunc.map((element) => {
  console.log(element);

  if (typeof element === "string") {
    return parseInt(element, 10) * 2;
  }

  return {
    num: element,
  };
});

arrFunc.map((num) => {
  console.log(num);

  if (typeof num === "string") {
    return parseInt(num, 10) * 2;
  }

  return {
    num,
  };
});

// ForEach
arrFunc.forEach((num) => {
  if (typeof num === "string") {
    console.log(num);
  }
});

// Slice y Splice

// function hola() {
// console.log('hola');
// }

// Spread
const ob = {
  letra: "z",
};

const a = ob;
const aSpread = {
  ...ob,
};
const aSpreadReemplazado = {
  ...ob,
  letra: "a",
};

a.letra = "a";

const arrReg = [1, 2, 3];
const arrRef = arrReg;
const arrSpread = [...arrReg];
const arrSpreadReemplazado = [0, ...arrReg, 4];

arrRef[0] = 0;

// Desestructuración (destructure)

const holaObj = {
  hola: "adios",
  num: 1,
};

// const hola = holaObj.hola;
const { hola } = holaObj;
const { hola: adios, num } = holaObj;

const [primero, segundo , tercero] = arrObj;
const [primero, , tercero] = arrObj;

// Operaciones ternarias

const bool = true
const str = 'str';

// if (str !== 'str') {
//     console.log('true')
// } else {
//     console.log('false')
// }
// equivale a lo siguiente:
str !== 'str' ? console.log('true') : console.log('false');

const boolStr = str !== 'str' ? 'true' : 'false';