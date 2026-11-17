import type { StageId } from "@/types/content";

export const stageClasses: Record<StageId, string> = {
	one: "bg-stage-1 text-stage-1-accent",
	two: "bg-stage-2 text-stage-2-accent",
	three: "bg-stage-3 text-stage-3-accent",
};

export const panelClasses: Record<StageId, string> = {
	one: "border-stage-1-accent/20 bg-stage-1-panel",
	two: "border-stage-2-accent/20 bg-stage-2-panel",
	three: "border-stage-3-accent/20 bg-stage-3-panel",
};

export const accentClasses: Record<StageId, string> = {
	one: "bg-stage-1-accent",
	two: "bg-stage-2-accent",
	three: "bg-stage-3-accent",
};
