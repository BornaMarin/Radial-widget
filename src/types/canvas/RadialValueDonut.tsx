import { Donut } from './Donut';
import { calcRadialValue } from '../../utils/canvasHelper';
import { IDonutValues } from '../interfaces/donutValues.interface';

export class RadialValueDonut extends Donut {
  bidirection;
  value;
  maxValue;
  minValue;
  arcLength;
  constructor(props: IDonutValues) {
    super(props);
    this.bidirection = props.bidirection;
    this.value = props.value;
    this.maxValue = props.maxValue;
    this.minValue = props.minValue;
    this.arcLength = props.arcLength;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    this.handleDirection();
    this.drawBaseCircle(ctx);
    this.fillGap(ctx);
  }
  handleDirection() {
    if (this.bidirection) {
      if (this.value > 0) {
        const scaledValue = calcRadialValue(
          Math.PI * 1.5,
          Math.PI * 3 - this.arcLength,
          0,
          this.maxValue,
          this.value
        );
        this.startAngle = Math.PI * 1.5;
        this.endAngle = scaledValue;
      } else {
        this.startAngle = calcRadialValue(
          this.arcLength,
          Math.PI * 1.5,
          this.minValue,
          0,
          this.value
        );
        this.endAngle = Math.PI * 1.5;
      }
    } else {
      const scaledValue = calcRadialValue(
        this.arcLength,
        Math.PI * 3 - this.arcLength,
        this.minValue,
        this.maxValue,
        this.value
      );
      this.startAngle = this.arcLength;
      this.endAngle = scaledValue;
    }
  }
}
