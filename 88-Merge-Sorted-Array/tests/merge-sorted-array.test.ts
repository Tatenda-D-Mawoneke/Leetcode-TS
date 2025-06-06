/**
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

import { assert } from 'chai';
import merge from '../src/merge-sorted-array.js';

describe('Merge sorted array', () => {
	it('Should output [1,2,2,3,5,6] when given nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3', () => {
		const nums1 = [1, 2, 3, 0, 0, 0];
		const m = 3;
		const nums2 = [2, 5, 6];
		const n = 3;

		const answer = merge(nums1, m, nums2, n);
		assert.deepEqual(answer, [1, 2, 2, 3, 5, 6]);
	});
	it('Should output [1] when given nums1 = [1], m = 1, nums2 = [], n = 0', () => {});
	it('Should output [1] when given nums1 = [0], m = 0, nums2 = [1], n = 1', () => {});
});
