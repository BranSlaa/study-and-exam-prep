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
			kind: "checklist",
			items: [
				"Protect time for sleep.",
				"Confirm the date, start time, location, or online platform. If needed, you can have a trusted friend or family member check your preparations aswell.",
				"Prepare identification and permitted materials.",
				"Check travel or technology arrangements.",
			],
			isFull: true,
		},
		{
			title: "Prepare for your exam format",
			kind: "example",
			groupLayout: "branch",
			groups: [
				{
					title: "In person",
					items: [
						"Plan your route and allow time to arrive.",
						"Pack permitted pens, pencils, calculators, or other materials.",
						"Check instructions for identification and personal belongings.",
					],
				},
				{
					title: "Online",
					items: [
						"Check your login, internet, charger, and required software.",
						"Test the required browser and exam software ahead of time.",
						"Complete updates early enough to test afterward.",
						"Avoid last-minute changes to a working setup.",
						"Know who to contact if a technical problem occurs.",
					],
				},
			],
			isFull: true,
			icon: false,
		},
	],
	takeaway: "Check the logistics before you need them to work.",
} satisfies SectionData;
