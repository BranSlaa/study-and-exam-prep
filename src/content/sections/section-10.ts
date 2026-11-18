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
			title: "A five-step exam strategy",
			kind: "process",
			passes: [
				{
					title: "Read the instructions",
					body: "Check required questions, marks, choices, restrictions, and whether you can return to earlier questions.",
				},
				{
					title: "Survey the exam",
					body: "Identify where you can begin confidently and which demanding or high-value questions need protected time.",
				},
				{
					title: "Allocate time by marks",
					body: "Give more time and detail to higher-value questions, and leave time to review.",
				},
				{
					title: "Handle difficult questions deliberately",
					body: "If you get stuck and the exam allows it, mark the question and return rather than letting it consume the exam.",
				},
				{
					title: "Review thoughtfully",
					body: "Check for missed questions, incomplete responses, misread wording, and answer-entry mistakes. Change an answer when you have a reason.",
				},
			],
			visual: "time-budget",
			icon: false,
		},
	],
	takeaway: "Match your time to the task, and do not let one question take over the exam.",
} satisfies SectionData;
