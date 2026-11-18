import Image from "next/image";
import type { ContentImage as ContentImageData } from "@/types/content";

type ContentImageProps = {
	image: ContentImageData;
};

export function ContentImage({ image }: ContentImageProps) {
	return (
		<figure className="mx-auto mt-4 max-w-3xl">
			<Image
				alt={image.alt}
				className="h-auto w-full rounded-lg border border-foreground/15"
				placeholder="blur"
				sizes="(max-width: 799px) 100vw, 65vw"
				src={image.src}
			/>
			{image.caption && (
				<figcaption className="mt-2 text-center text-sm leading-5 text-foreground/75">
					{image.caption}
				</figcaption>
			)}
		</figure>
	);
}
