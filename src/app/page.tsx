import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import StarryBackground from "../components/StarryBackground";
import TechBadge from "../components/TechBadge";
import { projects } from "../data/projects";

const profile = {
	name: "Marilyn Echeverria",
	tagline: "I build modern, accessible web experiences with a touch of creativity.",
	blurb:
		"I care about clean UI, strong UX, and performance. I love turning ideas into polished products.",
	links: {
		github: "https://github.com/your-username",
		linkedin: "https://www.linkedin.com/in/your-handle",
		email: "you@example.com",
	},
};

const about = {
	bio: "I’m a developer who enjoys building thoughtful interfaces and reliable systems. I’m especially interested in accessibility, design systems, and performance.",
	tech: [
		"TypeScript",
		"React",
		"Next.js",
		"Tailwind CSS",
		"Node.js",
		"PostgreSQL",
	],
};

export default function Home() {
	const featured = projects.filter((p) => p.featured);
	const rest = projects.filter((p) => !p.featured);

	return (
		<>
			<StarryBackground />
			<Navbar brand={profile.name} />

			<main id="main" className="relative">
				<Hero
					name={profile.name}
					tagline={profile.tagline}
					blurb={profile.blurb}
					links={profile.links}
				/>

				<section
					id="projects"
					className="scroll-mt-24 py-14 sm:py-20"
					aria-labelledby="projects-title"
				>
					<div className="mx-auto max-w-6xl px-4">
						<div id="projects-title">
							<SectionHeading
								title="Projects"
								subtitle="A few things I’ve built recently. Replace these placeholders with your real work."
							/>
						</div>

						{featured.length ? (
							<div className="grid gap-5 lg:grid-cols-2">
								{featured.map((project) => (
									<ProjectCard key={project.title} project={project} />
								))}
							</div>
						) : null}

						{rest.length ? (
							<div
								className={
									"mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 " +
									(featured.length ? "" : "lg:grid-cols-2")
								}
							>
								{rest.map((project) => (
									<ProjectCard key={project.title} project={project} />
								))}
							</div>
						) : null}
					</div>
				</section>

				<section
					id="about"
					className="scroll-mt-24 py-14 sm:py-20"
					aria-labelledby="about-title"
				>
					<div className="mx-auto max-w-6xl px-4">
						<div id="about-title">
							<SectionHeading
								title="About"
								subtitle="A quick introduction and the tools I reach for most."
							/>
						</div>

						<div className="grid gap-8 lg:grid-cols-3">
							<div className="lg:col-span-2">
								<div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_1px_0_rgba(255,255,255,0.06)]">
									<p className="text-sm leading-relaxed text-slate-200 sm:text-base">
										{about.bio}
									</p>
									<p className="mt-4 text-sm leading-relaxed text-slate-300">
										Want to collaborate? Jump to the <a className="text-[#559fd6] underline decoration-[#559fd6]/40 underline-offset-4 hover:decoration-[#559fd6]" href="#contact">contact section</a>.
									</p>
								</div>
							</div>

							<div>
								<div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_1px_0_rgba(255,255,255,0.06)]">
									<h3 className="text-sm font-semibold tracking-wide text-white">
										Tech Stack
									</h3>
									<div className="mt-4 flex flex-wrap gap-2">
										{about.tech.map((t) => (
											<TechBadge key={t} label={t} />
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="contact"
					className="scroll-mt-24 py-14 sm:py-20"
					aria-labelledby="contact-title"
				>
					<div className="mx-auto max-w-6xl px-4">
						<div id="contact-title">
							<SectionHeading
								title="Contact"
								subtitle="Email is best — I’m happy to chat about roles, freelance work, or collaborations."
							/>
						</div>

						<div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_1px_0_rgba(255,255,255,0.06)] sm:p-10">
							<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
								<div>
									<p className="text-sm text-slate-300">Say hello:</p>
									<a
										href={
											profile.links.email.startsWith("mailto:")
												? profile.links.email
												: `mailto:${profile.links.email}`
										}
										className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-white underline decoration-white/20 underline-offset-4 hover:decoration-[#559fd6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#559fd6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1320]"
									>
										{profile.links.email}
									</a>
								</div>

								<div className="flex flex-wrap gap-3">
									<a
										href={profile.links.github}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-[#559fd6]/45 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#559fd6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1320] motion-reduce:transition-none"
									>
										GitHub
									</a>
									<a
										href={profile.links.linkedin}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-[#559fd6]/45 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#559fd6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1320] motion-reduce:transition-none"
									>
										LinkedIn
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Footer
					name={profile.name}
					github={profile.links.github}
					linkedin={profile.links.linkedin}
					email={profile.links.email}
				/>
			</main>
		</>
	);
}

