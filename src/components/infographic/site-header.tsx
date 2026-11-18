import { BookOpen } from "lucide-react";

export function SiteHeader() {
	return (
		<header className="bg-background px-5 py-10 md:px-8 lg:py-14">
			<a
				className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-white"
				href="#section-01"
			>
				Skip to the guide
			</a>
			<div className="mx-auto flex max-w-360 items-start gap-5 border-b border-foreground/35 pb-8">
				<BookOpen
					aria-hidden
					className="mt-1 hidden size-14 shrink-0 stroke-1 text-stage-1-accent sm:block"
				/>
				<div>
					<p className="text-sm font-bold tracking-widest text-stage-1-accent uppercase">
						Introductory Psychology
					</p>
					<h1 className="mt-2 max-w-4xl font-serif text-4xl leading-tight font-bold text-foreground md:text-6xl">
						Studying &amp; Exam Preparation
					</h1>
					<p className="mt-4 max-w-3xl text-lg leading-7 text-foreground md:text-xl">
						This guide serves as a resource for students to
						understand how they learn and how to prepare for exams.
					</p>
				</div>
			</div>
		</header>
	);
}
