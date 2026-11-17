import { clamp } from "./clamp";

export function interpolateProgress(
	value: number,
	input: readonly number[],
	output: readonly number[],
) {
	const lastIndex = input.length - 1;

	for (let index = 1; index <= lastIndex; index += 1) {
		if (value <= input[index]) {
			const distance = input[index] - input[index - 1];
			const fraction = clamp(
				(value - input[index - 1]) / distance,
			);
			return (
				output[index - 1] +
				(output[index] - output[index - 1]) * fraction
			);
		}
	}

	return output[lastIndex];
}
