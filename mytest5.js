// 1) Рассчитать расстояние между точками и вывести в консоль
function f1() {
  let p1 = [-100, 1];
  let p2 = [200, 32];
  let r = getLength(p1, p2);
  console.log("----------------------------------------------");
  console.log("-> f1() - Расстояние м/у 2мя точками = " + r);
}

// 2) Рассчитать расстояние между точками и вывести в консоль
function f2() {
  let p1 = [-100, 1, 5, 4, 3, 15];
  let p2 = [2, 65, 45, 14, 443, 115];
  let r = getLength(p1, p2);
  console.log("----------------------------------------------");
  console.log("-> f2() - Расстояние м/у 2-мя точками N-мерного массива = " + r);
}
// =========================================================
function getLength(p1, p2){
  let r = 0; let i = 0; let ai = 0; let dis = 0; let len = p1.length;
  for (; i < len; i++)
  {
    ai += Math.pow((p2[i] - p1[i]), 2);
  }
  dis = Math.pow(ai, 0.5).toFixed(0);
  return dis;
}
// =========================================================
f1();
f2();

// ФОРМУЛА ТОЛЬКО для точек с 2-мя координатами

// function getLength(p1, p2){
//   let r = 0;
//   let dX = p2[0]-p1[0];
//   let dY = p2[1]-p1[1];
//   let dis = Math.pow(Math.pow(dX,2) + Math.pow(dY,2),0.5).toFixed(0);
//   return dis;
// }
