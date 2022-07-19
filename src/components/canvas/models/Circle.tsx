import React, { useEffect, useState } from 'react';
import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';
import { IDrawable } from '../../../types/drawable.interface';

interface CircleType {
  arcRadius: number;
  zIndex: number;
  xAxisStartingPoint: number;
  yAxisStartingPoint: number;
  color: string;
}

export class Circle implements CircleType, IDrawable {
  arcRadius;
  zIndex;
  xAxisStartingPoint;
  yAxisStartingPoint;
  color;
  constructor(props: CircleType) {
    this.arcRadius = props.arcRadius;
    this.zIndex = props.zIndex;
    this.xAxisStartingPoint = props.xAxisStartingPoint;
    this.yAxisStartingPoint = props.yAxisStartingPoint;
    this.color = props.color;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    this.drawBaseCircle(ctx);
    ctx.fillStyle = this.color;
    ctx.fill();

    // ctx.closePath();
    // ctx.beginPath();
    // ctx.fillStyle = 'black';
    // ctx.textAlign = 'center';
    // ctx.textBaseline = 'middle';
    // ctx.font = '24px serif';
    // ctx.fillText(this.value.toFixed(2) + '%', this.xAxisStartingPoint, this.yAxisStartingPoint);
  }
  drawBaseCircle(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.arc(this.xAxisStartingPoint, this.yAxisStartingPoint, this.arcRadius, 0, Math.PI * 2);
  }
}

export default function CircleCanvas(props: CircleType) {
  const [circle, setCircle] = useState(new Circle(props));

  useEffect(() => {
    setCircle(new Circle(props));
  }, [props.arcRadius]);
  return (
    <CanvasProvider drawable={circle}>
      <Canvas zIndex={props.zIndex} />
    </CanvasProvider>
  );
}
