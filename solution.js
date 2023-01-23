// Import the module or function that you want to test
import { add } from './math';

describe('add', () => {
    // Define your test cases
    it('should add two numbers', () => {
        // Use Jest's built-in expect function to make assertions about the expected output
        expect(add(1, 2)).toBe(3);
        expect(add(3, 4)).toBe(7);
    });

    it('should not add string', () => {
        // Use Jest's built-in expect function to make assertions about the expected output
        expect(() => add(1, '2')).toThrow(Error);
    });
});
