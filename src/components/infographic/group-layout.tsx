import { Check } from "lucide-react";
import type { ContentGroup } from "@/types/content";

type GroupLayoutProps = {
	groups: readonly ContentGroup[];
	layout?: "compare" | "branch" | "tools";
};

export function GroupLayout({ groups, layout = "compare" }: GroupLayoutProps) {
	return (
		<ul className={`group-layout group-layout-${layout}`}>
			{groups.map((group, index) => (
				<li className="group-item" key={group.title}>
					{layout === "tools" && (
						<span aria-hidden className="group-number">
							{index + 1}
						</span>
					)}
					<h4 className="font-serif text-lg font-bold text-foreground">
						{group.title}
					</h4>
					{group.body && (
						<p className="mt-2 text-base leading-6 text-foreground">
							{group.body}
						</p>
					)}
					{group.items && (
						<ul className="mt-3 space-y-2">
							{group.items.map((item) => (
								<li className="flex gap-2 text-base leading-6" key={item}>
									<Check
										aria-hidden
										className="mt-1 size-4 shrink-0"
										strokeWidth={3}
									/>
									{item}
								</li>
							))}
						</ul>
					)}
				</li>
			))}
		</ul>
	);
}
