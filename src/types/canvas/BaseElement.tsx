import { IBaseElement } from '../interfaces/base.interface';

export abstract class BaseElement implements IBaseElement {
  zIndex;
  xAxisStartingPoint;
  yAxisStartingPoint;

  protected constructor(props: IBaseElement) {
    this.zIndex = props.zIndex;
    this.xAxisStartingPoint = props.xAxisStartingPoint;
    this.yAxisStartingPoint = props.yAxisStartingPoint;
  }
}
