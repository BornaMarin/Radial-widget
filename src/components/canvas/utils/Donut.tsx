import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';
import React, { useEffect, useState } from 'react';

interface DonutType {
  xAxisStartingPoint: number;
  yAxisStartingPoint: number;
  startAngle: number;
  endAngle: number;
  arcRadius: number;
  color: string;
}

interface DonutProps {
  xAxisStartingPoint: number;
  yAxisStartingPoint: number;
  startAngle: number;
  endAngle: number;
  arcRadius: number;
  color: string;
}

class Donut implements DonutType {
  xAxisStartingPoint;
  yAxisStartingPoint;
  startAngle;
  endAngle;
  arcRadius;
  color;
  constructor(props: DonutProps) {
    this.xAxisStartingPoint = props.xAxisStartingPoint;
    this.yAxisStartingPoint = props.yAxisStartingPoint;
    this.startAngle = props.startAngle;
    this.endAngle = props.endAngle;
    this.arcRadius = props.arcRadius;
    this.color = props.color;
    this.draw = this.draw.bind(this);
  }
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, 500, 500);
    console.log(this);

    ctx.beginPath();
    ctx.arc(
      this.xAxisStartingPoint,
      this.yAxisStartingPoint,
      this.arcRadius,
      this.startAngle,
      this.endAngle
    );
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export default function DonutCanvas(props: DonutProps) {
  console.log(1);
  const [donut, setDonut] = useState(
    new Donut({
      xAxisStartingPoint: 250,
      yAxisStartingPoint: 250,
      startAngle: 0,
      endAngle: Math.PI * 2,
      arcRadius: 30,
      color: 'black'
    })
  );

  // useEffect(() => {
  //   setDonut(new Donut(props));
  // });
  return (
    <CanvasProvider draw={donut.draw}>
      <Canvas />
    </CanvasProvider>
  );
}
