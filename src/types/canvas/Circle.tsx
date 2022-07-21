import { ICircle } from '../interfaces/circle.interface';
import { IDrawable } from '../interfaces/drawable.interface';
import { BaseElement } from './BaseElement';

export class Circle extends BaseElement implements ICircle, IDrawable {
  arcRadius;
  color;
  constructor(props: ICircle) {
    super(props);
    this.arcRadius = props.arcRadius;
    this.color = props.color;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    this.drawBaseCircle(ctx);
    console.log(this.color);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  protected drawBaseCircle(ctx: CanvasRenderingContext2D): void {
    this.clearCanvas(ctx);
    ctx.beginPath();
    ctx.arc(this.xAxisStartingPoint, this.yAxisStartingPoint, this.arcRadius, 0, Math.PI * 2);
  }
}
