import React, { useEffect, useState } from 'react';
import Canvas from '../canvasCore/Canvas';
import { RadialValueDonut } from '../../../types/canvas/RadialValueDonut';
import { IDonutValues } from '../../../types/interfaces/donutValues.interface';

const RadialValueDonutCanvas = (props: IDonutValues) => {
  console.log('RadialValueDonutCanvas');

  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    if (context) {
      const circle = new RadialValueDonut(props);
      circle.draw(context);
    }
  }, [props.value, props.color, context]);

  return (
    <Canvas
      setContext={setContext}
      zIndex={props.zIndex}
      xAxisStartingPoint={props.xAxisStartingPoint}
      yAxisStartingPoint={props.yAxisStartingPoint}
    />
  );
};

export default React.memo(RadialValueDonutCanvas);
