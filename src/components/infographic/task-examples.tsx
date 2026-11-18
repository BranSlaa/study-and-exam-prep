import type { TaskExample } from "@/types/content";

type TaskExamplesProps = {
	examples: readonly TaskExample[];
};

export function TaskExamples({ examples }: TaskExamplesProps) {
	return (
		<div className="task-branches">
			{examples.map((example) => (
				<article
					className="task-panel relative rounded-lg border border-current/20 bg-white/70 p-4"
					key={example.label}
				>
					<p className="text-sm font-bold tracking-wider text-stage-1-accent uppercase">
						{example.label}
					</p>
					<p className="mt-2 text-base leading-6 text-foreground">
						{example.prompt}
					</p>
				</article>
			))}
		</div>
	);
}
