// последовательно выполнить функции f1, f2, f3
// 2) с использованием Promise

function f1() {
    return new Promise(function(res, rej) {
        res('> f1()\n');
    });
};

function f2(message) {
    return new Promise(function(res, rej) {
        res(message + '> f2()\n');
    });
};

function f3(message) {
    return new Promise(function(res, rej) {
        res(message + '> f3()\n');
    });
};
f1()
    .then(function(result) {
        return f2(result);
    })
    .then(function(result) {
        return f3(result);
    })
    .then(function(result) {
        console.log('DONE = \n' + result);
    })
