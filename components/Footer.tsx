import Link from "next/link";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";

export function Footer() {
	return (
		<footer className="container-max text-xs text-neutral-400 py-10">
			<div className="flex flex-wrap items-center justify-between gap-4">
				<div>© {new Date().getFullYear()} Michelle Wambaya</div>
				<nav className="flex items-center gap-6">
					<Link href="/contact" className="hover:text-white">Contact</Link>
					<a href="mailto:michellewambaya@gmail.com" className="hover:text-white" aria-label="Email"><MailIcon className="inline" /></a>
					<a href="https://github.com/MichelleWambaya" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="GitHub"><GitHubIcon className="inline" /></a>
					<a href="https://www.linkedin.com/in/michelle-wambaya/" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="LinkedIn"><LinkedInIcon className="inline" /></a>
				</nav>
			</div>
		</footer>
	);
}
