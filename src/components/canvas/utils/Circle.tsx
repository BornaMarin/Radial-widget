import React, { useEffect, useState } from 'react';
import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';

interface CircleType {
  arcRadius: number;
  zIndex: number;
}

class Circle implements CircleType {
  arcRadius;
  zIndex;
  constructor(props: CircleType) {
    this.arcRadius = props.arcRadius;
    this.zIndex = props.zIndex;
    this.draw = this.draw.bind(this);
  }
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.arc(250, 250, this.arcRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
}

export default function CircleCanvas(props: CircleType) {
  const [circle, setCircle] = useState(new Circle(props));

  useEffect(() => {
    setCircle(new Circle(props));
  }, [props.arcRadius]);
  return (
    <CanvasProvider draw={circle.draw}>
      <Canvas zIndex={props.zIndex} />
    </CanvasProvider>
  );
}
