import { CircleDot, ExternalLink } from "lucide-react";
import type { BlockProps } from "@/types/component-props";
import { isWideBlock } from "@/utils/is-wide-block";
import { CurveChart } from "./curve-chart";
import { DataTable } from "./data-table";
import { MemoryDiagram } from "./memory-diagram";

export function ContentBlock({ block, fullWidth }: BlockProps) {
	const List = block.ordered ? "ol" : "ul";
	const isWide = fullWidth || isWideBlock(block);

	return (
		<section
			className={`rounded-lg border border-current/15 p-4 text-lg ${
				block.featured ? "bg-white/75" : "bg-white/45"
			} ${isWide ? "lg:col-span-2" : ""}`}
		>
			<div className="flex gap-3">
				<span
					aria-hidden
					className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-white"
				>
					<CircleDot className="size-4" />
				</span>
				<div className="min-w-0 flex-1">
					<h3 className="font-serif text-xl font-bold text-foreground">
						{block.title}
					</h3>
					{block.paragraphs?.map((paragraph) => (
						<p
							className="mt-2 leading-7 text-foreground"
							key={paragraph}
						>
							{paragraph}
						</p>
					))}
					{block.items && (
						<List
							className={`mt-3 space-y-2 pl-5 text-foreground ${
								block.ordered ? "list-decimal" : "list-disc"
							}`}
						>
							{block.items.map((item) => (
								<li className="pl-1 leading-7" key={item}>
									{item}
								</li>
							))}
						</List>
					)}
					{block.passes?.map((pass, passIndex) => (
						<div className="mt-4 flex gap-3" key={pass.title}>
							<strong className="flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground text-white">
								{passIndex + 1}
							</strong>
							<p className="leading-7 text-foreground">
								<strong>{pass.title}</strong> {pass.body}
							</p>
						</div>
					))}
					{block.links?.map((link) => (
						<p className="mt-3 text-foreground" key={link.href}>
							<a
								className="inline-flex items-center gap-1 font-semibold underline decoration-2 underline-offset-4"
								href={link.href}
							>
								{link.label}
								<ExternalLink aria-hidden className="size-4" />
							</a>{" "}
							— {link.description}
						</p>
					))}
					{block.quote && (
						<blockquote className="mt-3 border-l-4 border-current pl-4 leading-7 text-foreground">
							{block.quote}
						</blockquote>
					)}
					{block.visual === "curve" && <CurveChart />}
					{block.visual === "memory" && (
						<MemoryDiagram caption={block.caption} />
					)}
					{block.table && (
						<div className="mt-4">
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
			</div>
		</section>
	);
}
