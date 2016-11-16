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

  protected topLeftPixel(coordinate: number){
    return coordinate * (tileSize + borderSize) - (borderSize/2)
  }

  //later enable sprites here
  public drawGlyph(coords: Coords, glyph: string){
    const xPos = coords.x * (tileSize + borderSize) - (borderSize/2)
    const yPos = (coords.y) * (tileSize + borderSize) - (borderSize/2)

    this.ctx.fillStyle = 'white';
    this.ctx.font = tileSize + 'px Monospace';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(glyph, xPos + tileSize/2, yPos + tileSize/2)
  }

  public drawUnit(coords: Coords[], color: string = 'blue', glyph: string = 'x'){
    var prev: Coords = null;
    for(const c of coords){
      this.drawTile(c.x, c.y, color);
      if(prev){
        this.drawConnection(prev, c, color);
      }
      prev = c;
    }
    this.drawGlyph(coords[0], glyph);
  }

  protected drawConnection(from: Coords, to: Coords, color: string = 'blue'){
    const xOffset = from.x - to.x;
    const yOffset = from.y - to.y;

    this.ctx.fillStyle = color;
    if(xOffset == -1){ //draw to the right
      const x = this.topLeftPixel(from.x) + tileSize;
      const y = this.topLeftPixel(from.y) + tileSize/3;
      this.ctx.fillRect(x,y,borderSize, tileSize/3);
    } else if (xOffset == 1){ //left
      const x = this.topLeftPixel(to.x) + tileSize;
      const y = this.topLeftPixel(to.y) + tileSize/3;
      this.ctx.fillRect(x,y,borderSize, tileSize/3);
    } else if (yOffset == -1){ //bottom
      const x = this.topLeftPixel(from.x) + tileSize/3;
      const y = this.topLeftPixel(from.y) + tileSize;
      this.ctx.fillRect(x,y, tileSize/3, borderSize);
    } else if (yOffset == 1){ //top
      const x = this.topLeftPixel(to.x) + tileSize/3;
      const y = this.topLeftPixel(to.y) + tileSize;
      this.ctx.fillRect(x,y, tileSize/3, borderSize);
    } else {
      console.log("Invalid connection from " + JSON.stringify(from) + " to " + JSON.stringify(to));
    }


  }
}

interface Coords{
  x: number;
  y: number;
}
