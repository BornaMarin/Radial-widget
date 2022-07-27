import React, { useEffect, useState } from 'react';
import Canvas from '../canvasCore/Canvas';
import { ISunburst } from '../../../types/interfaces/sunburst.interface';
import { Sunburst } from '../../../types/canvas/Sunburst';

const SunburstCanvas = (props: ISunburst) => {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    if (context) {
      const circle = new Sunburst(props);
      circle.draw(context);
    }
  }, [props.sunburstRatio, props.arcRadius, context]);

  return (
    <Canvas
      setContext={setContext}
      zIndex={props.zIndex}
      xAxisStartingPoint={props.xAxisStartingPoint}
      yAxisStartingPoint={props.yAxisStartingPoint}
    />
  );
};
export default React.memo(SunburstCanvas);
