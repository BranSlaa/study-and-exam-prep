import type { ContentBlock } from "@/types/content";

export function isWideBlock(block: ContentBlock) {
	return Boolean(
		block.table ||
			block.visual ||
			block.passes ||
			block.links ||
			block.quote ||
			block.groups ||
			block.taskExamples ||
			block.image ||
			block.kind === "checklist",
	);
}

export function getUnpairedBlockIndexes(blocks: readonly ContentBlock[]) {
	const indexes = new Set<number>();
	let runLength = 0;

	blocks.forEach((block, index) => {
		if (isWideBlock(block)) {
			runLength = 0;
			return;
		}

		runLength += 1;
		const nextBlock = blocks[index + 1];
		if ((!nextBlock || isWideBlock(nextBlock)) && runLength % 2 === 1) {
			indexes.add(index);
		}
	});

	return indexes;
}
