import type { StageId } from "@/types/content";

export const site = {
	name: "Introductory Psychology",
	title: "Studying and Exam Preparation",
	description:
		"A resource for students to understand how they learn and how to prepare for exams.",
} as const;

export const documentTitle = `${site.title} | ${site.name}`;

export const stageLabels: Record<StageId, string> = {
	one: "Understand the task",
	two: "Build your study approach",
	three: "Prepare to perform",
};
