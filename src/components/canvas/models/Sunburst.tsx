import React, { useEffect, useState } from 'react';
import Canvas from '../canvasCore/Canvas';
import { ISunburst } from '../../../types/interfaces/sunburst.interface';
import { Sunburst } from '../../../types/canvas/Sunburst';
import { IDrawableCanvasProvider } from '../../../types/interfaces/drawable.interface';

export default function SunburstCanvas(props: ISunburst) {
  const [sunburst, setSunburst] = useState(new Sunburst(props));
  const ref = React.useRef<IDrawableCanvasProvider>();

  useEffect(() => {
    setSunburst(new Sunburst(props));
  }, [props.sunburstRatio, props.arcRadius]);
  useEffect(() => {
    ref?.current?.draw();
  }, [sunburst]);
  return (
    <Canvas
      drawable={sunburst}
      ref={ref}
      zIndex={props.zIndex}
      xAxisStartingPoint={props.xAxisStartingPoint}
      yAxisStartingPoint={props.yAxisStartingPoint}
    />
  );
}
