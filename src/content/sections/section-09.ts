import { BriefcaseBusiness } from "lucide-react";
import type { SectionData } from "@/types/content";

export const section09 = {
	number: "09",
	stage: "three",
	title: "Prepare for exam day",
	introduction: "Remove avoidable problems before the exam begins.",
	icon: BriefcaseBusiness,
	layout: "cards",
	blocks: [
		{
			title: "The day before",
			items: [
				"Protect time for sleep.",
				"Confirm the date, start time, location, or online platform.",
				"Prepare identification and permitted materials.",
				"Check travel or technology arrangements.",
			],
		},
		{
			title: "In-person exams",
			items: [
				"Plan your route and allow time to arrive.",
				"Pack the pens, pencils, calculator, or other materials permitted for the exam.",
				"Check the instructions for identification and personal belongings.",
			],
		},
		{
			title: "Online exams",
			items: [
				"Check your login, internet connection, charger, and required software.",
				"Test the required browser and any exam software ahead of time.",
				"Complete required updates early enough to test everything afterward.",
				"Avoid major last-minute changes to a working setup.",
				"Know who to contact if a technical problem occurs.",
			],
		},
	],
	takeaway: "Check the logistics before you need them to work.",
} satisfies SectionData;
