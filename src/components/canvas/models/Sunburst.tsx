import React, { useEffect, useState } from 'react';
import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';
import { ISunburst } from '../../../types/interfaces/sunburst.interface';
import { Sunburst } from '../../../types/canvas/Sunburst';
import { IDrawableCanvasProvider } from '../../../types/interfaces/drawable.interface';

export default function SunburstCanvas(props: ISunburst) {
  const [sunburst, setSunburst] = useState(new Sunburst(props));
  const ref = React.useRef<IDrawableCanvasProvider>();

  useEffect(() => {
    setSunburst(new Sunburst(props));
    //todo check this.....
    setTimeout(() => ref?.current?.draw());
  }, [props.numberOfTicksRation, props.arcRadius]);
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
