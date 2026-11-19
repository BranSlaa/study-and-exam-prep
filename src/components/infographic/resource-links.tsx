import { ExternalLink } from "lucide-react";
import Image from "next/image";
import type { ResourceLink } from "@/types/content";

type ResourceLinksProps = {
	links: readonly ResourceLink[];
};

export function ResourceLinks({ links }: ResourceLinksProps) {
	return (
		<ul className="mt-4 grid gap-3 sm:grid-cols-2">
			{links.map((link) => (
				<li
					className="rounded-lg border border-current/15 bg-white/55 p-4"
					key={link.href}
				>
					<a
						className="inline-flex items-center gap-1 font-semibold underline decoration-2 underline-offset-4"
						href={link.href}
						rel="noopener noreferrer"
						target="_blank"
					>
						{link.label}
						<ExternalLink aria-hidden className="size-4" />
					</a>
					<p className="mt-1 text-base leading-6">{link.description}</p>
					{link.image && (
						<figure className="mt-4">
							<Image
								alt={link.image.alt}
								className="h-auto w-full rounded-md border border-foreground/15"
								placeholder="blur"
								sizes="(max-width: 639px) 100vw, 33vw"
								src={link.image.src}
							/>
							{link.image.caption && (
								<figcaption className="mt-2 text-sm leading-5 text-foreground/70">
									{link.image.caption}
								</figcaption>
							)}
						</figure>
					)}
				</li>
			))}
		</ul>
	);
}
