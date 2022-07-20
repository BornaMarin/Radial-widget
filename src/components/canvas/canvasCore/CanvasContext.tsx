import React, { useContext, useRef } from 'react';
import { IDrawable } from '../../../types/interfaces/drawable.interface';

interface ICanvasContext {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  prepareCanvas: () => void;
  drawElement: () => void;
}
//  canvasRef: HTMLCanvasElement
const CanvasContext = React.createContext({} as ICanvasContext);

interface CanvasChildren {
  children: JSX.Element[] | JSX.Element;
  drawable: IDrawable;
}

export const CanvasProvider = (props: CanvasChildren): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let canvas: HTMLCanvasElement | null = null;
  let context: CanvasRenderingContext2D | null = null;
  const prepareCanvas = () => {
    if (canvasRef.current) {
      canvas = canvasRef.current;
    }

    if (canvas) {
      context = canvas.getContext('2d');
    }

    // const dpr = window.devicePixelRatio;

    if (context) {
      // context.scale(dpr, dpr);
      context.lineCap = 'round';
      context.strokeStyle = 'black';
      context.lineWidth = 5;
    }
  };

  const drawElement = () => {
    if (context) {
      props.drawable.draw(context);
    }
  };
  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        prepareCanvas,
        drawElement
      }}>
      {props.children}
    </CanvasContext.Provider>
  );
};
export const useCanvas = () => useContext(CanvasContext);
