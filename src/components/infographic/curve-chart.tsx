export function CurveChart() {
	return (
		<figure className="rounded-md bg-white/65 p-4">
			<svg
				aria-labelledby="curve-title curve-description"
				className="h-52 w-full"
				role="img"
				viewBox="0 0 520 220"
			>
				<title id="curve-title">Illustrative forgetting curve</title>
				<desc id="curve-description">
					A steep initial decline in retention that becomes shallower
					over time.
				</desc>
				<path
					d="M62 20V174H496"
					fill="none"
					stroke="currentColor"
					strokeWidth="3"
				/>
				<path
					d="M70 35C105 102 155 128 225 145C310 164 398 166 482 168"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="6"
				/>
				<text fill="currentColor" fontSize="16" x="245" y="207">
					Time since learning
				</text>
				<text
					fill="currentColor"
					fontSize="16"
					transform="rotate(-90 20 125)"
					x="20"
					y="125"
				>
					Retention
				</text>
			</svg>
		</figure>
	);
}
