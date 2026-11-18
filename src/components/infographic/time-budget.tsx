export function TimeBudget() {
	return (
		<figure className="mt-5 border-y border-current/25 py-4">
			<div
				aria-label="Example time allocation: fewer marks receive less time and more marks receive more time"
				className="flex h-12 overflow-hidden rounded-sm text-sm font-bold text-white"
				role="img"
			>
				<div className="flex basis-10/100 items-center justify-center bg-stage-3-accent/70">
					10%
				</div>
				<div className="flex basis-15/100 items-center justify-center bg-stage-3-accent/85">
					15%
				</div>
				<div className="flex flex-1 items-center justify-center bg-stage-3-accent">
					75%
				</div>
			</div>
			<figcaption className="mt-2 text-sm text-foreground/75">
				Protect more time for questions worth more marks. Use the Pareto
				Principle to guide your time allocation by spending the majority
				of your time on the most important questions.
				<br />
				<br />
				Example: If you have 100 minutes to write an exam, 80% of your
				time should be spent on the 20% of questions that are worth the
				most marks.
			</figcaption>
		</figure>
	);
}
