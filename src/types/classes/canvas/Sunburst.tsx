import { ISunburst } from '../../interfaces/sunburst.interface';
import { IDrawable } from '../../interfaces/drawable.interface';
import { isOdd, lineToAngle } from '../../../helperFunctions/canvasHelper';

export class Sunburst implements ISunburst, IDrawable {
  numberOfTicksRation;
  zIndex;
  xAxisStartingPoint;
  yAxisStartingPoint;
  constructor(props: ISunburst) {
    this.numberOfTicksRation = props.numberOfTicksRation;
    this.zIndex = props.zIndex;
    this.xAxisStartingPoint = props.xAxisStartingPoint;
    this.yAxisStartingPoint = props.yAxisStartingPoint;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = 'white';
    let prev = null;
    for (let i = 1; i <= this.numberOfTicksRation * 2; i++) {
      ctx.beginPath();
      ctx.moveTo(this.xAxisStartingPoint, this.yAxisStartingPoint);
      const pos = lineToAngle(
        this.xAxisStartingPoint,
        this.yAxisStartingPoint,
        102,
        (i * Math.PI) / this.numberOfTicksRation + (Math.PI / this.numberOfTicksRation) * 2
      );
      ctx.moveTo(this.xAxisStartingPoint, this.yAxisStartingPoint);
      ctx.lineTo(pos.x, pos.y);
      if (prev && !isOdd(i)) {
        ctx.lineTo(prev.x, prev.y);
      }
      prev = pos;
      ctx.fill();
    }
  }
}
