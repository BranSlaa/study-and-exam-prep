import { HeartPulse } from "lucide-react";
import type { SectionData } from "@/types/content";

export const section08 = {
	number: "08",
	stage: "three",
	stageLabel: "PREPARE TO PERFORM",
	title: "Manage exam stress",
	introduction: "Have a plan for what to do when stress shows up.",
	icon: HeartPulse,
	layout: "mixed",
	blocks: [
		{
			title: "Reframe the thought",
			kind: "example",
			groups: [
				{
					title: "Catastrophic prediction",
					body: "“I can't answer this question. I'm going to fail. I'll never finish my degree.”",
				},
				{
					title: "Realistic response",
					body: "“I'm stuck on one question. I can try another and come back if the exam allows.”",
				},
			],
			icon: false,
		},
		{
			title: "Practise a reset routine",
			kind: "process",
			passes: [
				{
					title: "Ground",
					body: "Pause and put your feet on the floor.",
				},
				{
					title: "Breathe",
					body: "Relax your shoulders and take a few slow, comfortable breaths.",
				},
				{
					title: "Choose",
					body: "Reread the instructions, identify a key word, or move to another question if permitted.",
				},
			],
			afterword: [
				"Practise this during study sessions so the routine is familiar. You do not need to feel completely calm before taking the next step.",
			],
		},
		{
			title: "Focus on controllable actions",
			kind: "reference",
			table: {
				label: "Focus on controllable actions",
				columns: ["Worry", "Controllable action"],
				rows: [
					[
						"“What if the exam is really hard?”",
						"Practise applying concepts to unfamiliar questions.",
					],
					[
						"“Everyone else seems more prepared.”",
						"Identify one gap in your own understanding and work on it.",
					],
					[
						"“I need a particular grade.”",
						"Follow your study plan and use feedback to adjust it.",
					],
					[
						"“I'm running out of time.”",
						"Check the remaining questions and allocate time by marks.",
					],
				],
			},
		},
		{
			title: "Seek support when needed",
			kind: "checklist",
			items: [
				"Ask the instructor or TA when material or exam expectations are unclear.",
				"Contact academic support for help with planning and study strategies.",
				"Contact campus counselling if anxiety repeatedly interferes with studying or completing exams.",
				"Contact accessibility services to discuss disability-related barriers, including those associated with ADHD, autism, or learning disabilities. Supports are individualized and may include additional time or other arrangements. Ask early about the process and deadlines.",
			],
			isFull: true,
		},
	],
	takeaway:
		"You don't have to eliminate exam stress. Have a plan for what to do when it shows up.",
} satisfies SectionData;
