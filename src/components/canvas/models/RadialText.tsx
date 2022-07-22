import React, { useEffect, useState } from 'react';
import Canvas from '../canvasCore/Canvas';

import { IDonutValues } from '../../../types/interfaces/donutValues.interface';
import { RadialWidgetText } from '../../../types/canvas/RadialWidgetText';
import { IDrawableCanvasProvider } from '../../../types/interfaces/drawable.interface';

export default function RadialText(props: IDonutValues) {
  const [radialText, setRadialText] = useState(new RadialWidgetText(props));
  const ref = React.useRef<IDrawableCanvasProvider>();

  useEffect(() => {
    setRadialText(new RadialWidgetText(props));
    //todo check this.....
    setTimeout(() => ref?.current?.draw());
  }, [props]);
  return (
    <Canvas
      drawable={radialText}
      ref={ref}
      zIndex={props.zIndex}
      xAxisStartingPoint={props.xAxisStartingPoint}
      yAxisStartingPoint={props.yAxisStartingPoint}
    />
  );
}
