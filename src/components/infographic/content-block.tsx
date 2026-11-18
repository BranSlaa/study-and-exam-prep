import type { BlockProps } from "@/types/component-props";
import { getBlockAppearance } from "@/utils/block-appearance";
import { BlockIcon } from "./block-icon";
import { BlockList } from "./block-list";
import { ContentImage } from "./content-image";
import { CurveChart } from "./curve-chart";
import { DataTable } from "./data-table";
import { GroupLayout } from "./group-layout";
import { MemoryDiagram } from "./memory-diagram";
import { ProcessRail } from "./process-rail";
import { ResourceLinks } from "./resource-links";
import { TaskExamples } from "./task-examples";
import { TimeBudget } from "./time-budget";

export function ContentBlock({ block, fullWidth }: BlockProps) {
	const appearance = getBlockAppearance(block);
	fullWidth = block.isFull ?? fullWidth;

	return (
		<section
			className={`${appearance} text-lg ${fullWidth ? "lg:col-span-2" : ""}`}
		>
			<header className="flex items-start gap-3">
				{block.icon !== false && <BlockIcon block={block} />}
				<h3
					className={`min-w-0 flex-1 font-serif text-xl font-bold text-foreground ${block.centerTitle ? "text-center" : ""}`}
				>
					{block.title}
				</h3>
			</header>
			<div
				className={`block-body min-w-0 ${block.icon === false ? "" : "block-body-indented"}`}
			>
					{block.paragraphs?.map((paragraph) => (
						<p
							className="mt-2 leading-7 text-foreground"
							key={paragraph}
						>
							{paragraph}
						</p>
					))}
					{block.taskExamples && (
						<TaskExamples examples={block.taskExamples} />
					)}
					{block.image && <ContentImage image={block.image} />}
					<BlockList
						items={block.items}
						kind={block.kind}
						ordered={block.ordered}
					/>
					{block.groups && (
						<GroupLayout
							groups={block.groups}
							layout={block.groupLayout}
						/>
					)}
					{block.passes && (
						<ProcessRail
							steps={block.passes}
							style={block.stepStyle}
						/>
					)}
					{block.links && <ResourceLinks links={block.links} />}
					{block.quote && (
						<blockquote className="mt-3 border-l-4 border-current pl-4 leading-7 text-foreground">
							{block.quote}
						</blockquote>
					)}
					{block.visual && (
						<div className="content-media mt-4">
							{block.visual === "curve" && <CurveChart />}
							{block.visual === "memory" && (
								<MemoryDiagram caption={block.caption} />
							)}
							{block.visual === "time-budget" && <TimeBudget />}
						</div>
					)}
					{block.table && (
						<div className="content-media mt-4">
							<DataTable table={block.table} />
						</div>
					)}
					{block.note && (
						<p className="mt-3 text-base leading-6 text-foreground/80">
							{block.note}
						</p>
					)}
					{block.afterword?.map((paragraph) => (
						<p
							className="mt-3 leading-7 text-foreground"
							key={paragraph}
						>
							{paragraph}
						</p>
					))}
			</div>
		</section>
	);
}
