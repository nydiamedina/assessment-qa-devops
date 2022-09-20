const { bots } = require('./data');
const { shuffleArray } = require('./utils');

describe('shuffleArray should', () => {
    // CODE HERE
    test('return an array', () => {
        const shuffledArray = shuffleArray(bots);
        expect(Array.isArray(shuffledArray)).toBeTruthy();
    });

    test('return an array of the same length as the argument', () => {
        const shuffledArray = shuffleArray(bots);
        expect(shuffledArray.length).toBe(bots.length);
    });

    test('return an array with the same items as the argument', () => {
        const shuffledArray = shuffleArray(bots);
        expect(shuffledArray).toEqual(expect.arrayContaining(bots));
    });
});