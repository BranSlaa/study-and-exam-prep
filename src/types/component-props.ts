import type {
	ContentBlock,
	ContentTable,
	ClosingData,
	SectionData,
	StageId,
} from "./content";

export type SectionProps = {
	data: SectionData;
};

export type BlockProps = {
	block: ContentBlock;
	fullWidth?: boolean;
};

export type TableProps = {
	table: ContentTable;
};

export type StageProps = {
	id: StageId;
	children: React.ReactNode;
};

export type TakeawayProps = {
	children: React.ReactNode;
};

export type ClosingProps = {
	data: ClosingData;
};

export type MemoryDiagramProps = {
	caption?: string;
};
