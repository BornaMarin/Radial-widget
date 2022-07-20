import React, { useEffect, useState } from 'react';
import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';

import { IRadialWidgetText } from '../../../types/interfaces/radialWidgetText.interface';
import { RadialWidgetText } from '../../../types/classes/canvas/RadialWidgetText';

export default function RadialText(props: IRadialWidgetText) {
  const [circle, setCircle] = useState(new RadialWidgetText(props));

  useEffect(() => {
    setCircle(new RadialWidgetText(props));
  }, [props.value]);
  return (
    <CanvasProvider drawable={circle}>
      <Canvas
        zIndex={props.zIndex}
        xAxisStartingPoint={props.xAxisStartingPoint}
        yAxisStartingPoint={props.yAxisStartingPoint}
      />
    </CanvasProvider>
  );
}
