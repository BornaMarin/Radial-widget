import React, { useEffect, useRef } from 'react';
import CSS from 'csstype';
import { IDrawable } from '../../../types/interfaces/drawable.interface';

interface ICanvasProps {
  zIndex: number;
  xAxisStartingPoint: number;
  yAxisStartingPoint: number;
  drawable: IDrawable;
}

let canvas: HTMLCanvasElement | null = null;
let context: CanvasRenderingContext2D | null = null;

const Canvas = (props: ICanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const prepareCanvas = () => {
    if (canvasRef.current) {
      canvas = canvasRef.current;
    }
    if (canvas) {
      context = canvas.getContext('2d');
    }
  };

  useEffect(() => {
    prepareCanvas();
  }, []);

  useEffect(() => {
    if (context) {
      prepareCanvas();
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
