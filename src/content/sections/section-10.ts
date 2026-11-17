import { Clock3 } from "lucide-react";
import type { SectionData } from "@/types/content";

export const section10 = {
	number: "10",
	stage: "three",
	title: "Handle the exam strategically",
	introduction: "Use your time deliberately and keep moving through the task.",
	icon: Clock3,
	layout: "sequence",
	blocks: [
		{
			title: "Read the instructions thoroughly",
			paragraphs: [
				"Check how many questions you must answer, how marks are distributed, and whether there are choices or restrictions. For online exams, check whether you can return to earlier questions.",
			],
		},
		{
			title: "Survey the exam when permitted",
			paragraphs: [
				"Look over the questions and identify where you can begin confidently. Notice demanding or high-value questions that need protected time.",
			],
		},
		{
			title: "Allocate time by marks",
			paragraphs: [
				"Use the marks to guide how much time and detail a question deserves. Do not spend most of your time on a question worth only a small part of the grade. Leave time to review where possible.",
			],
		},
		{
			title: "Handle difficult questions deliberately",
			paragraphs: [
				"Start with questions you can answer confidently, while reserving enough time for demanding sections. If you get stuck and the exam allows it, mark the question and return. Avoid letting one question consume the time needed for several others.",
			],
		},
		{
			title: "Review thoughtfully",
			paragraphs: [
				"Check for missed questions, incomplete responses, misread wording, and answer-entry mistakes. Change an answer when you identify a reason, such as a misread question or a better-supported explanation.",
			],
		},
	],
	takeaway: "Match your time to the task, and do not let one question take over the exam.",
} satisfies SectionData;
