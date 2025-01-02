import { solveDay1 } from './index';

describe('Day 1', () => {
    test('Example case', () => {
        const left = [3, 4, 2, 1, 3, 3];
        const right = [4, 3, 5, 3, 9, 3];
        
        console.log('Sorted left:', [...left].sort());
        console.log('Sorted right:', [...right].sort());
        
        const expected = 11;
        expect(solveDay1(left, right)).toBe(expected);
    });
    
    test('Simple case', () => {
        expect(solveDay1([1, 2], [2, 1])).toBe(0);
    });
});