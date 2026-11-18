import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.title}. ${site.description}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					background: "hsl(168 28% 97%)",
					color: "hsl(176 38% 13%)",
					display: "flex",
					flexDirection: "column",
					height: "100%",
					justifyContent: "space-between",
					padding: "72px",
					width: "100%",
				}}
			>
				<div
					style={{
						color: "hsl(171 38% 33%)",
						fontSize: 28,
						fontWeight: 700,
						letterSpacing: "0.14em",
						textTransform: "uppercase",
					}}
				>
					{site.name}
				</div>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
						{site.title}
					</div>
					<div
						style={{
							fontSize: 32,
							lineHeight: 1.4,
							marginTop: 28,
							maxWidth: 900,
						}}
					>
						{site.description}
					</div>
				</div>
			</div>
		),
		size,
	);
}
