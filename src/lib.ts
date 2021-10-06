export function zip(a: any, b: any) {
  return a.map((k, i) => [k, b[i]]);
}

export function dot(a: number[], b: number[]): number;

export function dot(a: number[][], b: number[]): number[];

export function dot(a: any, b: any): number | number[] | undefined {
  if (Array.isArray(a[0])) {
    console.log('here');
    return a.map((k: number[]) =>
      k
        .map((z: number, i: number) => z * b[i])
        .reduce((sum: number, val: number) => sum + val)
    );
  } else if (a instanceof Array) {
    return a
      .map((k: number, i: number) => k * b[i])
      .reduce((sum: number, val: number) => sum + val);
  }
}
