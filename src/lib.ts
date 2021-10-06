export function zip(a: any, b: any) {
  return a.map((k, i) => [k, b[i]]);
}
