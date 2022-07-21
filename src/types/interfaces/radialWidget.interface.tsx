import { IDonut } from './donut.interface';

export interface IRadialWidget extends IDonut {
  arcLength: number;
  bodyRadius: number;
  defaultTickColor: string;
  progressColor: string;
}
