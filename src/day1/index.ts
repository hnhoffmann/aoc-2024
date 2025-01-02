import { input, example} from './input';

const parseInput = (inputStr: string): [number[], number[]] => {
    const lines = inputStr.trim().split('\n');
    const [left, right] = lines.reduce<[number[], number[]]>(
        ([left, right], line) => {
            const [l, r] = line.trim().split(/\s+/).map(Number);
            return [left.concat(l), right.concat(r)];
        },
        [[], []]
    );
    return [left, right];
};

export const differenceTotal = (inputStr: string): number => {
    const [left, right] = parseInput(inputStr);
    const sortedLeft = [...left].sort((a, b) => a - b);
    const sortedRight = [...right].sort((a, b) => a - b);
    const differences = sortedLeft.map((leftNum, index) => 
        Math.abs(leftNum - sortedRight[index])
    );
    return differences.reduce((acc, curr) => acc + curr, 0);
};

export const similarityScore = (inputStr: string): number => {
    const [left, right] = parseInput(inputStr);
    return left.reduce((total, leftNum) => {
        const occurrences = right.filter(rightNum => rightNum === leftNum).length;
        return total + (leftNum * occurrences);
    }, 0);
};

if (require.main === module) {
    console.log('Example:', differenceTotal(example));
    console.log('Part 1:', differenceTotal(input));
    console.log('Example Part 2:', similarityScore(example));
    console.log('Part 2:', similarityScore(input));
};