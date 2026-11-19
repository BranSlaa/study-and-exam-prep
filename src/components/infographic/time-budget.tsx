export function TimeBudget() {
	return (
		<figure className="mt-5 ">
			<p className="mb-4 text-sm text-foreground/75">
				Budget your time by marks.
			</p>
			<div
				aria-label="Example time allocation: 10 percent for instructions and review, 30 percent for multiple-choice questions, and 60 percent for an essay"
				className="flex h-10 overflow-hidden rounded-sm text-sm font-bold text-white"
				role="img"
			>
				<div className="flex basis-10/100 items-center justify-center bg-stage-3-accent/70">
					10%
				</div>
				<div className="flex basis-30/100 items-center justify-center bg-stage-3-accent/85">
					30%
				</div>
				<div className="flex flex-1 items-center justify-center bg-stage-3-accent">
					60%
				</div>
			</div>
			<ul className="mt-2 grid grid-cols-1 gap-2 text-xs leading-4 text-foreground/75 sm:grid-cols-[10fr_30fr_60fr] sm:gap-0 sm:text-center">
				<li className="flex min-w-0 items-center gap-2 sm:flex-col sm:gap-0 sm:px-1 sm:text-center sm:text-[0.65rem] md:text-xs">
					<span className="h-1 w-6 shrink-0 bg-stage-3-accent/70 sm:mb-1" />
					<span className="sm:block sm:w-max sm:text-center">
						Instructions
						<br className="hidden sm:block" /> + review
					</span>
				</li>
				<li className="flex min-w-0 items-center gap-2 sm:flex-col sm:gap-0 sm:px-1 sm:text-center sm:text-[0.65rem] md:text-xs">
					<span className="h-1 w-6 shrink-0 bg-stage-3-accent/85 sm:mb-1" />
					<span className="sm:block sm:w-max sm:text-center">
						30
						<br className="hidden sm:block" /> multiple-choice
						<br className="hidden sm:block" /> questions
					</span>
				</li>
				<li className="flex min-w-0 items-center gap-2 sm:flex-col sm:gap-0 sm:px-1 sm:text-center">
					<span className="h-1 w-6 shrink-0 bg-stage-3-accent sm:mb-1" />
					<span className="sm:block sm:w-max sm:text-center">
						Essay
					</span>
				</li>
			</ul>
			<figcaption className="mt-2 text-sm text-foreground/75">
				Set aside time to read instructions and review your answers.
				Divide the remaining working time according to the marks
				available, then adjust as needed.
			</figcaption>
		</figure>
	);
}
