const sequenceIntersection = require('../script/task338');

let arr1, arr2, arr3;

beforeEach( () => {
  arr1 = [1, 3, 5];
  arr2 = [3, 4];
  arr3 = [6, 4];
});

const result = '3';

describe('Testing of function sequenceIntersection', () => {
  test( 'Intersection', () => {
    expect(sequenceIntersection(arr1, arr2)).toBe(result);
  });

  test( 'Intersection', () => {
    expect(sequenceIntersection(arr1, [])).toBeFalsy;
  });

  test( 'Intersection', () => {
    expect(sequenceIntersection(arr1, arr2)).toBeTruthy;
  });

  test( 'Intersection', () => {
    expect(sequenceIntersection(arr1, arr3)).toBeFalsy;
  });
  test( 'Intersection', () => {
    expect(sequenceIntersection(arr1, arr3)).toBeNull;
  });
  test( 'Intersection', () => {
    expect(sequenceIntersection(arr1, arr3)).toBeUndefine;
  });
});