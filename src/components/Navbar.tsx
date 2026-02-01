type NavItem = {
	href: string;
	label: string;
};

const defaultItems: NavItem[] = [
	{ href: "#projects", label: "Projects" },
	{ href: "#about", label: "About" },
	{ href: "#contact", label: "Contact" },
];

export default function Navbar({
	brand = "Your Name",
	items = defaultItems,
}: {
	brand?: string;
	items?: NavItem[];
}) {
	return (
		<header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1320]/55 backdrop-blur supports-[backdrop-filter]:bg-[#0b1320]/40">
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 rounded-md bg-[#0b1320] px-3 py-2 text-sm font-medium text-slate-100 ring-2 ring-[#559fd6]"
			>
				Skip to content
			</a>

			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
				<a
					href="#"
					className="font-semibold tracking-tight text-slate-100 transition-colors hover:text-white"
				>
					{brand}
				</a>

				<nav aria-label="Primary" className="flex items-center gap-5 text-sm">
					{items.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="rounded-md px-2 py-1 text-slate-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#559fd6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1320]"
						>
							{item.label}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
}

