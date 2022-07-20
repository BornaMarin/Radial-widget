import { IRadialWidgetText } from '../interfaces/radialWidgetText.interface';
import { lineToAngle } from '../../utils/canvasHelper';

export class RadialWidgetText implements IRadialWidgetText {
  arcRadius;
  zIndex;
  xAxisStartingPoint;
  yAxisStartingPoint;
  value;
  minValue;
  maxValue;
  startAngle;
  endAngle;
  rotationFactor;
  constructor(props: IRadialWidgetText) {
    this.arcRadius = props.arcRadius;
    this.zIndex = props.zIndex;
    this.xAxisStartingPoint = props.xAxisStartingPoint;
    this.yAxisStartingPoint = props.yAxisStartingPoint;
    this.value = props.value;
    this.minValue = props.minValue;
    this.maxValue = props.maxValue;
    this.startAngle = props.startAngle;
    this.endAngle = props.endAngle;
    this.rotationFactor = props.rotationFactor;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    const scaledValue = this.calcValue();
    ctx.clearRect(0, 0, this.xAxisStartingPoint * 2, this.xAxisStartingPoint * 2);
    ctx.beginPath();
    ctx.fillStyle = 'black';

    const startingPoint = lineToAngle(
      this.xAxisStartingPoint,
      this.yAxisStartingPoint,
      this.arcRadius + 20,
      this.startAngle + this.rotationFactor
    );
    const endPoint = lineToAngle(
      this.xAxisStartingPoint,
      this.yAxisStartingPoint,
      this.arcRadius + 20,
      this.endAngle + this.rotationFactor
    );
    const middlePoint = lineToAngle(
      this.xAxisStartingPoint,
      this.yAxisStartingPoint,
      this.arcRadius + 20,
      (this.endAngle + this.startAngle + this.rotationFactor * 2) / 2
    );
    const midValue = (this.maxValue - this.minValue) / 2;
    ctx.fillStyle = '#525252';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.minValue.toFixed(1), startingPoint.x, startingPoint.y);
    ctx.fillText(this.maxValue.toFixed(1), endPoint.x, endPoint.y);
    ctx.fillText(midValue.toFixed(1), middlePoint.x, middlePoint.y);
    ctx.font = ' bold 42px Arial';
    ctx.fillText(scaledValue.toFixed(1), this.xAxisStartingPoint, this.yAxisStartingPoint);
  }
  calcValue(): number {
    console.log(this.startAngle);
    const angleScale = this.endAngle - this.startAngle;
    const valueScale = this.maxValue - this.minValue;
    const valueRatio = valueScale / angleScale;
    //oduzimanje u zagradi postavi scalu na start angel, jer donut nije puna kruznica
    return valueRatio * (this.value - this.startAngle) + this.minValue;
  }
}
