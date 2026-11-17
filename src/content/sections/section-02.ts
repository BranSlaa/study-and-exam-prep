import { BrainCircuit } from "lucide-react";
import type { SectionData } from "@/types/content";

export const section02 = {
	number: "02",
	stage: "one",
	title: "How memory works",
	introduction: "Recognizing information is different from being able to explain it yourself.",
	icon: BrainCircuit,
	layout: "cards",
	blocks: [
		{
			title: "Working memory",
			paragraphs: [
				"Working memory holds and uses a limited amount of information while you think. It helps you follow an explanation, compare ideas, and work through a question.",
			],
		},
		{
			title: "Long-term memory",
			paragraphs: [
				"Long-term memory retains knowledge and experiences over time. Studying aims to build knowledge you can access when you need it.",
			],
		},
		{
			title: "Encoding and retrieval",
			paragraphs: [
				"Encoding is how information is learned. Retrieval is how previously learned information is brought back to mind. You need opportunities to practise both.",
			],
			visual: "memory",
			caption:
				"FIGURE 24.4 A modified three-stage information-processing model of memory Atkinson and Shiffrin’s classic three-stage model helps us to think about how memories are processed, but researchers now recognize other ways that long-term memories form. For example, some information slips into long-term memory via a “back door,” without our consciously attending to it (automatic processing). And so much active processing occurs in the short-term memory stage that we now call it working memory.",
		},
		{
			title: "Recognition versus recall",
			table: {
				label: "Recognition versus recall",
				columns: ["Recognition", "Recall"],
				rows: [
					["Identifying information when you see it.", "Producing information without being shown the answer."],
					["“Which definition describes operant conditioning?”", "“Explain operant conditioning in your own words.”"],
				],
			},
		},
		{
			title: "Ask yourself",
			paragraphs: [
				"Can I explain this with my notes closed, or does it only look familiar when I read it?",
			],
		},
	],
	takeaway: "Familiarity is a cue to check your understanding, not proof that you know the material.",
} satisfies SectionData;
