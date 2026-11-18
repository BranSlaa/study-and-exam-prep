import { ArrowDown, ArrowLeft, ArrowUp, RotateCw } from "lucide-react";
import type { MemoryDiagramProps } from "@/types/component-props";

export function MemoryDiagram({ caption }: MemoryDiagramProps) {
	return (
		<figure className="memory-figure">
			<div
				aria-label="A modified three-stage information-processing model of memory"
				className="memory-model rounded-md bg-white"
				role="img"
			>
				<div className="memory-main">
					<strong className="memory-event">External event</strong>
					<div className="memory-connector">
						<span>Sensory input</span>
						<ArrowDown aria-hidden />
					</div>
					<div className="memory-box memory-sensory">
						Sensory memory
					</div>
					<div className="memory-connector">
						<span>Attention to important or novel information</span>
						<ArrowDown aria-hidden />
						<small>Encoding</small>
					</div>
					<div className="memory-box memory-working">
						<span className="memory-rehearsal">
							<RotateCw aria-hidden />
							Rehearsal and active maintenance
						</span>
						Working/
						<wbr />
						short-term memory
					</div>
					<div className="memory-retrieval">
						<span>
							Encoding <ArrowDown aria-hidden />
						</span>
						<span>
							<ArrowUp aria-hidden /> Retrieving
						</span>
					</div>
					<div className="memory-box memory-long-term">
						Long-term memory storage
					</div>
				</div>
				<div className="memory-automatic relative">
					<div className="memory-automatic-label">
						Automatic processing
					</div>
					<ArrowLeft
						aria-hidden
						className="absolute left-0 bottom-0 translate-x-2 -translate-y-4"
					/>
				</div>
			</div>
			{caption && (
				<figcaption className="mt-3 rounded-md bg-white/65 p-4 text-base leading-6 text-foreground">
					{caption}
				</figcaption>
			)}
		</figure>
	);
}
