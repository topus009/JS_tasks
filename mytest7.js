// 1) разработать функцию, возвращающую объем свободной оперативной памяти, вывести результат через запрос http://localhost:3000/diagnostic/memory в виде JSON вида
// {memory: { free: 1000, total: 2000}}

let http = require('http');
let os = require("os");
let hostname = "localhost";
let port = 3000;
let pathname = "diagnostic/memory";

function func() {
  let gb = 1/(Math.pow(1024,3));
  let ram = (os.freemem()*gb).toFixed(2);
  let total_ram = (os.totalmem()*gb).toFixed(2);
  let arr = {"memory": {"Free_RAM" : ram, "Total_RAM" : total_ram}};
  // let x = "Free RAM = " + ram + "\n" + "Total RAM = " + total_ram;
  let y = JSON.stringify(arr);
  return y;
}

let server = http.createServer(function (req, res) {
    console.log('request...');
     // respond
    res.write(func());
    res.end();
});

server.listen(port, hostname, pathname, () => {
  console.log(`Server running at http://${hostname}:${port}/${pathname}`);
});
