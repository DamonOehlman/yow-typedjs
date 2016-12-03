export class RectangleCreator {
  private readonly context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }
  
  draw(rect: Rect): void;
  draw(rect: Rect, rgbString: string): void;

  draw(rect: Rect, rgbString?: string): void {
    if (!rgbString) {
      rgbString = "#000000";
    }

    this.context.fillStyle = rgbString;
    this.context.fillRect(rect.x, rect.y, rect.width, rect.height);
  }
}

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
const rectCreator = context && new RectangleCreator(context);

if (rectCreator) {
  rectCreator.draw({ x: 0, y: 0, width: 100, height: 100 });
  rectCreator.draw({ x: 0, y: 0, width: 100, height: 100 }, "#EEEEEE");
}

if (rectCreator) {
  rectCreator.draw({ x: 0, y: 0 }, "#EEEEEE");
}

interface Rect {
  x: number,
  y: number,
  width: number,
  height: number
}