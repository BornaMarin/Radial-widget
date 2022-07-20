import { ISunburst } from '../../interfaces/sunburst.interface';
import { IDrawable } from '../../interfaces/drawable.interface';
import { isOdd, lineToAngle } from '../../../helperFunctions/canvasHelper';

export class Sunburst implements ISunburst, IDrawable {
  numberOfTicksRation;
  zIndex;
  xAxisStartingPoint;
  yAxisStartingPoint;
  arcRadius;
  constructor(props: ISunburst) {
    this.numberOfTicksRation = props.numberOfTicksRation;
    this.zIndex = props.zIndex;
    this.xAxisStartingPoint = props.xAxisStartingPoint;
    this.yAxisStartingPoint = props.yAxisStartingPoint;
    this.arcRadius = props.arcRadius;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, this.xAxisStartingPoint * 2, this.xAxisStartingPoint * 2);
    ctx.fillStyle = 'white';
    let prev = null;
    for (let i = 1; i <= this.numberOfTicksRation * 2; i++) {
      ctx.beginPath();
      ctx.moveTo(this.xAxisStartingPoint, this.yAxisStartingPoint);
      //arc radius * 1.1 kako bi linije izasle izvan kruznice, kinda sketcy.. refactor later :D
      const pos = lineToAngle(
        this.xAxisStartingPoint,
        this.yAxisStartingPoint,
        this.arcRadius * 1.1,
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
