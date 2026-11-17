import type { Metadata } from "next";
import { Geist, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import "./infographic.css";
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
	title: "Studying & Exam Preparation",
	description:
		"An introductory psychology guide to studying and exam preparation.",
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
