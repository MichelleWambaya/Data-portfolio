import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
	title: "Michelle Wambaya | Portfolio",
	description: "I build, analyze, and create stories through code, data, and design.",
	metadataBase: new URL("https://michelle-wambaya.vercel.app"),
	openGraph: {
		title: "Michelle Wambaya",
		description: "Code, data, and design with cinematic precision.",
		type: "website",
		url: "https://michelle-wambaya.vercel.app",
		siteName: "Michelle Wambaya Portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "Michelle Wambaya",
		description: "Code, data, and design with cinematic precision.",
	},
};

export const viewport: Viewport = {
	themeColor: "#0A0A0A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Work+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@700;800;900&family=DM+Serif+Display:ital@0;1&family=Cinzel:wght@600;700;800&display=swap" rel="stylesheet" />
			</head>
			<body className="min-h-dvh bg-midnight text-white antialiased">
				<div className="sticky top-0 z-50 bg-midnight/80 backdrop-blur-0 border-b border-neutral-800">
					<Navbar />
				</div>
				<main className="container-max">
					{children}
				</main>
				<div className="border-t border-neutral-800 mt-24">
					<Footer />
				</div>
			</body>
		</html>
	);
}
