export default function twoSum(numbers: number[], target: number): number[] {
	let numToIndex: Map<number, number> = new Map();

	for (let i = 0; i < numbers.length; i++) {
		const compliment = target - numbers[i];
		if (numToIndex.has(compliment)) {
			const answer = [numToIndex.get(compliment)!, i];
			return answer;
		}
		numToIndex.set(numbers[i], i);
	}
	return [];
}
