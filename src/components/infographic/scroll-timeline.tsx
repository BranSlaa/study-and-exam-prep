"use client";

import { useEffect, useRef, useState } from "react";
import type { TimelineProps } from "@/types/component-props";
import { interpolateProgress } from "@/utils/interpolate-progress";

export function ScrollTimeline({ sections }: TimelineProps) {
	const timelineRef = useRef<HTMLElement>(null);
	const [activeIndex, setActiveIndex] = useState(-1);

	useEffect(() => {
		let frame = 0;

		const updateProgress = () => {
			const elements = sections
				.map(({ number }) =>
					document.getElementById(`section-${number}`),
				)
				.filter((element): element is HTMLElement => Boolean(element));

			const timeline = timelineRef.current;
			if (elements.length < 2 || !timeline) return;

			const anchorOffset = window.innerHeight * 0.35;
			const maxScroll =
				document.documentElement.scrollHeight - window.innerHeight;
			const scrollPoints = [
				0,
				...elements.map((element) => {
					const bounds = element.getBoundingClientRect();
					return window.scrollY + bounds.top - anchorOffset;
				}),
				maxScroll,
			];
			const timelineBounds = timeline.getBoundingClientRect();
			const markerPoints = Array.from(
				timeline.querySelectorAll<HTMLElement>(".timeline-marker"),
				(marker) =>
					(marker.getBoundingClientRect().left -
						timelineBounds.left +
						marker.offsetWidth / 2) /
					timelineBounds.width,
			);
			const progress = interpolateProgress(
				window.scrollY,
				scrollPoints,
				[0, ...markerPoints, 1],
			);

			timeline.style.setProperty(
				"--timeline-progress",
				String(progress),
			);
			setActiveIndex(
				markerPoints.reduce(
					(lastPassed, point, index) =>
						progress >= point ? index : lastPassed,
					-1,
				),
			);
		};

		const requestUpdate = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(updateProgress);
		};

		requestUpdate();
		window.addEventListener("scroll", requestUpdate, { passive: true });
		window.addEventListener("resize", requestUpdate);

		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", requestUpdate);
			window.removeEventListener("resize", requestUpdate);
		};
	}, [sections]);

	return (
		<nav
			aria-label="Page sections"
			className="scroll-timeline"
			ref={timelineRef}
		>
			<div className="timeline-track">
				<div aria-hidden className="timeline-line">
					<span />
				</div>
				<ol>
					{sections.map((section, index) => (
						<li key={section.number}>
							<a
								aria-label={`${section.number}: ${section.title}`}
								className="timeline-marker"
								data-complete={index <= activeIndex}
								data-stage={section.stage}
								href={`#section-${section.number}`}
							>
								<span>{section.number}</span>
							</a>
						</li>
					))}
				</ol>
			</div>
		</nav>
	);
}
