// выполнить вывод в консоль всех свойств объекта, перенося дочерние свойства на новую строку
// если свойство имеет тип Function не выводить в консоль, а вызвать функцию

let data = {
  a: {
    a: 1,
    b: {a: 3,b: 10},
    c: 14
  },
  b: {
    f: function () {
      console.log("this is function 'f'");
    },
    a: "123"
  }
};

console.log("-------------");
showNodes(data);

function isObject(val) {
  return val instanceof Object;
}

function showNodes(element, parent) {
  for(let key in element) {
    const elkey = element[key];
    const keyName = parent ? `${parent}.${key}` : key;
    if(typeof elkey === "function") {
      console.log(keyName + " = " + "function()");
      elkey();
    }
    else if(isObject(elkey)) {
      showNodes(elkey,keyName);
    }
    else {
      console.log(keyName,"=",elkey);
    }
  }
}
console.log("-------------");
