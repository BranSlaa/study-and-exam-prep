import { BookOpen } from "lucide-react";
import textbookPage from "../../../public/images/Annotated operant conditioning textbook page-1.png";
import type { SectionData } from "@/types/content";

export const section04 = {
	number: "04",
	stage: "two",
	stageLabel: "BUILD YOUR STUDY APPROACH",
	title: "How to read the textbook",
	introduction: "Learn the textbook's structure as well as its content.",
	icon: BookOpen,
	layout: "sequence",
	blocks: [
		{
			title: "Start with the table of contents",
			kind: "example",
			paragraphs: [
				"Read the table of contents to see what the book covers, how the topics fit together, and where information is located. This gives you a map to return to when studying or finding material for papers.",
			],
		},
		{
			title: "My three-pass approach to the whole textbook",
			kind: "process",
			passes: [
				{
					title: "Pass 1 — Map the structure:",
					body: "Go through the whole textbook and preview the headings, major titles, and chapter organization. Notice the sequence of topics and how the book is arranged.",
				},
				{
					title: "Pass 2 — Explore the supporting material:",
					body: "Go through the whole textbook again, focusing on images, captions, definitions, tables, examples, summaries, and other supplementary content. Use these features to build an overview before the full reading.",
				},
				{
					title: "Pass 3 — Read cover to cover:",
					body: "Read the whole textbook, including the main text, from beginning to end. Work through it in manageable sections across the course. Pause to explain what you have read, then check anything you could not recall or explain.",
				},
			],
		},
		{
			title: "Example: read the whole page",
			kind: "example",
			image: {
				src: textbookPage,
				alt: "Annotated sample textbook page identifying a heading, definition, diagram, and figure caption about operant conditioning.",
				caption:
					"A sample page showing how headings, definitions, diagrams, and captions work together.",
			},
			icon: false,
		},
		{
			title: "SQ3R: Survey, Question, Read, Recite, Review",
			kind: "process",
			passes: [
				{
					title: "Survey",
					body: "Preview the chapter's headings, summaries, and diagrams.",
				},
				{
					title: "Question",
					body: "Turn headings into questions you want the reading to answer.",
				},
				{
					title: "Read",
					body: "Read a section with those questions in mind.",
				},
				{
					title: "Recite",
					body: "Close the book and explain the answers in your own words.",
				},
				{
					title: "Review",
					body: "Check your explanation, correct gaps, and return to the material later.",
				},
			],
		},
		{
			title: "Learn the material. Learn the book.",
			kind: "reminder",
			paragraphs: [
				"Knowing how the textbook is organized can help you locate explanations, examples, and sources later. This is a course-long approach, not a task to leave until the night before the exam.",
			],
		},
	],
	takeaway: "Map it, explore it, then read it fully.",
} satisfies SectionData;
