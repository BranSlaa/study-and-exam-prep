import { FileText } from "lucide-react";
import type { SectionData } from "@/types/content";

export const section01 = {
	number: "01",
	stage: "one",
	stageLabel: "UNDERSTAND THE TASK",
	title: "Know your exam",
	introduction: "Prepare for what you will actually be asked to do.",
	icon: FileText,
	layout: "mixed",
	blocks: [
		{
			title: "What is covered?",
			paragraphs: [
				"Check which chapters, lectures, units, and readings are included. Find out whether the exam covers the whole course or only material since the previous test. Use the learning objectives to identify what you should be able to explain or apply.",
			],
		},
		{
			title: "What kinds of questions will you face?",
			table: {
				label: "What kinds of questions will you face?",
				columns: ["Format", "How to prepare"],
				rows: [
					["Multiple choice", "Choose the best answer, then explain why the other options are incorrect."],
					["True or false", "Judge the entire statement. Practise correcting false statements."],
					["Short and long answer", "Explain concepts without notes and support your answers with examples."],
					["Essay questions", "Practise outlining an argument, comparing ideas, and selecting supporting evidence."],
					["Matching", "Practise connecting terms with definitions, examples, or related concepts."],
					["Fill in the blank", "Practise producing the missing term without answer choices."],
				],
			},
		},
		{
			title: "Check the expectations",
			paragraphs: [
				"Question formats vary by course and instructor. Multiple-choice questions can test application as well as definitions. Confirm the format, time limit, permitted materials, and any restrictions on returning to earlier questions.",
			],
		},
	],
	takeaway: "Know what is covered and what you will need to do with it.",
} satisfies SectionData;
