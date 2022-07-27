import React, { useEffect, useState } from 'react';
import Canvas from '../canvasCore/Canvas';
import { IDonutValues } from '../../../types/interfaces/donutValues.interface';
import { RadialWidgetText } from '../../../types/canvas/RadialWidgetText';

const RadialText = (props: IDonutValues) => {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    if (context) {
      const circle = new RadialWidgetText(props);
      circle.draw(context);
    }
  }, [props, context]);

  return (
    <Canvas
      setContext={setContext}
      zIndex={props.zIndex}
      xAxisStartingPoint={props.xAxisStartingPoint}
      yAxisStartingPoint={props.yAxisStartingPoint}
    />
  );
};

export default React.memo(RadialText);
