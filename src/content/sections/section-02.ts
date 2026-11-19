import { BrainCircuit } from "lucide-react";
import type { SectionData } from "@/types/content";

export const section02 = {
	number: "02",
	stage: "one",
	title: "How memory works",
	introduction:
		"Recognizing information is different from being able to explain it yourself.",
	icon: BrainCircuit,
	layout: "cards",
	blocks: [
		{
			title: "Two connected memory systems",
			kind: "example",
			groups: [
				{
					title: "Working memory",
					body: "Holds and uses a limited amount of information while you think, compare ideas, and work through a question.",
				},
				{
					title: "Long-term memory",
					body: "Retains knowledge and experiences over time so you can access them when you need them.",
				},
			],
			icon: false,
		},
		{
			title: "Encoding and retrieval",
			kind: "example",
			paragraphs: [
				"Encoding is how information is learned. Retrieval is how previously learned information is brought back to mind. You need opportunities to practise both.",
			],
			visual: "memory",
			caption:
				"FIGURE 24.4 A modified three-stage information-processing model of memory Atkinson and Shiffrin's classic three-stage model helps us to think about how memories are processed, but researchers now recognize other ways that long-term memories form. For example, some information slips into long-term memory via a “back door,” without our consciously attending to it (automatic processing). And so much active processing occurs in the short-term memory stage that we now call it working memory. (Myers, D. G., & DeWall, C. N. (2021). Psychology (13th ed.). Worth Publishers.)",
			isFull: true,
			icon: false,
		},
		{
			title: "Attention as a practical prerequisite",
			paragraphs: [
				"Give the material your attention. Silence unnecessary notifications, put unrelated tabs away, and choose one task for the study block. When your attention drifts, pause and explain the last idea before continuing.",
			],
		},
		{
			title: "Recognition versus recall",
			kind: "reference",
			table: {
				label: "Recognition versus recall",
				columns: ["Recognition", "Recall"],
				rows: [
					[
						"Identifying information when you see it.",
						"Producing information without being shown the answer.",
					],
					[
						"“Which definition describes operant conditioning?”",
						"“Explain operant conditioning in your own words.”",
					],
				],
				dontBold: true,
			},
			isFull: true,
		},
		{
			title: "Ask yourself",
			kind: "reminder",
			paragraphs: [
				"Can I explain this with my notes closed, or does it only look familiar when I read it?",
			],
			isFull: true,
		},
	],
	takeaway:
		"Familiarity is a cue to check your understanding, not proof that you know the material.",
} satisfies SectionData;
