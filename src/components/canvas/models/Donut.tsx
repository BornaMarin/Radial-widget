import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';
import React, { useEffect, useState } from 'react';
import { IDonut } from '../../../types/interfaces/donut.interface';
import { Donut } from '../../../types/classes/canvas/Donut';

export default function DonutCanvas(props: IDonut) {
  const [donut, setDonut] = useState(new Donut(props));

  useEffect(() => {
    setDonut(new Donut(props));
  }, [props.startAngle, props.rotationFactor, props.endAngle, props.color]);
  return (
    <CanvasProvider drawable={donut}>
      <Canvas zIndex={props.zIndex} />
    </CanvasProvider>
  );
}
