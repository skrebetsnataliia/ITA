const findNumbers = require('../script/task182');

describe("Testing of function findNumbers", () => {
    test('Find sum and quantity', () => {
        expect(findNumbers(5, 20, 4, 10, 6, 10, 35)).toStrictEqual({sum: 40, quantity: 3});
    });

    test('Find sum and quantity', () => {
        expect(findNumbers(5, 20, 4, 10, 6, 10, 35)).toBeTrusty;
    });

    test('Find sum and quantity', () => {
        expect(findNumbers(4, 6, 6, 9)).toStrictEqual({sum: 0, quantity: 0});
    });

    test('Find sum and quantity', () => {
        expect(findNumbers(4, 6, 6, 9)).toBeUndefined;
    });
    test('Find sum and quantity', () => {
        expect(findNumbers(4, 6, 6, 9)).toBeNull;
    });
}
);