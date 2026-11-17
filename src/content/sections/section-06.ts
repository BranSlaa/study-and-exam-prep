import { Wrench } from "lucide-react";
import type { SectionData } from "@/types/content";

export const section06 = {
	number: "06",
	stage: "two",
	title: "Study aids and AI",
	introduction: "Choose tools that help you practise, check, and improve your understanding.",
	icon: Wrench,
	layout: "mixed",
	blocks: [
		{
			title: "Write terms and definitions",
			paragraphs: [
				"Write a definition in your own words, add an example, and check both against the course material. Choose handwriting or typing based on what helps you process and review your notes. Avoid simply copying without thinking.",
			],
		},
		{
			title: "Use flashcards thoughtfully",
			paragraphs: [
				"Attempt the answer before turning the card over. Include examples and comparisons as well as definitions. Revisit cards you find difficult and check unfamiliar sets for errors.",
			],
		},
		{
			title: "Practise questions",
			paragraphs: [
				"Use questions that ask you to recall, explain, compare, and apply ideas. After checking an answer, explain the reasoning rather than only recording whether you were right.",
			],
		},
		{
			title: "Study with other people",
			paragraphs: [
				"Take turns explaining, asking questions, and checking answers. Give the session a specific goal so it does not become a shared rereading session.",
			],
		},
		{
			title: "Tools to explore",
			links: [
				{ label: "Quizlet", href: "https://quizlet.com/", description: "Create or review flashcards. Check existing sets against your course materials." },
				{ label: "NotebookLM", href: "https://notebooklm.google.com/", description: "Work with supplied study sources and check responses against the original material." },
				{ label: "ChatGPT", href: "https://chatgpt.com/", description: "Ask for one practice question at a time, then request feedback on your answer." },
				{ label: "Google Gemini", href: "https://gemini.google.com/", description: "Ask for practice questions that require examples, comparisons, and application." },
			],
		},
		{
			title: "Give AI a specific task",
			quote: "“Using these course notes, ask me one question at a time. Mix definitions, application questions, and comparisons between easily confused concepts. Wait for my answer before giving feedback. Explain the answer using the notes. If the notes do not establish the answer, say so rather than guessing.”",
		},
		{
			title: "Check the output",
			paragraphs: [
				"AI can produce incorrect explanations, misleading questions, and confident mistakes. Do not assume its feedback is correct. Verify answers against course materials, ask for application questions rather than definitions alone, and follow your course’s AI rules.",
			],
		},
	],
	takeaway: "Use the tool to practise your thinking, not to replace it.",
} satisfies SectionData;
