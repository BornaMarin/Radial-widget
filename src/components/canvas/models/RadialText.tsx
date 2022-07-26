import React, { useEffect, useState } from 'react';
import Canvas from '../canvasCore/Canvas';
import { IDonutValues } from '../../../types/interfaces/donutValues.interface';
import { RadialWidgetText } from '../../../types/canvas/RadialWidgetText';

export default function RadialText(props: IDonutValues) {
  const [radialText, setRadialText] = useState(new RadialWidgetText(props));

  useEffect(() => {
    setRadialText(new RadialWidgetText(props));
  }, [props]);

  return (
    <Canvas
      drawable={radialText}
      zIndex={props.zIndex}
      xAxisStartingPoint={props.xAxisStartingPoint}
      yAxisStartingPoint={props.yAxisStartingPoint}
    />
  );
}
