import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

export type StageId = "one" | "two" | "three";

export type ContentTable = {
	label: string;
	columns: readonly string[];
	rows: readonly (readonly string[])[];
	dontBold?: boolean;
};

export type PassItem = {
	title: string;
	body: string;
};

export type ResourceLink = {
	label: string;
	href: string;
	description: string;
	image?: ContentImage;
};

export type TaskExample = {
	label: string;
	prompt: string;
};

export type ContentGroup = {
	title: string;
	body?: string;
	items?: readonly string[];
};

export type ContentImage = {
	src: StaticImageData;
	alt: string;
	caption?: string;
};

export type ContentBlock = {
	title: string;
	paragraphs?: readonly string[];
	afterword?: readonly string[];
	items?: readonly string[];
	ordered?: boolean;
	table?: ContentTable;
	passes?: readonly PassItem[];
	stepStyle?: "ordered" | "techniques";
	links?: readonly ResourceLink[];
	quote?: string;
	visual?: "curve" | "memory" | "time-budget";
	caption?: string;
	note?: string;
	featured?: boolean;
	isFull?: boolean;
	kind?:
		| "example"
		| "checklist"
		| "reference"
		| "reminder"
		| "process"
		| "prompt";
	taskExamples?: readonly TaskExample[];
	groups?: readonly ContentGroup[];
	groupLayout?: "compare" | "branch" | "tools";
	image?: ContentImage;
	centerTitle?: boolean;
	icon?: boolean;
};

export type SectionData = {
	number: string;
	stage: StageId;
	stageLabel?: string;
	title: string;
	introduction?: string;
	opening?: string;
	icon?: LucideIcon;
	layout?: "cards" | "sequence" | "mixed";
	blocks: readonly ContentBlock[];
	takeaway: string;
};

export type TimelineItem = Pick<SectionData, "number" | "stage" | "title">;

export type ClosingData = {
	title: string;
	sourcesTitle: string;
	sources: readonly ResourceLink[];
	note: string;
};
