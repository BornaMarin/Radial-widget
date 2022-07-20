//overkill
export function isOdd(num: number): number {
  return num % 2;
}
//mogla bi biti klasa Line, metoda drawAngle
export function lineToAngle(x: number, y: number, length: number, angle: number) {
  return {
    x: x + length * Math.cos(angle),
    y: y + length * Math.sin(angle)
  };
}
