export default function Footer({
	name = "Your Name",
	github,
	linkedin,
	email,
}: {
	name?: string;
	github?: string;
	linkedin?: string;
	email?: string;
}) {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-white/10 py-10">
			<div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
				<p className="text-sm text-slate-300">
					© {year} {name}. All rights reserved.
				</p>

				<div className="flex flex-wrap gap-4 text-sm">
					{github ? (
						<a
							href={github}
							target="_blank"
							rel="noreferrer"
							className="rounded-md text-slate-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#559fd6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1320]"
						>
							GitHub
						</a>
					) : null}
					{linkedin ? (
						<a
							href={linkedin}
							target="_blank"
							rel="noreferrer"
							className="rounded-md text-slate-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#559fd6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1320]"
						>
							LinkedIn
						</a>
					) : null}
					{email ? (
						<a
							href={email.startsWith("mailto:") ? email : `mailto:${email}`}
							className="rounded-md text-slate-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#559fd6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1320]"
						>
							Email
						</a>
					) : null}
				</div>
			</div>
		</footer>
	);
}

