import { Check } from "lucide-react";
import type { ContentBlock } from "@/types/content";

type BlockListProps = Pick<ContentBlock, "items" | "kind" | "ordered">;

export function BlockList({ items, kind, ordered }: BlockListProps) {
	if (!items) return null;
	const List = ordered ? "ol" : "ul";
	const checklist = kind === "checklist";

	return (
		<List
			className={`mt-3 text-foreground ${
				checklist
					? "grid list-none gap-2 p-0 sm:grid-cols-2"
					: `space-y-2 pl-5 ${ordered ? "list-decimal" : "list-disc"}`
			}`}
		>
			{items.map((item) => (
				<li
					className={
						checklist
							? "flex items-center gap-2 bg-white/55 px-3 py-2 leading-6"
							: "pl-1 leading-7"
					}
					key={item}
				>
					{checklist && (
						<Check
							aria-hidden
							className="size-4 shrink-0 text-stage-1-accent"
							strokeWidth={3}
						/>
					)}
					{item}
				</li>
			))}
		</List>
	);
}
