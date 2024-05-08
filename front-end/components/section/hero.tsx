import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {Image} from "@nextui-org/image";


export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-stretch justify-between gap-4 ">
			<div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-xl text-center justify-center">
				<h1 className={title()}>Oceanographic  &nbsp;</h1>
				<h1 className={title({ color: "blue" })}>Marine Buoy&nbsp;</h1>
				
				<h2 className={subtitle({ class: "mt-4" })}>
				Real-time water monitoring, pollutant tracking, climate data gathering. Buoy strategically measures water, equipped with diverse sensors.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					href='/signup'
					className="bg-gradient-to-t from-blue-700 to-blue-400 px-5 py-3 rounded-xl text-white text-lg "
				>
					Get Started
				</Link>
				
			</div>
			
			</div>

			
		    </section>
  )
}
