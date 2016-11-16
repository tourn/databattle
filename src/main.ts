import { CanvasGrid } from "./render/grid"

console.log("HEYOO");
var canvas = new CanvasGrid(<HTMLCanvasElement>document.getElementById('grid'))
canvas.drawUnit([
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
], 'blue', 'x');
