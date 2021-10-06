import { dot } from './lib';

const inputs: number[] = [1, 2, 3, 2.5];
const weights: number[][] = [
  [0.2, 0.8, -0.5, 1.0],
  [0.5, -0.91, 0.26, -0.5],
  [-0.26, -0.27, 0.17, 0.87],
];
const biases: number[] = [2, 3, 0.5];

const outputs = dot(weights, inputs).map((output, i) => output + biases[i]);
console.log(outputs);
