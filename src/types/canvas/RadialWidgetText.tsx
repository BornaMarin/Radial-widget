import { IRadialWidgetText } from '../interfaces/radialWidgetText.interface';

export class RadialWidgetText implements IRadialWidgetText {
  arcRadius;
  zIndex;
  xAxisStartingPoint;
  yAxisStartingPoint;
  value;
  minValue;
  maxValue;
  constructor(props: IRadialWidgetText) {
    this.arcRadius = props.arcRadius;
    this.zIndex = props.zIndex;
    this.xAxisStartingPoint = props.xAxisStartingPoint;
    this.yAxisStartingPoint = props.yAxisStartingPoint;
    this.value = props.value;
    this.minValue = props.minValue;
    this.maxValue = props.maxValue;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, this.xAxisStartingPoint * 2, this.xAxisStartingPoint * 2);
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '24px serif';
    ctx.fillText(this.value.toFixed(2) + '%', this.xAxisStartingPoint, this.yAxisStartingPoint);
  }
}
