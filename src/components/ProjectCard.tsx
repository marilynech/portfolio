import Image from "next/image";
import type { Project } from "../data/projects";
import TechBadge from "./TechBadge";

function ActionLink({
	href,
	label,
}: {
	href: string;
	label: string;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-[#559fd6]/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#559fd6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1320] motion-reduce:transition-none"
		>
			{label}
			<span aria-hidden="true" className="text-[#559fd6]">
				↗
			</span>
		</a>
	);
}

export default function ProjectCard({ project }: { project: Project }) {
	const isFeatured = project.featured;

	return (
		<article
			className={
				"group relative overflow-hidden rounded-2xl border bg-white/5 p-5 shadow-[0_1px_0_rgba(255,255,255,0.06)] transition-colors motion-reduce:transition-none " +
				(isFeatured
					? "border-[#559fd6]/35 hover:border-[#559fd6]/55"
					: "border-white/10 hover:border-white/20")
			}
		>
			<div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#559fd6]/10 blur-3xl" />

			<div className="relative">
				<div className="flex items-start justify-between gap-4">
					<h3 className="text-lg font-semibold tracking-tight text-white">
						{project.title}
					</h3>
					{isFeatured ? (
						<span className="shrink-0 rounded-full border border-[#559fd6]/35 bg-[#559fd6]/10 px-3 py-1 text-xs font-semibold text-slate-100 shadow-[0_0_18px_rgba(85,159,214,0.18)]">
							Featured
						</span>
					) : null}
				</div>

				{project.image ? (
					<div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/20">
						<Image
							src={project.image}
							alt={project.title}
							width={1200}
							height={700}
							className="h-auto w-full object-cover"
						/>
					</div>
				) : (
					<div className="mt-4 h-32 rounded-xl border border-white/10 bg-gradient-to-br from-[#27466c]/60 via-[#0b1320]/70 to-black/40" />
				)}

				<p className="mt-4 text-sm leading-relaxed text-slate-200">
					{project.description}
				</p>

				<div className="mt-4 flex flex-wrap gap-2">
					{project.tech.map((t) => (
						<TechBadge key={t} label={t} />
					))}
				</div>

				<div className="mt-5 flex flex-wrap gap-3">
					<ActionLink href={project.repoUrl} label="Code" />
					{project.liveUrl ? <ActionLink href={project.liveUrl} label="Live" /> : null}
				</div>
			</div>
		</article>
	);
}

