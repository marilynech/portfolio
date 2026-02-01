type HeroLinks = {
	github?: string;
	linkedin?: string;
	email?: string;
};

function PrimaryButton({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<a
			href={href}
			className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-night-900 shadow-glow transition-colors hover:bg-[#66b4ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-night-900 motion-reduce:transition-none"
		>
			{children}
		</a>
	);
}

function SecondaryButton({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<a
			href={href}
			target={href.startsWith("http") ? "_blank" : undefined}
			rel={href.startsWith("http") ? "noreferrer" : undefined}
			className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-accent/45 hover:bg-white/10 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-night-900 motion-reduce:transition-none"
		>
			{children}
		</a>
	);
}

export default function Hero({
	name,
	tagline,
	blurb,
	links,
}: {
	name: string;
	tagline: string;
	blurb?: string;
	links: HeroLinks;
}) {
	return (
		<section className="py-14 sm:py-20">
			<div className="mx-auto max-w-6xl px-4">
				<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-night-900/65 p-7 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur sm:p-10">
					<div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
					<div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-moon/10 blur-3xl" />

					<div className="relative">
						<p className="text-sm font-medium tracking-wide text-accent">
							Hello, I’m
						</p>
						<h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
							{name}
						</h1>
						<p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
							{tagline}
						</p>
						{blurb ? (
							<p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
								{blurb}
							</p>
						) : null}

						<div className="mt-7 flex flex-wrap items-center gap-3">
							{links.email ? (
								<PrimaryButton href={links.email.startsWith("mailto:") ? links.email : `mailto:${links.email}`}>
									Email
								</PrimaryButton>
							) : null}
							{links.github ? <SecondaryButton href={links.github}>GitHub</SecondaryButton> : null}
							{links.linkedin ? (
								<SecondaryButton href={links.linkedin}>LinkedIn</SecondaryButton>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

