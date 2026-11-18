import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/utils/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: getSiteUrl(),
			changeFrequency: "monthly",
			priority: 1,
		},
	];
}
