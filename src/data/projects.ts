export type Project = {
	title: string;
	description: string;
	tech: string[];
	image?: string;
	repoUrl: string;
	liveUrl?: string;
	featured: boolean;
};

export const projects: Project[] = [
	{
		title: "Starry Portfolio",
		description:
			"A minimal, fast portfolio site with a custom Starry Night theme, responsive layout, and accessible components.",
		tech: ["Next.js", "TypeScript", "Tailwind CSS"],
		repoUrl: "https://github.com/your-username/your-repo",
		liveUrl: "https://your-domain.com",
		featured: true,
	},
	{
		title: "Project Placeholder",
		description:
			"Swap this out with your real work — highlight the problem, your approach, and a measurable outcome.",
		tech: ["React", "Node.js", "PostgreSQL"],
		repoUrl: "https://github.com/your-username/project",
		featured: false,
	},
	{
		title: "Another Project",
		description:
			"A second example card to show the grid layout. Add a live link if available.",
		tech: ["Design Systems", "Accessibility", "Performance"],
		repoUrl: "https://github.com/your-username/another-project",
		liveUrl: "https://example.com",
		featured: false,
	},
];

