import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';
import React, { useEffect, useState } from 'react';
import { IDrawable } from '../../../types/drawable.interface';
import { Circle } from './Circle';

interface DonutType {
  xAxisStartingPoint: number;
  yAxisStartingPoint: number;
  startAngle: number;
  endAngle: number;
  arcRadius: number;
  rotationFactor: number;
  color: string;
}

interface DonutProps {
  xAxisStartingPoint: number;
  yAxisStartingPoint: number;
  startAngle: number;
  endAngle: number;
  arcRadius: number;
  rotationFactor: number;
  color: string;
  zIndex: number;
}

class Donut extends Circle implements DonutType, IDrawable {
  startAngle;
  endAngle;
  rotationFactor;
  constructor(props: DonutProps) {
    super(props);
    this.startAngle = props.startAngle;
    this.endAngle = props.endAngle;
    this.rotationFactor = props.rotationFactor;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    this.drawBaseCircle(ctx);
    this.fillGap(ctx);
  }
  private fillGap(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.moveTo(this.xAxisStartingPoint, this.yAxisStartingPoint);
    ctx.arc(
      this.xAxisStartingPoint,
      this.yAxisStartingPoint,
      this.arcRadius,
      this.rotationFactor + this.startAngle,
      this.rotationFactor + this.endAngle
    );
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export default function DonutCanvas(props: DonutProps) {
  const [donut, setDonut] = useState(new Donut(props));

  useEffect(() => {
    setDonut(new Donut(props));
  }, [props.startAngle, props.rotationFactor, props.endAngle, props.color]);
  return (
    <CanvasProvider drawable={donut}>
      <Canvas zIndex={props.zIndex} />
    </CanvasProvider>
  );
}
