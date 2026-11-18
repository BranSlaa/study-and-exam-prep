import { documentTitle, site } from "@/content/site";
import type { SiteJsonLdProps } from "@/types/component-props";
import { getSiteUrl } from "@/utils/site-url";

export function SiteJsonLd({ sections }: SiteJsonLdProps) {
	const url = getSiteUrl();
	const data = {
		"@context": "https://schema.org",
		"@type": "LearningResource",
		name: site.title,
		headline: documentTitle,
		description: site.description,
		inLanguage: "en-CA",
		url,
		isAccessibleForFree: true,
		learningResourceType: "Study guide",
		educationalLevel: "Introductory post-secondary",
		about: "Introductory psychology studying and exam preparation",
		audience: {
			"@type": "EducationalAudience",
			educationalRole: "student",
		},
		hasPart: sections.map((section) => ({
			"@type": "LearningResource",
			name: section.title,
			url: `${url}/#section-${section.number}`,
			learningResourceType: "Guide section",
		})),
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(data).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
