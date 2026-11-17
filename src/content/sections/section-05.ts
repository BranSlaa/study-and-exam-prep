import { Lightbulb } from "lucide-react";
import type { SectionData } from "@/types/content";

export const section05 = {
	number: "05",
	stage: "two",
	title: "Study actively",
	introduction: "Do something with the information you are trying to learn.",
	icon: Lightbulb,
	layout: "cards",
	blocks: [
		{
			title: "Test yourself",
			paragraphs: [
				"Close your notes and answer a question, define a term, or write what you remember. Check afterward and use the gaps to guide your next step.",
			],
		},
		{
			title: "Explain the concept",
			paragraphs: [
				"Explain it to yourself or another person using your own words. Ask your study partner to question your explanation: “Why?” “How?” “Can you give an example?” Check uncertain answers against the course material.",
			],
		},
		{
			title: "Generate your own examples",
			paragraphs: [
				"Create an example instead of relying only on the textbook’s. Explain why it fits the definition, then check that your interpretation is accurate.",
			],
		},
		{
			title: "Distinguish similar ideas",
			paragraphs: [
				"Place easily confused concepts beside each other and identify the feature that separates them. Ask: “Why is this an example of X rather than Y?”",
			],
		},
		{
			title: "Example: reinforcement and punishment",
			table: {
				label: "Example: reinforcement and punishment",
				columns: ["Concept", "Defining feature", "Example"],
				rows: [
					["Positive reinforcement", "Something is added, increasing a behaviour.", "Praise follows class participation, and participation becomes more frequent."],
					["Negative reinforcement", "Something is removed, increasing a behaviour.", "Buckling a seatbelt stops the warning beep, making future buckling more likely."],
					["Punishment", "A consequence decreases a behaviour.", "A speeding fine leads someone to speed less often."],
				],
			},
			note: "Positive and negative mean adding and removing—not good and bad. Reinforcement increases behaviour; punishment decreases it.",
		},
		{
			title: "Another useful comparison",
			paragraphs: [
				"In an experiment, the independent variable is manipulated; the dependent variable is measured. Practise identifying both in a new research scenario.",
			],
		},
	],
	takeaway: "Define it, create an example, and explain what makes it different.",
} satisfies SectionData;
