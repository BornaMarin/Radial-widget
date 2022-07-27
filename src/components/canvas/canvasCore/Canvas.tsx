import React, { SetStateAction, useEffect, useRef } from 'react';
import CSS from 'csstype';
import { IDrawable } from '../../../types/interfaces/drawable.interface';

interface ICanvasProps {
  zIndex: number;
  xAxisStartingPoint: number;
  yAxisStartingPoint: number;
  setContext: React.Dispatch<React.SetStateAction<any>>;
}

// Keep in mind that premature optimization is the root of all evil :)
const Canvas = (props: ICanvasProps) => {
  console.log('canvas', props);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // useEffect(() => {
  //   if (canvasRef && canvasRef.current && canvasRef.current.getContext('2d')) {
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-ignore
  //     props.drawable?.draw(canvasRef.current.getContext('2d'));
  //   }
  // }, [props.drawable]);
  useEffect(() => {
    if (canvasRef && canvasRef.current && canvasRef.current.getContext('2d')) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      props.setContext(canvasRef.current.getContext('2d'));
    }
  }, []);

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
export default React.memo(Canvas);
