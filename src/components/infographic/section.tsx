import type { SectionProps } from "@/types/component-props";
import { getUnpairedBlockIndexes, isWideBlock } from "@/utils/is-wide-block";
import { accentClasses } from "@/utils/stage-classes";
import { ContentBlock } from "./content-block";
import { Takeaway } from "./takeaway";

export function InfographicSection({ data }: SectionProps) {
	const Icon = data.icon;
	const unpairedBlockIndexes =
		data.layout === "sequence"
			? new Set<number>()
			: getUnpairedBlockIndexes(data.blocks);

	return (
		<article
			className="infographic-section scroll-mt-20 px-4 py-4"
			id={`section-${data.number}`}
		>
			<header className="section-intro">
				{data.stageLabel && (
					<p className="section-kicker mb-6 text-sm font-bold tracking-widest uppercase">
						{data.stageLabel}
					</p>
				)}
				{Icon && <Icon aria-hidden className="mb-4 size-12 stroke-1" />}
				<h2 className="max-w-sm font-serif text-3xl leading-tight font-bold text-foreground lg:text-4xl">
					{data.title}
				</h2>
				{data.introduction && (
					<p className="mt-4 max-w-sm text-lg leading-7 text-foreground">
						{data.introduction}
					</p>
				)}
			</header>

			<div className="section-path" aria-hidden>
				<span className={`section-marker ${accentClasses[data.stage]}`}>
					{data.number}
				</span>
			</div>

			<div className="section-content">
				{data.opening && (
					<p className="mb-7 max-w-3xl text-xl leading-8 text-foreground mx-auto">
						{data.opening}
					</p>
				)}
				<div
					className={
						data.layout !== "sequence"
							? "grid gap-4 lg:grid-cols-2"
							: "grid gap-4"
					}
				>
					{data.blocks.map((block, index) => (
						<ContentBlock
							block={block}
							fullWidth={
								data.layout !== "sequence" &&
								(isWideBlock(block) ||
									unpairedBlockIndexes.has(index))
							}
							key={block.title}
						/>
					))}
				</div>
				<Takeaway>{data.takeaway}</Takeaway>
			</div>
		</article>
	);
}
