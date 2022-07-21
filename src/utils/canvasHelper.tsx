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
//vjv je trebalo biti u nekoj base clasi... sad ima puno parametar.. al eto zadnji dan ubacujem pa..
export function calcRadialValue(
  startAngle: number,
  endAngle: number,
  minValue: number,
  maxValue: number,
  value: number
): number {
  const angleScale = endAngle - startAngle;
  const valueScale = maxValue - minValue;
  const valueRatio = angleScale / valueScale;
  //oduzimanje u zagradi postavi scalu na start angel, jer donut nije puna kruznica
  return valueRatio * (value - minValue) + startAngle;
}
