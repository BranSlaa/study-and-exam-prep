export function clamp(value: number, minimum = 0, maximum = 1) {
	return Math.min(maximum, Math.max(minimum, value));
}
