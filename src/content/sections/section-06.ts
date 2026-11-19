import { Wrench } from "lucide-react";
import mindMap from "../../../public/images/Learning mind map_ conditioning-3.png";
import applicationFlashcard from "../../../public/images/Psychology flashcards explain negative reinforcement-2.png";
import chatGPT from "../../../public/images/chatgpt study mode.png";
import googleGemini from "../../../public/images/google gemini quiz.png";
import type { SectionData } from "@/types/content";

export const section06 = {
	number: "06",
	stage: "two",
	title: "Study aids and AI",
	introduction:
		"Choose tools that help you practise, check, and improve your understanding.",
	icon: Wrench,
	layout: "mixed",
	blocks: [
		{
			title: "Build your study toolkit",
			kind: "example",
			groupLayout: "tools",
			groups: [
				{
					title: "Write",
					body: "Define terms in your own words, add an example, and check both against the course material.",
				},
				{
					title: "Create a Mind Map",
					body: "Build a mind map from memory, label the connections, then check your notes.",
				},
				{
					title: "Use flashcards",
					body: "Attempt the answer first; include examples and comparisons, not definitions alone.",
				},
				{
					title: "Practise questions",
					body: "Recall, explain, compare, and apply ideas, then explain your reasoning.",
				},
				{
					title: "Study together",
					body: "Take turns explaining, questioning, and checking answers around a specific goal.",
				},
			],
			icon: false,
		},
		{
			title: "Example: map the relationships",
			kind: "example",
			image: {
				src: mindMap,
				alt: "Mind map connecting learning with classical and operant conditioning, their defining features, and examples.",
				caption:
					"Label the relationships between ideas, then add examples that make the distinctions concrete.",
			},
			icon: false,
			isFull: true,
		},
		{
			title: "Example: make flashcards test application",
			kind: "example",
			image: {
				src: applicationFlashcard,
				alt: "Front and back of a flashcard asking students to identify negative reinforcement from a seatbelt warning example and explain their reasoning.",
				caption:
					"Answer before revealing the back, then explain why the concept applies.",
			},
			icon: false,
			isFull: true,
		},
		{
			title: "Tools to explore",
			kind: "reference",
			links: [
				{
					label: "Quizlet",
					href: "https://quizlet.com/",
					description:
						"Create or review flashcards. Check existing sets against your course materials.",
				},
				{
					label: "NotebookLM",
					href: "https://notebooklm.google.com/",
					description:
						"Give it up to 50 sources, from Google Docs, Youtube or URLs, and it acts as a knowledge base for a interactive chat as well as the ability to create study materials such as podcasts, videos, quizzes, and more.",
				},
				{
					label: "ChatGPT",
					href: "https://chatgpt.com/",
					description:
						"Has a study mode option that requires you to answer the question first before it will give you its response.",
					image: {
						src: chatGPT,
						alt: "ChatGPT with a study mode option that requires you to answer the question first before it will give you its response.",
						caption:
							"Answer the question first, then ask ChatGPT to explain the answer using the notes.",
					},
				},
				{
					label: "Google Gemini",
					href: "https://gemini.google.com/",
					description:
						"Ask it to create an interactive quiz and it can make a 10 question MCQ",
					image: {
						src: googleGemini,
						alt: "Google Gemini with a quiz creation option that allows you to create a 10 question MCQ.",
						caption:
							"Ask Google Gemini to create an interactive quiz and it can make a 10 question MCQ.",
					},
				},
			],
		},
		{
			title: "Give AI a specific task",
			kind: "prompt",
			quote: "“Using these course notes, ask me one question at a time. Mix definitions, application questions, and comparisons between easily confused concepts. Wait for my answer before giving feedback. Explain the answer using the notes. If the notes do not establish the answer, say so rather than guessing.”",
		},
		{
			title: "Check the output",
			kind: "reminder",
			paragraphs: [
				"AI can produce incorrect explanations, misleading questions, and confident mistakes. Do not assume its feedback is correct. Verify answers against course materials, ask for application questions rather than definitions alone, and follow your course’s AI rules.",
			],
		},
	],
	takeaway: "Use the tool to practise your thinking, not to replace it.",
} satisfies SectionData;
