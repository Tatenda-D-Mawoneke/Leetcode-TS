import { assert } from 'chai';
import twoSum from '../src/twosum.js';

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/
describe('twoSum', () => {
	it('should return an array two indices [0, 1] that add up to the target sum of 9 when given [2,7,11,15]', () => {
		const numbers = [2, 7, 11, 15];
		const target = 9;
		const answer: number[] = twoSum(numbers, target);
		assert.deepEqual(answer, [0, 1]);
	});
	it('should return an array two indices [1,2] that add up to the target sum of 6 when given [3,2,4]', () => {
		const numbers = [3, 2, 4];
		const target = 6;
		const answer: number[] = twoSum(numbers, target);
		assert.deepEqual(answer, [1, 2]);
	});
	it('should return an array two indices [0, 1] that add up to the target sum of 6 when given [3,3]', () => {
		const numbers = [3, 3];
		const target = 6;
		const answer: number[] = twoSum(numbers, target);
		assert.deepEqual(answer, [0, 1]);
	});
});
