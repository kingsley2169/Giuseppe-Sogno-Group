export function IntroBand() {
	return (
		<section
		aria-label="Group overview"
		className="w-full bg-white"
		>
			<div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 sm:px-8 md:gap-8 md:py-32 lg:py-40">
				<span className="text-xs font-medium uppercase tracking-[0.22em] text-[#A28A62]">
					The group
				</span>
				<h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#202A34] sm:text-4xl md:text-5xl">
					A Giuseppe Sogno company, operating between Indonesia and Nigeria.
				</h2>
				<p className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg md:text-lg">
					We partner with enterprises across four divisions: edible fat,
					tobacco, logistics, and corporate services to move products,
					paperwork and people along the Indonesia–Nigeria corridor. Each
					business is built on local presence.
				</p>
			</div>
		</section>
	);
}
