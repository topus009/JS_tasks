// паралелльно выполнить функции f1, f2, f3, дождаться выполнения все и вывести сообщение о завершении в консоль
// п.с.: во всех случаях допускается модификация кода функций f1 - f3

var async = require("async");

async.parallel([
  function(callback) {
      let timeout = Math.round(Math.random()*5000);
      console.log("f1() will complite in " + timeout + "ms");
    setTimeout(function(timeout){
      console.log("> f1() is done");
      callback(null, "f1() result");
    },timeout);
  },
  function(callback) {
      let timeout = Math.round(Math.random()*5000);
      console.log("f2() will complite in " + timeout + "ms");
    setTimeout(function(timeout){
      console.log("> f2() is done");
      callback(null, "f2() result");
    },timeout);
  },
  function(callback) {
      let timeout = Math.round(Math.random()*5000);
      console.log("f3() will complite in " + timeout + "ms");
    setTimeout(function(timeout){
      console.log("> f3() is done");
      callback(null, "f3() result");
    },timeout);
  },
],
  function(err,results) {
    console.log(results);
  });
