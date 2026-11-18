import type { Metadata, Viewport } from "next";
import { Geist, Libre_Baskerville } from "next/font/google";
import { documentTitle, site } from "@/content/site";
import { getSiteUrl } from "@/utils/site-url";
import "./globals.css";
import "./infographic.css";
import "./content-patterns.css";
import "./timeline.css";
import "./table.css";
import "./memory-diagram.css";
import "./memory-diagram-nodes.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
	variable: "--font-libre-baskerville",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	metadataBase: new URL(getSiteUrl()),
	title: {
		default: documentTitle,
		template: `%s | ${site.name}`,
	},
	description: site.description,
	applicationName: site.name,
	category: "education",
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		locale: "en_CA",
		url: "/",
		siteName: site.name,
		title: documentTitle,
		description: site.description,
	},
	twitter: {
		card: "summary_large_image",
		title: documentTitle,
		description: site.description,
	},
	robots: { index: true, follow: true },
};

export const viewport: Viewport = {
	themeColor: "hsl(168 28% 97%)",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en-CA"
			className={`${geistSans.variable} ${libreBaskerville.variable} h-full antialiased`}
		>
			<body className="flex min-h-full flex-col">{children}</body>
		</html>
	);
}
