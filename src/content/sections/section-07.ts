import { CalendarDays } from "lucide-react";
import type { SectionData } from "@/types/content";

export const section07 = {
	number: "07",
	stage: "two",
	title: "Build a realistic study plan",
	introduction: "Turn “study psychology” into specific tasks you can complete.",
	icon: CalendarDays,
	layout: "mixed",
	blocks: [
		{
			title: "Work backward from the exam",
			paragraphs: [
				"List the topics you need to cover and the time available. Spread the work across several days or weeks, with room to return to earlier material.",
			],
		},
		{
			title: "Prioritize weaknesses",
			paragraphs: [
				"Use practice questions to identify what you can explain and what still needs work. Spend more time on gaps while continuing to revisit stronger topics.",
			],
		},
		{
			title: "Set manageable tasks",
			paragraphs: [
				"Replace “study chapter five” with a task such as “explain reinforcement and punishment, then answer five practice questions.” Choose study blocks you can realistically complete and include breaks.",
			],
		},
		{
			title: "Schedule a return",
			paragraphs: [
				"Plan when you will revisit each topic. Begin return sessions with retrieval, then check your answers and review your errors.",
			],
			table: {
				label: "Schedule a return",
				columns: ["Vague plan", "Specific plan"],
				rows: [
					["Study memory.", "Explain encoding and retrieval without notes, then check the explanation."],
					["Review research methods.", "Identify the independent and dependent variables in five scenarios."],
					["Go over mistakes.", "Correct three missed questions and explain why the original answers were wrong."],
				],
			},
		},
	],
	takeaway: "Schedule an action you can finish and check.",
} satisfies SectionData;
