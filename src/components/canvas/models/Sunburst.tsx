import React, { useEffect, useState } from 'react';
import Canvas from '../canvasCore/Canvas';
import { ISunburst } from '../../../types/interfaces/sunburst.interface';
import { Sunburst } from '../../../types/canvas/Sunburst';

export default function SunburstCanvas(props: ISunburst) {
  const [sunburst, setSunburst] = useState(new Sunburst(props));

  useEffect(() => {
    setSunburst(new Sunburst(props));
  }, [props.sunburstRatio, props.arcRadius]);

  return (
    <Canvas
      drawable={sunburst}
      zIndex={props.zIndex}
      xAxisStartingPoint={props.xAxisStartingPoint}
      yAxisStartingPoint={props.yAxisStartingPoint}
    />
  );
}
