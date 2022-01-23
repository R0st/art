let results = [];
let value;

function test(number) {
  if (typeof number !== "number") return "NaN";

  while (true) {
    //разбиваем на массив цифр
    value = number % 10;
    results.unshift(value);
    number = (number - value) / 10;
    if (number === 0) {
      break;
    }
  }

  return results;
}
console.log(`Получаем новый массив с чисел ${results}`);

console.log(test(35787918));
// const numberEven = results.reduce((prevValue, item) => item + prevValue)   //сумма чисел массива

const indexE = [];

results.filter((e, i) => {
  //находим индексы четных
  if (e % 2 === 0) indexE.push(i);
});

console.log(indexE);

//// 1 условие

const a = [];
let count = 0;

if (indexE[0] > 1) {
  let temp = indexE[0] - 2;
  a.push(temp);
  count = 1;
  console.log('',a);
}

let n = 0;
while (n < indexE.length - 1) {
  let deltaE = indexE[n + 1] - indexE[n];
  if (deltaE > 2) {
    a.push(indexE[n] + 1);
    count += 1;
  }
  n += 1;
}

if (indexE[indexE.length - 1] < 6) {
  a.push(indexE[indexE.length - 1] + 1);
  count += 1;
  console.log('наш новый массив', a, count);
}
console.log('наш новый массив=', a, 'наш подсчет по 1 усл=',count)
// 2 условие

let count2 = 0;
if (count > 1) {
  for (x in a) {
  // results.forEach((x) => {
    if (results[x] < results[x + 1]) {
   console.log('count2 = ',count2);
  }
  count2 += 1;}
}
console.log("подсчет 2 условия", count2);

if (count2 > 1) {
  console.log("Ваш бонус 2000 грн");
}

//// 3 условие
//новый массив четных чисел
let arrEvenNumber = [];

for (let i = 0; i < results.length; i++) {
  if (results[i] % 2 === 0) {
    arrEvenNumber.push(results[i]);
    // console.log(results[i]);
  }
}

console.log("получаем массив четных чисел", arrEvenNumber);

// считаем сумму четных
let sumEven = arrEvenNumber.reduce((prevValue, item) => item + prevValue);
console.log("сумма четных чисел", sumEven);

//новый массив нечетных чисел
let arrOddNumber = [];

for (let i = 0; i < results.length; i++) {
  if (results[i] % 2 !== 0) {
    arrOddNumber.push(results[i]);
    // console.log(results[i]);
  }
}
console.log("получаем массив нечетных чисел", arrOddNumber);

// считаем сумму нечетных
let sumOdd = arrOddNumber.reduce((prevValue, item) => item + prevValue);
console.log("сумма нечетных чисел", sumOdd);

//сравниваем четные и нечетные и просчитываем бонус
function compareEvenOdd() {
  if (sumEven > sumOdd) {
    console.log("Ваш бонус 100 грн!");
  } else {
    console.log("У вас нет бонуса(");
  }
}

function end() {
  if (count2 > 1) {
    console.log("Ваш бонус 2000 грн");
  } else if (count > 1) {
    console.log("Ваш бонус 1000 грн");
  } else if (sumEven > sumOdd){
    console.log("Ваш бонус 100 грн!");
  } else {
    console.log("У вас нет бонуса(");
  }
}

end();
