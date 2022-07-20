import { Circle } from './Circle';
import { IDrawable } from '../../interfaces/drawable.interface';
import { IDonut } from '../../interfaces/donut.interface';

export class Donut extends Circle implements IDonut, IDrawable {
  startAngle;
  endAngle;
  rotationFactor;
  constructor(props: IDonut) {
    super(props);
    this.startAngle = props.startAngle;
    this.endAngle = props.endAngle;
    this.rotationFactor = props.rotationFactor;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    this.drawBaseCircle(ctx);
    this.fillGap(ctx);
  }
  private fillGap(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.moveTo(this.xAxisStartingPoint, this.yAxisStartingPoint);
    ctx.arc(
      this.xAxisStartingPoint,
      this.yAxisStartingPoint,
      this.arcRadius,
      this.rotationFactor + this.startAngle,
      this.rotationFactor + this.endAngle
    );
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
