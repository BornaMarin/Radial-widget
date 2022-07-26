import React, { useEffect, useRef, useState } from 'react';
import CSS from 'csstype';
import { IDrawable } from '../../../types/interfaces/drawable.interface';
import { Sunburst } from '../../../types/canvas/Sunburst';

interface ICanvasProps {
  zIndex: number;
  xAxisStartingPoint: number;
  yAxisStartingPoint: number;
  drawable: IDrawable;
}

const Canvas = (props: ICanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let canvas: HTMLCanvasElement | null = null;
  // let context: CanvasRenderingContext2D | null = null;
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const prepareCanvas = () => {
    if (canvasRef.current) {
      canvas = canvasRef.current;
    }
    if (canvas) {
      setContext(canvas.getContext('2d'));
    }
  };

  useEffect(() => {
    prepareCanvas();
  }, []);

  useEffect(() => {
    if (context) {
      props.drawable?.draw(context);
    }
  }, [props.drawable]);

  const canvasStyle: CSS.Properties = {
    zIndex: props.zIndex,
    position: 'absolute',
    display: 'block',
    objectFit: 'contain',
    border: '1px solid'
  };
  return (
    <>
      <canvas
        width={props.xAxisStartingPoint * 2}
        height={props.yAxisStartingPoint * 2}
        style={canvasStyle}
        ref={canvasRef}
      />
    </>
  );
};
export default Canvas;
