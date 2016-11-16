import { CanvasGrid } from "./render/grid"

console.log("HEYOO");
var canvas = new CanvasGrid(<HTMLCanvasElement>document.getElementById('grid'), 20, 10);
var unit = [
  {x: 2, y: 1},
  {x: 2, y: 2},
  {x: 2, y: 3},
  {x: 1, y: 3},
  {x: 1, y: 4},
  {x: 2, y: 4},
  {x: 3, y: 4},
  {x: 4, y: 4},
  {x: 5, y: 4},
  {x: 5, y: 3},
  {x: 5, y: 2},
  {x: 6, y: 2},
]
canvas.drawUnit(unit, 'blue', 'x');

document.getElementById('btn').onclick = ()=>{
  console.log("BONK");
  unit.pop();
  canvas.draw();
  canvas.drawUnit(unit, 'blue', 'x');
}
