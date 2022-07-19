import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';
import React, { useEffect, useState } from 'react';

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

class Donut implements DonutType {
  xAxisStartingPoint;
  yAxisStartingPoint;
  startAngle;
  endAngle;
  arcRadius;
  rotationFactor;
  color;
  constructor(props: DonutProps) {
    this.xAxisStartingPoint = props.xAxisStartingPoint;
    this.yAxisStartingPoint = props.yAxisStartingPoint;
    this.startAngle = props.startAngle;
    this.endAngle = props.endAngle;
    this.arcRadius = props.arcRadius;
    this.color = props.color;
    this.rotationFactor = props.rotationFactor;
    this.draw = this.draw.bind(this);
  }
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.arc(this.xAxisStartingPoint, this.yAxisStartingPoint, this.arcRadius, 0, Math.PI * 2);
    fillGap(
      this.xAxisStartingPoint,
      this.yAxisStartingPoint,
      this.arcRadius,
      this.rotationFactor + this.startAngle,
      this.rotationFactor + this.endAngle,
      this.color
    );

    function fillGap(
      cx: number,
      cy: number,
      radius: number,
      startAngle: number,
      endAngle: number,
      fillcolor: string
    ) {
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = fillcolor;
      ctx.fill();
    }
  }
}

export default function DonutCanvas(props: DonutProps) {
  const [donut, setDonut] = useState(new Donut(props));

  useEffect(() => {
    setDonut(new Donut(props));
  }, [props.startAngle, props.rotationFactor, props.endAngle, props.color]);
  return (
    <CanvasProvider draw={donut.draw}>
      <Canvas zIndex={props.zIndex} />
    </CanvasProvider>
  );
}
