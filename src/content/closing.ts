import type { ClosingData } from "@/types/content";

export const closing = {
	title: "Your next study session",
	body: "Choose one topic. Recall what you know. Check your understanding. Plan when to return.",
	sourcesTitle: "Sources and further reading",
	sources: [
		{
			label: "Dunlosky and colleagues: Improving Students' Learning With Effective Learning Techniques",
			href: "https://doi.org/10.1177/1529100612453266",
			description: "",
		},
		{
			label: "Association for Psychological Science: Handwritten and typed notes",
			href: "https://www.psychologicalscience.org/observer/writing-notes",
			description: "",
		},
		{
			label: "University of Waterloo: A five-step process for writing exams",
			href: "https://uwaterloo.ca/students/blog/use-five-step-process-writing-exams",
			description: "",
		},
	],
	note: "Use your course materials and instructor's guidance as the reference for what your exam covers.",
} satisfies ClosingData;
