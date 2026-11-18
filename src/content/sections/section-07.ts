import { CalendarDays } from "lucide-react";
import type { SectionData } from "@/types/content";

export const section07 = {
	number: "07",
	stage: "two",
	title: "Build a realistic study plan",
	introduction:
		"Turn “study psychology” into specific tasks you can complete.",
	icon: CalendarDays,
	layout: "mixed",
	blocks: [
		{
			title: "Plan backward, then move forward",
			kind: "process",
			passes: [
				{
					title: "Map the time",
					body: "List the topics and time available, then spread the work across several days or weeks.",
				},
				{
					title: "Prioritize gaps",
					body: "Use practice questions to find weak areas while continuing to revisit stronger topics.",
				},
				{
					title: "Set manageable tasks",
					body: "Replace “study chapter five” with a specific action you can complete and include breaks.",
				},
				{
					title: "Schedule a return",
					body: "Begin return sessions with retrieval, then check answers and review errors.",
				},
			],
			icon: false,
		},
		{
			title: "Turn vague plans into specific actions",
			kind: "reference",
			table: {
				label: "Turn vague plans into specific actions",
				columns: ["Vague plan", "Specific plan"],
				rows: [
					[
						"Study memory.",
						"Explain encoding and retrieval without notes, then check the explanation.",
					],
					[
						"Review research methods.",
						"Identify the independent and dependent variables in five scenarios.",
					],
					[
						"Go over mistakes.",
						"Correct three missed questions and explain why the original answers were wrong.",
					],
				],
			},
		},
		{
			title: "Interleave related practice",
			kind: "example",
			paragraphs: [
				"Once you understand the basics, mix related concepts so you must decide which idea applies.",
			],
			groupLayout: "branch",
			groups: [
				{ title: "Classical conditioning" },
				{ title: "Positive reinforcement" },
				{ title: "Negative reinforcement" },
				{ title: "Punishment" },
			],
			note: "For each scenario, identify the concept and explain why the alternatives do not fit.",
			isFull: true,
			icon: false,
		},
	],
	takeaway: "Schedule an action you can finish and check.",
} satisfies SectionData;
