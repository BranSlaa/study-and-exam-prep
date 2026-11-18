import { TrendingDown } from "lucide-react";
import type { SectionData } from "@/types/content";

export const section03 = {
	number: "03",
	stage: "one",
	title: "Why we forget",
	introduction:
		"Plan to return to material instead of expecting one study session to last.",
	icon: TrendingDown,
	layout: "mixed",
	blocks: [
		{
			title: "Ebbinghaus's forgetting curve",
			kind: "example",
			paragraphs: [
				"Ebbinghaus's work illustrated how retention can decline over time after learning. The exact pattern depends on the material, the learner, and how learning and remembering are measured.",
			],
			visual: "curve",
			note: "Illustrative forgetting curve — not a prediction of your personal rate of forgetting.",
		},
		{
			title: "Cramming versus spaced practice",
			kind: "example",
			groups: [
				{
					title: "Cramming",
					body: "Concentrates studying into one period. Information is learned quickly but forgotten quickly.",
				},
				{
					title: "Spaced practice",
					body: "Spreads learning across separate sessions, giving you opportunities to return to the material and retrieve it again. As recall improves, lengthen the gaps; revisit difficult material sooner.",
				},
			],
			note: "A schedule such as one day, three days, and one week is an example—not a rule everyone must follow.",
			icon: false,
		},
		{
			title: "Revisit actively",
			kind: "process",
			passes: [
				{
					title: "Recall",
					body: "First try to recall or explain the material without looking.",
				},
				{
					title: "Check",
					body: "Compare your answer with the course material and correct mistakes.",
				},
				{
					title: "Review",
					body: "Return to what you missed instead of relying on familiarity.",
				},
			],
			isFull: true,
		},
		{
			title: "Example: revisit the same topic",
			kind: "process",
			passes: [
				{
					title: "Monday",
					body: "Learn the concept and explain it without notes.",
				},
				{
					title: "Wednesday",
					body: "Recall it again, check gaps, and answer a new question.",
				},
				{
					title: "Saturday",
					body: "Apply it to a new example and compare it with a related concept.",
				},
			],
			note: "This is an example schedule, not a fixed rule for spacing.",
			isFull: true,
		},
	],
	takeaway: "Return to the material—and try remembering before rereading.",
} satisfies SectionData;
