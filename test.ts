import {describe, expect, test} from '@jest/globals';
import { counter } from './counter';

describe('Counter Test', () => {
  test('Set and Get Counter', () => {
    const [getA, nextA] = counter(1);
    const [getB, nextB] = counter(10);
    const test1 = getA() as number; 
    const test2 = nextA() as undefined;
    const test3 = getA() as number; 
    const test4 = nextB() as undefined;
    const test5 = getA() as number; 
    const test6 = getB() as number; 
    const test7 = nextA() as undefined;
    const test8 = getA() as number; 
    const test9 = getB() as number; 
    expect(test1).toBe(1);
    expect((test2)).toBe(undefined);
    expect((test3)).toBe(2);
    expect((test4)).toBe(undefined);
    expect((test5)).toBe(2);
    expect((test6)).toBe(11);
    expect((test7)).toBe(undefined);
    expect((test8)).toBe(3);
    expect((test9)).toBe(11);
  });
});