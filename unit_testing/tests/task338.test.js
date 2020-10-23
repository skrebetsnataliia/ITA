const sequenceIntersection = require('../script/task338');

let arr1, arr2, arr3;

beforeEach( () => {
  arr1 = [1, 3, 5];
  arr2 = [3, 4];
  arr3 = [6, 4];
});

const result = '3';

test( 'Intersection', () => {
    expect(sequenceIntersection(arr1, arr2)).toBe(result),
    expect(sequenceIntersection(arr1, [])).toBeFalsy,
    expect(sequenceIntersection(arr1, arr2)).toBeTruthy,
    expect(sequenceIntersection(arr1, arr3)).toBeFalsy,
    expect(sequenceIntersection(arr1, arr3)).toBeNull,
    expect(sequenceIntersection(arr1, arr3)).toBeUndefine
})