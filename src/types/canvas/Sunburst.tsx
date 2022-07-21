import { ISunburst } from '../interfaces/sunburst.interface';
import { IDrawable } from '../interfaces/drawable.interface';
import { isOdd, lineToAngle } from '../../utils/canvasHelper';
import { BaseElement } from './BaseElement';

export class Sunburst extends BaseElement implements ISunburst, IDrawable {
  sunburstRatio;
  arcRadius;
  color;
  constructor(props: ISunburst) {
    super(props);
    this.sunburstRatio = props.sunburstRatio;
    this.arcRadius = props.arcRadius;
    this.color = props.color;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    this.clearCanvas(ctx);
    ctx.fillStyle = 'white';

    let prev = null;
    for (let i = 1; i <= this.sunburstRatio * 2; i++) {
      ctx.beginPath();
      ctx.moveTo(this.xAxisStartingPoint, this.yAxisStartingPoint);
      //arc radius * 1.1 kako bi linije izasle izvan kruznice, kinda sketcy.. refactor later :D
      const pos = lineToAngle(
        this.xAxisStartingPoint,
        this.yAxisStartingPoint,
        this.arcRadius * 1.1,
        (i * Math.PI) / this.sunburstRatio + (Math.PI / this.sunburstRatio) * 2
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
