// 1) сгенерировать массив длиной 40000000 элементов случайными числами в диапазоне от -100 до 100, вывести время выполения
// 1*) попробовать сгенерировать массив быстрее, вывести время выполения
// 2) получить минимальное значение, максимальное значение, среднее массива - вывести в консоль и вывести время выполнения
// 2*) получить минимальное значение, максимальное значение, среднее массива быстрее, чем в п.2, выведите время выполнения
// 3) соединить элементы массива через знак # и записать в текстовый файл

const n = 10000000;
// 10000000
let array = [];
array.length = n;
let len = array.length;
let i = 0;
let fMax;
let fMin;
let middle;
let result;

function randomInteger(min, max) {
  let rand = Math.round(min - 0.5 + Math.random() * (max - min + 0.5));
  return rand;
};
function sum (array){
  let res = 0; let i = 0;
  for(i; i < n; i++){
    res += array[i];
  }
  return res;
};
function getMax (array) {
  let max = 0; let value; let i = 0;
  for (i; i < n; i++) {
    value = array[i];
    if (value > max) max = value;
  }
  return max;
};
function getMin (array) {
  let min = 0; let value; let i = 0;
  for (i; i < n; i++) {
    value = array[i];
    if (value < min) min = value;
  }
  return min;
};
function fileWhite (array) {
  let fs = require('fs');
  let text = "";
  let fileName = "textfile.txt";
  let location = "F:\\";
  text = "#" + array.join(" #");
  fs.writeFile(location + fileName, text);
  console.log("ФАЙЛ " + fileName + " сохранен по адресу " + location);
};
function init() {
  // НАПОЛНЕНИЕ ----------------------------
  let a1_1 = Date.now();
  for (i; i < n; array[i++] = randomInteger(-100, 100));
  let a1_2 = Date.now();
  // МИН и МАКС ----------------------------
  let a2_1 = Date.now();
  fMin = getMin(array);
  fMax = getMax(array);
  let a2_2 = Date.now();
  // СУММА -------------------------------
  let a3_1sum = Date.now();
  result = sum (array);
  let a3_2sum = Date.now();
  // СРЕДНЕЕ -----------------------------
  middle = (result/n).toFixed(3);
  // ЗАПИСЬ В ФАЙЛ -----------------------
  let a4_1 = Date.now();
  fileWhite (array);
  let a4_2 = Date.now();
  // --------------------------------------
  console.log("---------------------------------");
  console.log("Длина массива: " + array.length);
  console.log("МАКС = " + fMax);
  console.log("МИН = " + fMin);
  console.log("СУММА = " + result);
  console.log("СРЕДНЕЕ = " + middle);
  console.log("Время на СОЗДАНИЕ массива: " + (a1_2-a1_1) + "ms");
  console.log("Время на поиск МИН/МАКС: " + (a2_2-a2_1) + "ms");
  console.log("Время на поиск СУММУ: " + (a3_2sum-a3_1sum) + "ms");
  console.log("Время записи в ФАЙЛ: " + (a4_2-a4_1) + "ms");
  console.log("---------------------------------");
};

init();

// console.log("#" + array.join(" #"));

// for (i; i < n; array[i++] = randomInteger(-100, 100));

// while (i < n) {
// array[i++] = randomInteger(-100, 100);
// }

// console.log("МИН = " + Math.min.apply(null, array));
// console.log("МАКС = " + Math.max.apply(null, array));
// console.log("МИН = " + Math.min(...array));
// console.log("МАКС = " + Math.max(...array));
// console.log("МИН = " + Math.min.apply(Math,array));
// console.log("МАКС = " + Math.max.apply(Math,array));

// return ( p < c ? p : c );
// return ( p > c ? p : c );

// function getMin(array) {
//   return array.reduce(function (p, c) {
//     return Math.min(p, c);
//   });
// }
// function getMax(array) {
//   return array.reduce(function (p, c) {
//     return Math.max(p, c);
//   });
// }

// let result = array.reduce(function(p, c) {
// return p + c;
// }, 0);

// text = ''.concat.apply('#', array, []);
// text = "#" + array.concat("#");
