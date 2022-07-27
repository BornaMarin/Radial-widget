import React, { useEffect, useRef } from 'react';
import CSS from 'csstype';
import { ICanvasProps } from '../../../types/interfaces/baseCanvas';

const Canvas = (props: ICanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
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
