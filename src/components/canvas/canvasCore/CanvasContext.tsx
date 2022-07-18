import React, { useContext, useRef } from 'react';

//  canvasRef: HTMLCanvasElement
const CanvasContext = React.createContext({});

interface CanvasChildren {
  children: JSX.Element[] | JSX.Element;
  draw: (ctx: CanvasRenderingContext2D) => void;
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
      props.draw(context);
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
