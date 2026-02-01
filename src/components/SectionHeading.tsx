export default function SectionHeading({
	title,
	subtitle,
}: {
	title: string;
	subtitle?: string;
}) {
	return (
		<div className="mb-6">
			<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
				{title}
			</h2>
			<div className="mt-3 h-px w-16 bg-[#559fd6]/70 shadow-[0_0_18px_rgba(85,159,214,0.35)]" />
			{subtitle ? (
				<p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
					{subtitle}
				</p>
			) : null}
		</div>
	);
}

