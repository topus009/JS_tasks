// последовательно выполнить функции f1, f2, f3
// 3) с использование async/await

// FROM THIS ===========

// "use strict"
// let f1 = function(){console.log('> f1()');}
// let f2 = function(){console.log('> f2()');}
// let f3 = function(){console.log('> f3()');}
//
// function myFunc(o) {
//   let arr = [f1(),f2(),f3()];
//   let result;
//   for (let i=0, result = []; i<arr.length;i++) {
//     result = arr[i];
//   }
// };
//
// async function save(myFunc) {
//   try {
//     await console.log(myFunc());
//   } catch (error) {
//     // обработка ошибок
//   }
//   console.log('ГОТОВО');
// }
//
// save(myFunc());

// TO THIS ===========
// with BABEL ONLINE CONVERTER and support NODE.JS

"use strict";

let save = (() => {
  var _ref = _asyncToGenerator(function* (myFunc) {
    try {
      yield console.log(myFunc());
    } catch (error) {
      // обработка ошибок
    }
    console.log('ГОТОВО');
  });

  return function save(_x) {
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

function myFunc(o) {
  let arr = [f1(), f2(), f3()];
  let result;
  for (let i = 0, result = []; i < arr.length; i++) {
    result = arr[i];
  }
};

save(myFunc());
