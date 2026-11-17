import { ExternalLink } from "lucide-react";
import type { ClosingProps } from "@/types/component-props";

export function Closing({ data }: ClosingProps) {
	return (
		<footer className="bg-foreground px-5 py-14 text-white md:px-8 lg:py-20">
			<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
				<div>
					<h2 className="font-serif text-3xl font-bold">
						{data.title}
					</h2>
					<p className="mt-4 max-w-xl text-lg leading-8">
						{data.body}
					</p>
				</div>
				<div>
					<h3 className="font-serif text-2xl font-bold">
						{data.sourcesTitle}
					</h3>
					<ul className="mt-4 space-y-3">
						{data.sources.map((source) => (
							<li key={source.href}>
								<a
									className="inline-flex items-start gap-2 underline decoration-2 underline-offset-4"
									href={source.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<span>{source.label}</span>
									<ExternalLink
										aria-hidden
										className="mt-1 size-4 shrink-0"
									/>
								</a>
							</li>
						))}
					</ul>
					<p className="mt-6 max-w-xl leading-7 text-white/80">
						{data.note}
					</p>
				</div>
			</div>
		</footer>
	);
}
