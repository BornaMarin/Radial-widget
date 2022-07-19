import React, { useEffect, useState } from 'react';
import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';
import { IDrawable } from '../../../types/drawable.interface';

interface SunburstType {
  numberOfTicksRation: number;
  zIndex: number;
  xAxisStartingPoint: number;
  yAxisStartingPoint: number;
}
//overkill
function isOdd(num: number): number {
  return num % 2;
}
//class Line, metoda drawAngle
function lineToAngle(x: number, y: number, length: number, angle: number) {
  return {
    x: x + length * Math.cos(angle),
    y: y + length * Math.sin(angle)
  };
}
class Sunburst implements SunburstType, IDrawable {
  numberOfTicksRation;
  zIndex;
  xAxisStartingPoint;
  yAxisStartingPoint;
  constructor(props: SunburstType) {
    this.numberOfTicksRation = props.numberOfTicksRation;
    this.zIndex = props.zIndex;
    this.xAxisStartingPoint = props.xAxisStartingPoint;
    this.yAxisStartingPoint = props.yAxisStartingPoint;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = 'white';
    let prev = null;
    for (let i = 1; i <= this.numberOfTicksRation * 2; i++) {
      ctx.beginPath();
      ctx.moveTo(this.xAxisStartingPoint, this.yAxisStartingPoint);
      const pos = lineToAngle(
        this.xAxisStartingPoint,
        this.yAxisStartingPoint,
        102,
        (i * Math.PI) / this.numberOfTicksRation + (Math.PI / this.numberOfTicksRation) * 2
      );
      ctx.moveTo(this.xAxisStartingPoint, this.yAxisStartingPoint);
      ctx.lineTo(pos.x, pos.y);
      if (prev && !isOdd(i)) {
        ctx.lineTo(prev.x, prev.y);
      }
      prev = pos;
      ctx.fill();
    }
  }
}

export default function SunburstCanvas(props: SunburstType) {
  const [sunburst, setSunburst] = useState(new Sunburst(props));

  useEffect(() => {
    setSunburst(new Sunburst(props));
  }, [props.numberOfTicksRation]);
  return (
    <CanvasProvider drawable={sunburst}>
      <Canvas zIndex={props.zIndex} />
    </CanvasProvider>
  );
}
