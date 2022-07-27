import React from 'react';
import DonutCanvas from '../models/Donut';
import CircleCanvas from '../models/Circle';
import SunburstCanvas from '../models/Sunburst';
import { IRadialWidget } from '../../../types/interfaces/radialWidget.interface';
import RadialText from '../models/RadialText';
import RadialValueDonutCanvas from '../models/RadialValueDonut';
import { IDonutValues } from '../../../types/interfaces/donutValues.interface';
import { ISunburst } from '../../../types/interfaces/sunburst.interface';

function RadialWidget(props: IDonutValues & IRadialWidget & ISunburst) {
  console.log('Widget');
  return (
    <>
      <div
        style={{
          position: 'relative',
          height: props.xAxisStartingPoint * 2 + 'px',
          width: props.yAxisStartingPoint * 2 + 'px'
        }}>
        <DonutCanvas
          xAxisStartingPoint={props.xAxisStartingPoint}
          yAxisStartingPoint={props.xAxisStartingPoint}
          startAngle={props.arcLength}
          endAngle={Math.PI * 3 - props.arcLength}
          arcRadius={props.arcRadius}
          rotationFactor={props.rotationFactor}
          color={props.defaultTickColor}
          zIndex={1}
        />
        <RadialValueDonutCanvas
          xAxisStartingPoint={props.xAxisStartingPoint}
          yAxisStartingPoint={props.xAxisStartingPoint}
          arcRadius={props.arcRadius}
          endAngle={Math.PI * 3 - props.arcLength}
          startAngle={props.arcLength}
          rotationFactor={props.rotationFactor}
          color={props.progressColor}
          zIndex={2}
          value={props.value}
          bidirection={props.bidirection}
          minValue={props.minValue}
          maxValue={props.maxValue}
          arcLength={props.arcLength}
        />
        <SunburstCanvas
          xAxisStartingPoint={props.xAxisStartingPoint}
          yAxisStartingPoint={props.xAxisStartingPoint}
          sunburstRatio={props.sunburstRatio}
          arcRadius={props.arcRadius}
          color={props.color}
          zIndex={3}
        />
        <CircleCanvas
          xAxisStartingPoint={props.xAxisStartingPoint}
          yAxisStartingPoint={props.xAxisStartingPoint}
          arcRadius={props.bodyRadius}
          zIndex={4}
          color={'white'}
        />
        <RadialText
          arcRadius={props.arcRadius}
          arcLength={props.arcLength}
          zIndex={5}
          xAxisStartingPoint={props.xAxisStartingPoint}
          yAxisStartingPoint={props.yAxisStartingPoint}
          value={props.value}
          minValue={props.minValue}
          maxValue={props.maxValue}
          rotationFactor={props.rotationFactor}
          startAngle={props.arcLength}
          endAngle={Math.PI * 3 - props.arcLength}
          bidirection={props.bidirection}
          color={props.color}
        />
      </div>
    </>
  );
}
export default RadialWidget;
