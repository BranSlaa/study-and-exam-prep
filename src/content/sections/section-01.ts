import type { SectionData } from "@/types/content";

export const section01 = {
	number: "01",
	stage: "one",
	stageLabel: "UNDERSTAND THE TASK",
	title: "Know your exam",
	opening:
		"Knowing a definition, explaining it, and applying it to a new situation are different tasks. Your preparation should include the kind of thinking the exam will ask you to do.",
	layout: "mixed",
	blocks: [
		{
			title: "One concept. Three different tasks.",
			kind: "example",
			taskExamples: [
				{
					label: "Identify",
					prompt: "Which option defines negative reinforcement?",
				},
				{
					label: "Explain",
					prompt: "How does negative reinforcement differ from punishment?",
				},
				{
					label: "Apply",
					prompt: "A driver buckles their seatbelt to stop the warning beep. If this increases future buckling, which process is illustrated?",
				},
			],
			isFull: true,
			centerTitle: true,
			icon: false,
		},
		{
			title: "What is covered?",
			kind: "checklist",
			items: [
				"Chapters and units",
				"Lectures and assigned readings",
				"Learning objectives",
				"Cumulative or recent material",
				"Topics you need clarified",
			],
			isFull: true,
		},
		{
			title: "Question formats and preparation",
			kind: "reference",
			table: {
				label: "Question formats and preparation",
				columns: ["Format", "How to prepare"],
				rows: [
					[
						"Multiple choice",
						"Choose the best answer, then explain why the other options are incorrect.",
					],
					[
						"True or false",
						"Judge the entire statement. Practise correcting false statements.",
					],
					[
						"Short and long answer",
						"Explain concepts without notes and support your answers with examples.",
					],
					[
						"Essay questions",
						"Practise outlining an argument, comparing ideas, and selecting supporting evidence.",
					],
					[
						"Matching",
						"Practise connecting terms with definitions, examples, or related concepts.",
					],
					[
						"Fill in the blank",
						"Practise producing the missing term without answer choices.",
					],
				],
			},
			isFull: true,
		},
		{
			title: "Check the expectations",
			kind: "reminder",
			paragraphs: [
				"Question formats vary by course and instructor. Multiple-choice questions can test application as well as definitions. Confirm the format, time limit, permitted materials, and any restrictions on returning to earlier questions.",
			],
			isFull: true,
		},
	],
	takeaway: "Know what is covered and what you will need to do with it.",
} satisfies SectionData;
