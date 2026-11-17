import type { LucideIcon } from "lucide-react";

export type StageId = "one" | "two" | "three";

export type ContentTable = {
	label: string;
	columns: readonly string[];
	rows: readonly (readonly string[])[];
};

export type PassItem = {
	title: string;
	body: string;
};

export type ResourceLink = {
	label: string;
	href: string;
	description: string;
};

export type ContentBlock = {
	title: string;
	paragraphs?: readonly string[];
	afterword?: readonly string[];
	items?: readonly string[];
	ordered?: boolean;
	table?: ContentTable;
	passes?: readonly PassItem[];
	links?: readonly ResourceLink[];
	quote?: string;
	visual?: "curve" | "memory";
	caption?: string;
	note?: string;
	featured?: boolean;
};

export type SectionData = {
	number: string;
	stage: StageId;
	stageLabel?: string;
	title: string;
	introduction: string;
	icon: LucideIcon;
	layout?: "cards" | "sequence" | "mixed";
	blocks: readonly ContentBlock[];
	takeaway: string;
};

export type TimelineItem = Pick<
	SectionData,
	"number" | "stage" | "title"
>;

export type ClosingData = {
	title: string;
	sourcesTitle: string;
	sources: readonly ResourceLink[];
	note: string;
};
