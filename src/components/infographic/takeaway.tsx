import { Target } from "lucide-react";
import type { TakeawayProps } from "@/types/component-props";

export function Takeaway({ children }: TakeawayProps) {
	return (
		<aside className="mt-4 flex gap-3 rounded-md bg-foreground px-4 py-3 text-white">
			<Target aria-hidden className="mt-0.5 size-5 shrink-0" />
			<p className="leading-6">
				<strong>Takeaway:</strong> {children}
			</p>
		</aside>
	);
}
