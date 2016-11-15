const tileSize = 30;
const borderSize = 2;
export class CanvasGrid{
  private ctx: CanvasRenderingContext2D;
  constructor(private canvas: HTMLCanvasElement){
    this.ctx = canvas.getContext("2d")
    this.draw();
  }

  public draw(): void{
    console.log("REDRAW");
    for(var x = 0; x<10; x++){
      for(var y= 0; y<5; y++){
        this.drawTile(x,y, 'grey');
      }
    }
  }

  public drawTile(xCoord: number, yCoord: number, color: string){
    const xPos = xCoord * (tileSize + borderSize) - (borderSize/2)
    const yPos = yCoord * (tileSize + borderSize) - (borderSize/2)

    this.ctx.fillStyle = color;
    this.ctx.fillRect(xPos,yPos,tileSize,tileSize);
  }
}
