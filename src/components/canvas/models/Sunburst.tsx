import React, { useEffect, useState } from 'react';
import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';
import { ISunburst } from '../../../types/interfaces/sunburst.interface';
import { Sunburst } from '../../../types/classes/canvas/Sunburst';

export default function SunburstCanvas(props: ISunburst) {
  const [sunburst, setSunburst] = useState(new Sunburst(props));

  useEffect(() => {
    setSunburst(new Sunburst(props));
  }, [props.numberOfTicksRation, props.arcRadius]);
  return (
    <CanvasProvider drawable={sunburst}>
      <Canvas
        zIndex={props.zIndex}
        xAxisStartingPoint={props.xAxisStartingPoint}
        yAxisStartingPoint={props.yAxisStartingPoint}
      />
    </CanvasProvider>
  );
}
