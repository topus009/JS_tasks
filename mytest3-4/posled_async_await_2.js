// последовательно выполнить функции f1, f2, f3
// 3) с использование async/await

// FROM THIS ===========

// "use strict"
//
// let f1 = function() {
// console.log('> f1()');
// };
//
// let f2 = function() {
// console.log('> f2()');
// };
//
// let f3 = function() {
// console.log('> f3()');
// };
//
// async function asyncFun () {
//   var value = await Promise
//     .resolve(f1())
//     .then(f2())
//     .then(f3())
//   return value;
// }
// asyncFun().then(console.log("DONE"));

// TO THIS ===========
// with BABEL ONLINE CONVERTER and support NODE.JS

"use strict";

let asyncFun = (() => {
  var _ref = _asyncToGenerator(function* () {
    var value = yield Promise.resolve(f1()).then(f2()).then(f3());
    return value;
  });

  return function asyncFun() {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let f1 = function f1() {
  console.log('> f1()');
};

let f2 = function f2() {
  console.log('> f2()');
};

let f3 = function f3() {
  console.log('> f3()');
};

asyncFun().then(console.log("DONE"));
