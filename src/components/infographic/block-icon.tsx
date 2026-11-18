import {
	BookOpen,
	ChartNoAxesColumn,
	CheckSquare,
	CircleDot,
	Lightbulb,
	ListChecks,
	MessageSquareText,
	Quote,
	TableProperties,
} from "lucide-react";
import type { ContentBlock } from "@/types/content";

type BlockIconProps = {
	block: ContentBlock;
};

export function BlockIcon({ block }: BlockIconProps) {
	const Icon = block.taskExamples
		? Lightbulb
		: block.kind === "checklist"
			? CheckSquare
			: block.kind === "reminder"
				? MessageSquareText
				: block.table
					? TableProperties
					: block.visual
						? ChartNoAxesColumn
						: block.passes
							? ListChecks
							: block.links
								? BookOpen
								: block.quote
									? Quote
									: CircleDot;

	return (
		<span
			aria-hidden
			className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-md bg-foreground text-white"
		>
			<Icon className="size-4" />
		</span>
	);
}
