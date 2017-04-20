// последовательно выполнить функции f1, f2, f3
// 1) с использованием callback

function f1(){
  setTimeout(function(){
    console.log('> f1()');
  }, 200);
}

function f2(){
  setTimeout(function(){
    console.log('> f2()');
  }, 400);
}

function f3(){
  setTimeout(function(){
    console.log('> f3()');
  }, 600);
}

init();

function init(){
	console.log("START");
  f1();
  f2();
  f3();
}
