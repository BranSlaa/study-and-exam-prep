import type { ContentBlock } from "@/types/content";

export function getBlockAppearance(block: ContentBlock) {
	switch (block.kind) {
		case "example":
		case "reference":
		case "process":
			return "border-0 bg-transparent px-0 py-2";
		case "checklist":
			return "rounded-none border-x-0 border-y bg-white/25 px-4 pt-2 pb-5";
		case "reminder":
			return "rounded-none border-0 border-l-4 bg-transparent pt-2 pb-1 pl-2 md:pl-4";
		case "prompt":
			return "rounded-lg border-2 border-dashed border-current/35 bg-white/35 px-5 pt-2 pb-5";
		default:
			return `rounded-lg border border-current/15 px-4 pt-2 pb-4 ${
				block.featured ? "bg-white/75" : "bg-white/45"
			}`;
	}
}
