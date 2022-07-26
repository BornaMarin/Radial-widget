import React, { useEffect, useState } from 'react';
import Canvas from '../canvasCore/Canvas';
import { IDrawableCanvasProvider } from '../../../types/interfaces/drawable.interface';
import { RadialValueDonut } from '../../../types/canvas/RadialValueDonut';
import { IDonutValues } from '../../../types/interfaces/donutValues.interface';

export default function RadialValueDonutCanvas(props: IDonutValues) {
  const [radialValueDonut, setRadialValueDonut] = useState(new RadialValueDonut(props));
  const ref = React.useRef<IDrawableCanvasProvider>();
  useEffect(() => {
    setRadialValueDonut(new RadialValueDonut(props));
  }, [props.value, props.color]);
  useEffect(() => {
    ref?.current?.draw();
  }, [radialValueDonut]);
  return (
    <Canvas
      drawable={radialValueDonut}
      ref={ref}
      zIndex={props.zIndex}
      xAxisStartingPoint={props.xAxisStartingPoint}
      yAxisStartingPoint={props.yAxisStartingPoint}
    />
  );
}
