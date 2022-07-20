import React, { useEffect, useState } from 'react';
import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';

import { IRadialWidgetText } from '../../../types/interfaces/radialWidgetText.interface';
import { RadialWidgetText } from '../../../types/canvas/RadialWidgetText';
import { IDrawableCanvasProvider } from '../../../types/interfaces/drawable.interface';

export default function RadialText(props: IRadialWidgetText) {
  const [circle, setCircle] = useState(new RadialWidgetText(props));
  const ref = React.useRef<IDrawableCanvasProvider>();

  useEffect(() => {
    setCircle(new RadialWidgetText(props));
    //todo check this.....
    setTimeout(() => ref?.current?.draw());
  }, [props.value]);
  return (
    <CanvasProvider drawable={circle}>
      <Canvas
        ref={ref}
        zIndex={props.zIndex}
        xAxisStartingPoint={props.xAxisStartingPoint}
        yAxisStartingPoint={props.yAxisStartingPoint}
      />
    </CanvasProvider>
  );
}
