export function zip(a: any, b: any) {
  return a.map((k: any, i: any) => [k, b[i]]);
}

export function dot(a: number[], b: number[]): number;
export function dot(a: number[][], b: number[]): number[];
export function dot(a: any, b: any): number | number[] | undefined {
  if (Array.isArray(a[0])) {
    return a.map((k: number[]) => dotVectors(k, b));
  } else if (a instanceof Array) {
    return dotVectors(a, b);
  }
}

function dotVectors(a: number[], b: number[]): number {
  return a
    .map((k: number, i: number) => k * b[i])
    .reduce((sum: number, val: number) => sum + val);
}
