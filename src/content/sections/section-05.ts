import { Lightbulb } from "lucide-react";
import brainDump from "../../../public/images/Brain dump, check, correct_ experimental variables-4.png";
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
			title: "Five ways to study actively",
			kind: "process",
			stepStyle: "techniques",
			passes: [
				{
					title: "Recall — Active recall and blurting",
					body: "Close your notes and answer a question, define a term, or write what you remember. Check afterward and use the gaps to guide your next step. Try blurting: choose a focused topic and write everything you can remember on a blank page without looking at your notes. Compare it with the course material, mark missing or incorrect points, and try recalling those points again later.",
				},
				{
					title: "Explain it — Feynman Technique",
					body: "Explain the concept to yourself or another person using your own words. Ask your study partner to question your explanation: “Why?” “How?” “Can you give an example?” Check uncertain answers against the course material. For the Feynman Technique, pick a concept you are learning and write an explanation as if teaching it to a 12-year-old, using necessary jargon only. Wherever you get stuck or use complicated words, you have found a gap in your understanding; return to the material and relearn that part.",
				},
				{
					title: "Ask why and how — Elaborative interrogation",
					body: "Ask why a fact is true or how a process works. Connect your answer to something you already know, then check that the explanation is accurate. Aim for a meaningful explanation rather than an answer that merely sounds plausible.",
				},
				{
					title: "Generate — Your own examples",
					body: "Create an example instead of relying only on the textbook's. Explain why it fits the definition, then check that your interpretation is accurate.",
				},
				{
					title: "Compare — Distinguish similar ideas",
					body: "Place easily confused concepts beside each other and identify the feature that separates them. Ask: “Why is this an example of X rather than Y?”",
				},
			],
			icon: false,
		},
		{
			title: "Example: brain dump, check, correct",
			kind: "example",
			image: {
				src: brainDump,
				alt: "A brain dump about experimental variables showing initial mistakes, corrected definitions, and an added example.",
				caption:
					"Attempt the idea from memory, check it, correct mistakes, and add what was missing.",
			},
			icon: false,
			isFull: true,
		},
		{
			title: "Example: reinforcement and punishment",
			kind: "reference",
			table: {
				label: "Example: reinforcement and punishment",
				columns: ["Concept", "Defining feature", "Example"],
				rows: [
					[
						"Positive reinforcement",
						"Something is added, increasing a behaviour.",
						"Praise follows class participation, and participation becomes more frequent.",
					],
					[
						"Negative reinforcement",
						"Something is removed, increasing a behaviour.",
						"Buckling a seatbelt stops the warning beep, making future buckling more likely.",
					],
					[
						"Punishment",
						"A consequence decreases a behaviour.",
						"A speeding fine leads someone to speed less often.",
					],
				],
			},
			note: "Positive and negative mean adding and removing—not good and bad. Reinforcement increases behaviour; punishment decreases it.",
			isFull: true,
		},
		{
			title: "Example: dependent and independent variables",
			kind: "reference",
			table: {
				label: "Example: dependent and independent variables",
				columns: ["Concept", "Defining feature", "Example"],
				rows: [
					[
						"Dependent variable",
						"The variable that is affected by the independent variable.",
						"The amount of time it takes to complete a task.",
					],
					[
						"Independent variable",
						"The variable that is manipulated in the experiment.",
						"The type of task being completed.",
					],
					[
						"Control variable",
						"The variable that is kept constant in the experiment.",
						"The time of day the experiment is conducted.",
					],
				],
			},
			note: "The control variable is kept constant to ensure that the independent variable is the only variable that is affecting the dependent variable. The independent variable is the variable that is manipulated in the experiment. The dependent variable is the variable that is measured. Additionally there exist extraneous variables that are not controlled and can affect the outcome of the experiment. Continous variables can take on any value within a range, while discrete variables can only take on specific values.",
			isFull: true,
		},
	],
	takeaway:
		"Define it, create an example, and explain what makes it different.",
} satisfies SectionData;
