import { CanvasGrid } from "./render/grid"

console.log("HEYOO");
var canvas = new CanvasGrid(<HTMLCanvasElement>document.getElementById('grid'))
canvas.drawTile(2,1,'blue');
canvas.drawTile(2,2,'blue');
canvas.drawTile(2,3,'blue');
canvas.drawTile(3,3,'blue');
