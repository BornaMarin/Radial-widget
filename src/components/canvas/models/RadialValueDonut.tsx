import React, { useEffect, useState } from 'react';
import Canvas from '../canvasCore/Canvas';
import { RadialValueDonut } from '../../../types/canvas/RadialValueDonut';
import { IDonutValues } from '../../../types/interfaces/donutValues.interface';

export default function RadialValueDonutCanvas(props: IDonutValues) {
  const [radialValueDonut, setRadialValueDonut] = useState(new RadialValueDonut(props));
  useEffect(() => {
    setRadialValueDonut(new RadialValueDonut(props));
  }, [props.value, props.color]);

  return (
    <Canvas
      drawable={radialValueDonut}
      zIndex={props.zIndex}
      xAxisStartingPoint={props.xAxisStartingPoint}
      yAxisStartingPoint={props.yAxisStartingPoint}
    />
  );
}
