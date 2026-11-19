import type { PassItem } from "@/types/content";

type ProcessRailProps = {
	steps: readonly PassItem[];
	style?: "ordered" | "techniques";
};

export function ProcessRail({
	steps,
	style = "ordered",
}: ProcessRailProps) {
	return (
		<ol className={`process-rail process-rail-${style}`}>
			{steps.map((step, index) => (
				<li className="process-step" key={step.title}>
					<span aria-hidden className="process-number">
						{style === "ordered" ? index + 1 : null}
					</span>
					<div>
						<strong className="leading-7 text-foreground">
							{step.title}
						</strong>
						<p className="mt-1 text-base leading-6 text-foreground">
							{step.body}
						</p>
					</div>
				</li>
			))}
		</ol>
	);
}
