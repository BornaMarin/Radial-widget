import { IDonut } from './donut.interface';

export interface IDonutValues extends IDonut {
  value: number;
  minValue: number;
  maxValue: number;
  bidirection: boolean;
  arcLength: number;
}
