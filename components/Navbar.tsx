"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "classnames";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/data", label: "Data" },
	{ href: "/web", label: "Web" },
	{ href: "/creations", label: "Creations" },
	{ href: "/finance", label: "Finance" },
	{ href: "/contact", label: "Contact" },
];

export function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	return (
		<nav className="container-max h-14 md:h-16 flex items-stretch text-sm">
			{/* Mobile menu button */}
			<button
				className="mr-3 md:hidden h-8 w-8 grid place-items-center border border-neutral-700 text-neutral-300 hover:text-white"
				aria-label={open ? "Close menu" : "Open menu"}
				onClick={() => setOpen((v) => !v)}
			>
				<div className="text-[10px]">{open ? "X" : "≡"}</div>
			</button>

			<div className="flex items-center font-bold tracking-wide text-[13px] md:text-base">
				<Link href="/" className="uppercase">Michelle Wambaya</Link>
			</div>
			<div className="mx-4 md:mx-6 w-px bg-neutral-800 hidden md:block" />

			{/* Desktop links */}
			<div className="ml-auto hidden md:flex items-stretch">
				<ul className="flex gap-0 items-stretch whitespace-nowrap">
					{links.map((l) => {
						const active = pathname === l.href;
						return (
							<li key={l.href} className="h-full">
								<Link
									href={l.href}
									className={clsx(
										"h-full flex items-center px-4 border-b-2",
										active ? "border-white text-white" : "border-transparent text-neutral-300 hover:text-white"
									)}
								>
									{l.label}
								</Link>
							</li>
						);
					})}
					<li className="flex items-center"><ThemeToggle /></li>
				</ul>
			</div>

			{/* Mobile drawer */}
			{open && (
				<div className="fixed inset-0 z-50 md:hidden" aria-hidden="false">
					<div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
					<div className="absolute left-0 top-0 h-full w-64 bg-midnight border-r border-neutral-800">
						<div className="p-4 border-b border-neutral-800 flex items-center justify-between">
							<div className="font-bold">Menu</div>
							<button className="h-8 w-8 grid place-items-center border border-neutral-700" aria-label="Close menu" onClick={() => setOpen(false)}>X</button>
						</div>
						<ul className="p-2">
							{links.map((l) => {
								const active = pathname === l.href;
								return (
									<li key={l.href}>
										<Link
											href={l.href}
											className={clsx("block px-3 py-3 border-l-2", active ? "border-white text-white" : "border-transparent text-neutral-300 hover:text-white")}
											onClick={() => setOpen(false)}
										>
											{l.label}
										</Link>
									</li>
								);
							})}
							<li className="px-3 py-3"><ThemeToggle /></li>
						</ul>
					</div>
				</div>
			)}
		</nav>
	);
}
