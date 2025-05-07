export default function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
	let mergedArray = [...nums1.slice(0, m), ...nums2.slice(0, n)];
	mergedArray.sort((a, b) => a - b);

	for (let i = 0; i < mergedArray.length; i++) {
		nums1[i] = mergedArray[i];
	}

	return nums1;
}
