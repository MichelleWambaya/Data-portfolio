"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "classnames";

type CardProps = {
	title: string;
	description?: string;
	href: string;
	accent?: "sunflower" | "dusk" | "skyblue" | "nature" | "gold" | "white";
	className?: string;
};

export function Card({ title, description, href, accent = "white", className }: CardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={clsx("border border-neutral-800 p-6 group", className)}
		>
			<Link href={href} className="block">
				<div className="flex items-center justify-between">
					<h3 className="text-lg font-bold">{title}</h3>
					<div className={clsx("h-px w-16 transition-colors", {
							"bg-sunflower": accent === "sunflower",
							"bg-dusk": accent === "dusk",
							"bg-skyblue": accent === "skyblue",
							"bg-nature": accent === "nature",
							"bg-gold": accent === "gold",
							"bg-white": accent === "white",
						})}
					/>
				</div>
				{description && (
					<p className="mt-3 text-neutral-300 group-hover:text-white transition-colors">{description}</p>
				)}
			</Link>
		</motion.div>
	);
}
