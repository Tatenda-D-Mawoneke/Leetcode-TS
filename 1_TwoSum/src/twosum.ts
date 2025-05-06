export default function twoSum(numbers: number[], target: number): number[] {
	let answer: number[] = [];
	for (let i = 0; i < numbers.length - 1; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			if (numbers[i] + numbers[j] === target) {
				answer = [i, j];
				return answer;
			}
		}
	}
	return answer;
}
