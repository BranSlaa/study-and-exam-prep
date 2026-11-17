import type { StageProps } from "@/types/component-props";
import { stageClasses } from "@/utils/stage-classes";

export function Stage({ id, children }: StageProps) {
	return <div className={stageClasses[id]}>{children}</div>;
}
