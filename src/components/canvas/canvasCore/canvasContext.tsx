import React, { useContext, useRef } from 'react';

//  canvasRef: HTMLCanvasElement
const CanvasContext = React.createContext({});

interface CanvasChildren {
  children: JSX.Element[] | JSX.Element;
  draw: () => void;
}

export const CanvasProvider = (props: CanvasChildren): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const prepareCanvas = () => {
    let canvas: HTMLCanvasElement | null = null;
    if (canvasRef.current) {
      canvas = canvasRef.current;
    }
    let context: CanvasRenderingContext2D | null = null;
    if (canvas) {
      context = canvas.getContext('2d');
    }
    const dpr = window.devicePixelRatio;

    if (context) {
      context.scale(dpr, dpr);
      context.lineCap = 'round';
      context.strokeStyle = 'black';
      context.lineWidth = 5;
    }
  };
  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        prepareCanvas
      }}>
      {props.children}
    </CanvasContext.Provider>
  );
};
export const useCanvas = () => useContext(CanvasContext);
