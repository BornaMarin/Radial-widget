import { ICircle } from './circle.interface';

export interface IDonut extends ICircle {
  startAngle: number;
  endAngle: number;
  rotationFactor: number;
}
