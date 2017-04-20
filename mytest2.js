// 1) получить за возможно меньшее число проходов цикла количество уникальных символов в исходной строке
// 2) то же, что и в п.1, но получить уникальные пары символов длиной в 2
// 3) то же, что и в п.2, но получить уникальные пары символов длиной в n (n<length)

let data = "abcd0zbcdffzaldlzbcdtzzbcd0ffzahmm-0mfpqaxfczbcdbcd0ffhmrldltzzzbcdbcd0ffzahzbcdmm-0mfpqaxfcbcd0ffekfldltzzbcd0ffzahldltzzbcd0ffzahmm-0mfpqaxfcbcd0ffmm-0mfpqaxfcbcd0ffzahmmmldltzzbcd0ffzahmm-0mfpqaxfcbcd0ffvfs";
let len = data.length;

function func1 () {
	let x = data.split("");
	let map = x.reduce(function(prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});
console.log(map);
}
function func2 () {
let uniqueChars = [];
for (i of data) {
  if (uniqueChars.indexOf(i) == -1) {
    uniqueChars.push(i);
}}
for (x of uniqueChars) {
  let letterAccumulator = 0;
  for (i of data) {
    if (i == x) {letterAccumulator++;}
  }
  console.log(`${x} = ${letterAccumulator}`);
}}
function func3 () {
	let elements = data.split("");
	let counts = {};
	elements.forEach(function(x) {
		counts[x] = (counts[x] || 0) + 1;
	});
  for (let key in counts) {
    console.log(key + " = " + counts[key]);
}}
// ================== 2 элемента
function func4 () {
let array = [];
for (let i = 0; i < len - 1; i++) {
	let x = array.push(data[i] + data[i+1]);
}
let map = array.reduce(function(prev, cur) {
prev[cur] = (prev[cur] || 0) + 1;
return prev;
}, {});
console.log(map);
}
// ================== 'n' элементов
function func5 () {
let array = [];
let n = 4;
for (let i = 0; i < len; i += n) {
    array.push(data.substring(i, i + n));
}
let map = array.reduce(function(prev, cur) {
prev[cur] = (prev[cur] || 0) + 1;
return prev;
}, {});
console.log(map);
}
// ================== ИНИЦИАЛИЗАЦИЯ и ВЫВОД
console.log("------------------------");
let a1 = Date.now();
func1(data);
let a2 = Date.now();
console.log("ВРЕМЯ с func1 = " + (a2-a1) + "ms");
console.log("------------------------");
func2(data);
let a3 = Date.now();
console.log("ВРЕМЯ с func2 = " + (a3-a2) + "ms");
console.log("------------------------");
func3(data);
let a4 = Date.now();
console.log("ВРЕМЯ с func3 = " + (a4-a3) + "ms");
console.log("------------------------");
func4(data);
let a5 = Date.now();
console.log("ВРЕМЯ с func4 (2 элемента) = " + (a5-a4) + "ms");
console.log("------------------------");
func5(data);
let a6 = Date.now();
console.log("ВРЕМЯ с func5 ('n' элементов) = " + (a6-a5) + "ms");
console.log("------------------------");
