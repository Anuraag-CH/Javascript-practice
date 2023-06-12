// anagram.test.js

const isAnagram = require('./anagram');



describe('isAnagram', () => {
    test('returns true for valid anagrams', () => {
        expect(isAnagram('listen', 'silent')).toBe(true);
        expect(isAnagram('funeral', 'realfun')).toBe(true);
        expect(isAnagram('williamshakespeare', 'wsihalkelerisaaepm')).toBe(true);
    });

    test('returns false for non-anagrams', () => {
        expect(isAnagram('hello', 'world')).toBe(false);
        expect(isAnagram('night', 'thinr')).toBe(false);
        expect(isAnagram('cat', 'dog')).toBe(false);
    });

    test('returns false for inputs with different lengths', () => {
        expect(isAnagram('abc', 'abcd')).toBe(false);
        expect(isAnagram('longer', 'long')).toBe(false);
    });

    test('returns false for inputs with different characters', () => {
        expect(isAnagram('hello', 'holla')).toBe(false);
        expect(isAnagram('good', 'gold')).toBe(false);
    });
});
