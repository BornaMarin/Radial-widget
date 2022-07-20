export interface IDrawable {
  draw: (ctx: CanvasRenderingContext2D) => void;
}
export interface IDrawableCanvasProvider {
  draw: () => void;
}
