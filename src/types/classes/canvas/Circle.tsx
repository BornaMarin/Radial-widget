import { ICircle } from '../../interfaces/circle.interface';
import { IDrawable } from '../../interfaces/drawable.interface';

export class Circle implements ICircle, IDrawable {
  arcRadius;
  zIndex;
  xAxisStartingPoint;
  yAxisStartingPoint;
  color;
  constructor(props: ICircle) {
    this.arcRadius = props.arcRadius;
    this.zIndex = props.zIndex;
    this.xAxisStartingPoint = props.xAxisStartingPoint;
    this.yAxisStartingPoint = props.yAxisStartingPoint;
    this.color = props.color;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    this.drawBaseCircle(ctx);
    ctx.fillStyle = this.color;
    ctx.fill();

    // ctx.closePath();
    // ctx.beginPath();
    // ctx.fillStyle = 'black';
    // ctx.textAlign = 'center';
    // ctx.textBaseline = 'middle';
    // ctx.font = '24px serif';
    // ctx.fillText(this.value.toFixed(2) + '%', this.xAxisStartingPoint, this.yAxisStartingPoint);
  }
  protected drawBaseCircle(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, this.xAxisStartingPoint * 2, this.xAxisStartingPoint * 2);
    ctx.beginPath();
    ctx.arc(this.xAxisStartingPoint, this.yAxisStartingPoint, this.arcRadius, 0, Math.PI * 2);
  }
}
