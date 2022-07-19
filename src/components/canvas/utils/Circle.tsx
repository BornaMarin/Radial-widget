import React, { useEffect, useState } from 'react';
import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';

interface CircleType {
  arcRadius: number;
  zIndex: number;
  value: number;
  xAxisStartingPoint: number;
  yAxisStartingPoint: number;
}

class Circle implements CircleType {
  arcRadius;
  zIndex;
  value;
  xAxisStartingPoint;
  yAxisStartingPoint;
  constructor(props: CircleType) {
    this.arcRadius = props.arcRadius;
    this.zIndex = props.zIndex;
    this.value = props.value;
    this.xAxisStartingPoint = props.xAxisStartingPoint;
    this.yAxisStartingPoint = props.yAxisStartingPoint;
    this.draw = this.draw.bind(this);
  }
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.arc(this.xAxisStartingPoint, this.yAxisStartingPoint, this.arcRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '24px serif';
    ctx.fillText(this.value.toFixed(2) + '%', this.xAxisStartingPoint, this.yAxisStartingPoint);
  }
}

export default function CircleCanvas(props: CircleType) {
  const [circle, setCircle] = useState(new Circle(props));

  useEffect(() => {
    setCircle(new Circle(props));
  }, [props.arcRadius, props.value]);
  return (
    <CanvasProvider draw={circle.draw}>
      <Canvas zIndex={props.zIndex} />
    </CanvasProvider>
  );
}
