import React from 'react';

export interface ICanvasProps {
  zIndex: number;
  xAxisStartingPoint: number;
  yAxisStartingPoint: number;
  setContext: React.Dispatch<React.SetStateAction<any>>;
}
