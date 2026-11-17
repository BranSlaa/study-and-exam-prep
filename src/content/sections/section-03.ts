import { TrendingDown } from "lucide-react";
import type { SectionData } from "@/types/content";

export const section03 = {
	number: "03",
	stage: "one",
	title: "Why we forget",
	introduction: "Plan to return to material instead of expecting one study session to last.",
	icon: TrendingDown,
	layout: "mixed",
	blocks: [
		{
			title: "Ebbinghaus’s forgetting curve",
			paragraphs: [
				"Ebbinghaus’s work illustrated how retention can decline over time after learning. The exact pattern depends on the material, the learner, and how learning and remembering are measured.",
			],
			visual: "curve",
			note: "Illustrative forgetting curve — not a prediction of your personal rate of forgetting.",
		},
		{
			title: "Cramming versus spaced practice",
			paragraphs: [
				"Cramming concentrates studying into one period. Spaced practice spreads learning across separate sessions, giving you opportunities to return to the material and retrieve it again.",
			],
		},
		{
			title: "Revisit actively",
			paragraphs: [
				"Repeated exposure can make material feel familiar. On each return, first try to recall or explain it. Then check your answer, correct mistakes, and review what you missed.",
			],
		},
		{
			title: "Example: revisit the same topic",
			table: {
				label: "Example: revisit the same topic",
				columns: ["Monday", "Wednesday", "Saturday"],
				rows: [
					[
						"Learn the concept and explain it without notes.",
						"Recall it again, check gaps, and answer a new question.",
						"Apply it to a new example and compare it with a related concept.",
					],
				],
			},
			note: "This is an example schedule, not a fixed rule for spacing.",
		},
	],
	takeaway: "Return to the material—and try remembering before rereading.",
} satisfies SectionData;
