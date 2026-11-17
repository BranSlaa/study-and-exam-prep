import { Closing } from "@/components/infographic/closing";
import { InfographicSection } from "@/components/infographic/section";
import { SiteHeader } from "@/components/infographic/site-header";
import { Stage } from "@/components/infographic/stage";
import { closing } from "@/content/closing";
import { section01 } from "@/content/sections/section-01";
import { section02 } from "@/content/sections/section-02";
import { section03 } from "@/content/sections/section-03";
import { section04 } from "@/content/sections/section-04";
import { section05 } from "@/content/sections/section-05";
import { section06 } from "@/content/sections/section-06";
import { section07 } from "@/content/sections/section-07";
import { section08 } from "@/content/sections/section-08";
import { section09 } from "@/content/sections/section-09";
import { section10 } from "@/content/sections/section-10";

export default function Home() {
	return (
		<main className="overflow-x-clip">
			<SiteHeader />
			<Stage id="one">
				<InfographicSection data={section01} />
				<InfographicSection data={section02} />
				<InfographicSection data={section03} />
			</Stage>
			<Stage id="two">
				<InfographicSection data={section04} />
				<InfographicSection data={section05} />
				<InfographicSection data={section06} />
				<InfographicSection data={section07} />
			</Stage>
			<Stage id="three">
				<InfographicSection data={section08} />
				<InfographicSection data={section09} />
				<InfographicSection data={section10} />
			</Stage>
			<Closing data={closing} />
		</main>
	);
}
