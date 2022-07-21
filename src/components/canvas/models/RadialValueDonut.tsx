import React, { useEffect, useState } from 'react';
import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';
import { IDrawableCanvasProvider } from '../../../types/interfaces/drawable.interface';
import { IBidirection } from '../../../types/interfaces/bidirection.interface';
import { RadialValueDonut } from '../../../types/canvas/RadialValueDonut';

export default function RadialValueDonutCanvas(props: IBidirection) {
  const [radialValueDonut, setRadialValueDonut] = useState(new RadialValueDonut(props));
  const ref = React.useRef<IDrawableCanvasProvider>();
  useEffect(() => {
    setRadialValueDonut(new RadialValueDonut(props));
    //todo check this.....
    setTimeout(() => ref?.current?.draw());
  }, [props.value]);

  return (
    <CanvasProvider drawable={radialValueDonut}>
      <Canvas
        ref={ref}
        zIndex={props.zIndex}
        xAxisStartingPoint={props.xAxisStartingPoint}
        yAxisStartingPoint={props.yAxisStartingPoint}
      />
    </CanvasProvider>
  );
}
