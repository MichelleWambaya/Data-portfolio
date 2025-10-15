import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = "https://example.com";
	return [
		{ url: `${base}/`, lastModified: new Date() },
		{ url: `${base}/data`, lastModified: new Date() },
		{ url: `${base}/web`, lastModified: new Date() },
		{ url: `${base}/creations`, lastModified: new Date() },
		{ url: `${base}/finance`, lastModified: new Date() },
		{ url: `${base}/contact`, lastModified: new Date() },
	];
}
