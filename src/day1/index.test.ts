import { differenceTotal, similarityScore } from './index';
import { example, input } from './input';

describe('Day 1', () => {
    test('Example case', () => {
        const expected = 11;
        expect(differenceTotal(example)).toBe(expected);
    });
    
    test('Simple case', () => {
        const simpleInput = `1   2
2   1`;
        expect(differenceTotal(simpleInput)).toBe(0);
    });

    test('Real difference input', () => {
        const result = differenceTotal(input);
        console.log('Real input result:', result);
        expect(typeof result).toBe('number');
    });

    test('Real similarity score input', () => {
        const result = similarityScore(input);
        console.log('Real similarity score result:', result);
        expect(typeof result).toBe('number');
    });
});