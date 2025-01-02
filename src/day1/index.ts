import { readFileSync } from 'fs';
import path from 'path';

const leftList = [3, 4, 2, 1, 3, 3];
const rightList = [4, 3, 5, 3, 9, 3];

export const solveDay1 = (left: number[], right: number[]): number => {
    const sortedLeft = [...left].sort();
    const sortedRight = [...right].sort();
    const pairs = sortedLeft.map((leftNum, index) => [leftNum, sortedRight[index]]);
    const differences = pairs.map(pair => Math.abs(pair[0] - pair[1]));
    const total = differences.reduce((acc, curr) => acc + curr, 0);
    return total;
};

if (require.main === module) {
    console.log('Part 1:', solveDay1(leftList, rightList));
}