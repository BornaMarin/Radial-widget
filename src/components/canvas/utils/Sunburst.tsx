import React, { useEffect, useState } from 'react';
import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';

interface SunburstType {
  numberOfTicksRation: number;
  zIndex: number;
}

function isOdd(num: number): number {
  return num % 2;
}
function lineToAngle(x: number, y: number, length: number, angle: number) {
  return {
    x: x + length * Math.cos(angle),
    y: y + length * Math.sin(angle)
  };
}
class Sunburst implements SunburstType {
  numberOfTicksRation;
  zIndex;
  constructor(props: SunburstType) {
    this.numberOfTicksRation = props.numberOfTicksRation;
    this.zIndex = props.zIndex;
    this.draw = this.draw.bind(this);
  }
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, 500, 500);

    let prev = null;
    for (let i = 1; i <= this.numberOfTicksRation * 2; i++) {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.moveTo(250, 250);
      const pos = lineToAngle(
        250,
        250,
        105,
        (i * Math.PI) / this.numberOfTicksRation + (Math.PI / this.numberOfTicksRation) * 2
      );
      ctx.moveTo(250, 250);
      ctx.lineTo(pos.x, pos.y);
      if (prev && !isOdd(i)) {
        ctx.lineTo(prev.x, prev.y);
      }
      prev = { x: pos.x, y: pos.y };
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
    <CanvasProvider draw={sunburst.draw}>
      <Canvas zIndex={props.zIndex} />
    </CanvasProvider>
  );
}
