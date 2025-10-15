"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
	const [alt, setAlt] = useState(false);

	useEffect(() => {
		const saved = typeof window !== "undefined" ? localStorage.getItem("theme-alt") : null;
		if (saved === "1") {
			setAlt(true);
			document.documentElement.classList.add("theme-light");
		}
	}, []);

	function onToggle() {
		const next = !alt;
		setAlt(next);
		if (next) {
			document.documentElement.classList.add("theme-light");
			localStorage.setItem("theme-alt", "1");
		} else {
			document.documentElement.classList.remove("theme-light");
			localStorage.removeItem("theme-alt");
		}
	}

	return (
		<button
			aria-label={alt ? "Switch to dark" : "Switch to light"}
			title={alt ? "Switch to dark" : "Switch to light"}
			onClick={onToggle}
			className="ml-3 h-8 w-8 grid place-items-center border border-neutral-700 text-neutral-300 hover:text-white"
		>
			<div className="text-[10px] leading-none">{alt ? "II" : "I"}</div>
		</button>
	);
}
