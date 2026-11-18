import type { StageProps } from "@/types/component-props";
import { stageClasses } from "@/utils/stage-classes";

export function Stage({ id, label, children }: StageProps) {
	return (
		<section aria-label={label} className={stageClasses[id]}>
			{children}
		</section>
	);
}
