"use client";

import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { Modal } from "@/components/Modal";
import { motion } from "framer-motion";

type Project = { id: number; title: string; tools: string[]; href: string; summary: string };
type Certificate = { id: string; title: string; issuer: string; date: string; image: string; skills: string[]; description: string };

const projects: Project[] = [
	{ id: 1, title: "KEMSA Price Forecasting", tools: ["Python", "Pandas", "ML"], href: "https://github.com/MichelleWambaya/KEMSA-2025PRICES-Notebook", summary: "Forecasting pharmaceutical product prices for KEMSA using historical data." },
	{ id: 2, title: "Real Estate Analysis", tools: ["Python", "Scikit-learn", "EDA"], href: "https://github.com/MichelleWambaya/REAL_ESTATE-Analysis", summary: "Kenyan real estate insights and predictive modeling." },
	{ id: 3, title: "Healthcare Data Pipeline", tools: ["ETL", "Jupyter", "Python"], href: "https://github.com/MichelleWambaya/HealthcareDataPipeLineProject", summary: "Structured pipeline for healthcare datasets and analytics." },
	{ id: 4, title: "Kenya Health Facilities", tools: ["GIS", "Python", "Viz"], href: "https://github.com/MichelleWambaya/KenyaHealthFacilities-Analysis", summary: "Exploratory analysis of facility distribution and access." },
	{ id: 5, title: "DataAnalysisSQL", tools: ["SQL", "T-SQL"], href: "https://github.com/mtoni1/DataAnalysisSQL", summary: "SQL patterns for descriptive analytics." },
];

const certificates: Certificate[] = [
	{
		id: 'cpa-certification',
		title: 'Certified Public Accountant (CPA) - Part I',
		issuer: 'kasneb',
		date: '2023',
		image: '/20250615_082341.jpg',
		skills: ['Financial Accounting', 'Accounts Receivable', 'Taxation', 'Auditing', 'Financial Analysis'],
		description: 'Professional accounting certification covering financial reporting, taxation, auditing, and business analysis. Completed with strong performance.'
	},
	{
		id: 'data-visualization-externship',
		title: 'Data Visualization Externship',
		issuer: 'National Geographic Society & The Nature Conservancy',
		date: 'Feb-Apr 2025',
		image: '/20250615_082328.jpg',
		skills: ['Data Visualization', 'ArcGIS', 'Environmental Data', 'Spatial Analysis', 'Conservation'],
		description: 'Applied analytics to real-world environmental datasets, creating compelling visualizations for conservation efforts and policy advocacy.'
	},
	{
		id: 'alx-data-analytics',
		title: 'ALX Africa Data Analytics Program',
		issuer: 'ALX Africa',
		date: '2024',
		image: '/20250615_082314.jpg',
		skills: ['Data Analysis', 'Python', 'SQL', 'Statistics', 'Machine Learning'],
		description: 'Comprehensive data analytics program covering statistical analysis, machine learning, and data-driven decision making.'
	},
	{
		id: 'microsoft-digital-literacy',
		title: 'Microsoft Digital Literacy Program',
		issuer: 'AJIRA Digital Program KEPSA',
		date: '2023',
		image: '/20250615_082354.jpg',
		skills: ['Digital Literacy', 'Computer Basics', 'Productivity Tools', 'Online Safety'],
		description: 'Foundational digital skills program covering computer basics, productivity tools, and online safety.'
	},
	{
		id: 'sql-r-data-science',
		title: 'Basics of SQL and R & Data Science Foundations',
		issuer: 'Great Learning Academy',
		date: '2024',
		image: '/20250615_082407.jpg',
		skills: ['SQL', 'R Programming', 'Data Science', 'Statistical Analysis', 'Data Manipulation'],
		description: 'Comprehensive program covering SQL database management, R programming, and foundational data science concepts.'
	},
	{
		id: 'green-skills-certificate',
		title: 'INCO Academy Green Skills Certificate',
		issuer: 'INCO Academy',
		date: '2024',
		image: '/20250615_082537.jpg',
		skills: ['Sustainability', 'Green Technology', 'Environmental Impact', 'Sustainable Development'],
		description: 'Specialized certification in green skills and sustainable technology practices for environmental impact reduction.'
	},
	{
		id: 'data-engineering-foundations',
		title: 'Data Engineering Foundations',
		issuer: 'LinkedIn Learning',
		date: '2024',
		image: '/20250615_082302.jpg',
		skills: ['Data Engineering', 'ETL Processes', 'Data Pipelines', 'Big Data', 'Cloud Computing'],
		description: 'Professional certification covering data engineering fundamentals, ETL processes, and big data technologies.'
	},
	{
		id: 'alx-professional-foundations',
		title: 'ALX Professional Foundations Program',
		issuer: 'ALX Africa',
		date: '2025',
		image: '/20250615_082302.jpg',
		skills: ['Professional Development', 'Leadership', 'Communication', 'Project Management'],
		description: 'Advanced professional development program focusing on leadership, communication, and project management skills.'
	},
	{
		id: 'ibm-data-analytics',
		title: 'IBM Upskilling - Fundamentals of Data Analytics',
		issuer: 'IBM SkillsBuild',
		date: '2024',
		image: '/20250615_082302.jpg',
		skills: ['Data Analytics', 'IBM Tools', 'Business Intelligence', 'Data Visualization'],
		description: 'IBM-certified program covering fundamental data analytics concepts and IBM analytics tools.'
	},
	{
		id: 'google-analytics',
		title: 'Google Analytics Certification (Basic)',
		issuer: 'Google',
		date: '2024',
		image: '/20250615_082302.jpg',
		skills: ['Google Analytics', 'Web Analytics', 'Conversion Tracking', 'Digital Marketing'],
		description: 'Google-certified program covering web analytics, conversion tracking, and digital marketing insights.'
	},
	{
		id: 'arcgis-externship',
		title: 'ArcGIS Data Visualization Externship',
		issuer: 'National Geographic Society + The Nature Conservancy',
		date: '2024',
		image: '/20250615_082302.jpg',
		skills: ['ArcGIS', 'Geographic Information Systems', 'Spatial Data', 'Environmental Mapping'],
		description: 'Hands-on externship applying ArcGIS for environmental data visualization and spatial analysis.'
	},
	{
		id: 'ms-excel-essentials',
		title: 'Essentials of MS EXCEL',
		issuer: 'UniAthena + Acacia University',
		date: '2024',
		image: '/20250615_082302.jpg',
		skills: ['Excel', 'Data Analysis', 'Pivot Tables', 'Advanced Formulas', 'Data Visualization'],
		description: 'Comprehensive Excel certification covering advanced data analysis, pivot tables, and business intelligence features.'
	}
];

export default function DataPage() {
	const [openId, setOpenId] = useState<number | null>(null);
	const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
	const active = projects.find((x) => x.id === openId) || null;

	return (
		<PageTransition>
			<div className="relative py-14">
				<div className="h-64 w-full bg-[url('/computer-dark-room-with-graphs-screen.jpg')] bg-cover bg-center border border-neutral-800 relative">
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
					<div className="absolute bottom-6 left-6">
						<h2 className="text-4xl text-white">Data Analytics</h2>
						<p className="text-white/90 mt-2 max-w-2xl">Transforming raw data into actionable insights through rigorous analysis and clear visualization.</p>
					</div>
				</div>

				{/* Projects Section */}
				<section className="mt-16">
					<div className="uppercase text-[11px] tracking-wide text-neutral-500 mb-8">Data Projects</div>
					<div className="relative border border-neutral-800">
						<video src="/13595991_1080_1920_30fps.mp4" className="absolute inset-0 w-full h-full object-cover -z-10" autoPlay muted loop playsInline />
						<div className="absolute inset-0 bg-black/60 -z-10" />

						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
							{projects.map((p) => (
								<div key={p.id} className="text-left border border-neutral-800 p-6 bg-black/60">
									<div className="flex items-center justify-between">
										<a href={p.href} target="_blank" rel="noreferrer" className="font-semibold underline decoration-neutral-600 hover:decoration-white">{p.title}</a>
										<div className="h-px w-10 bg-skyblue" />
									</div>
									<div className="mt-2 text-neutral-400 text-sm">{p.tools.join(" · ")}</div>
									<button className="mt-3 underline text-xs" onClick={() => setOpenId(p.id)}>Details</button>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Certificates Section - Moved to End */}
				<section className="mt-16">
					<div className="border border-neutral-800 p-8">
						<div className="uppercase text-[11px] tracking-wide text-neutral-500 mb-8">Professional Certifications</div>
						<div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
							{certificates.map((cert) => (
								<div 
									key={cert.id}
									className="border border-neutral-800 bg-black/40 cursor-pointer hover:border-skyblue hover:bg-black/60 transition-all duration-300 transform hover:scale-105"
									onClick={() => setSelectedCert(cert)}
									role="button"
									tabIndex={0}
									onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setSelectedCert(cert); } }}
								>
									<div className="h-40 bg-cover bg-center" style={{backgroundImage: `url('${cert.image}')`}} />
									<div className="p-4">
										<h4 className="font-serif text-lg">{cert.title}</h4>
										<p className="text-neutral-400 text-xs mt-1">{cert.issuer} • {cert.date}</p>
										<p className="text-neutral-300 text-xs mt-2 line-clamp-2">{cert.description}</p>
										<div className="mt-3 text-skyblue text-xs font-medium">Tap to view details →</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<Modal open={openId !== null} onClose={() => setOpenId(null)} title={active?.title}>
					<div className="space-y-3">
						<div className="text-neutral-300 text-sm">{active?.summary}</div>
						<div className="text-neutral-400 text-xs">Stack: {active?.tools.join(", ")}</div>
						{active && (
							<a className="underline" href={active.href} target="_blank" rel="noreferrer">View on GitHub</a>
						)}
					</div>
				</Modal>

				{/* Enhanced Certificate Modal */}
				{selectedCert && (
					<Modal open={!!selectedCert} onClose={() => setSelectedCert(null)}>
						<div className="max-w-4xl mx-auto bg-black/95 p-8 border border-skyblue">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<div className="h-80 bg-cover bg-center border border-neutral-700" style={{backgroundImage: `url('${selectedCert.image}')`}} />
								</div>
								<div>
									<h3 className="font-serif text-3xl text-skyblue">{selectedCert.title}</h3>
									<p className="text-neutral-400 mt-2 text-lg">{selectedCert.issuer} • {selectedCert.date}</p>
									<p className="text-neutral-300 mt-4 text-base leading-relaxed">{selectedCert.description}</p>
									
									<div className="mt-8">
										<h4 className="font-serif text-xl mb-4 text-skyblue">Skills & Competencies</h4>
										<div className="flex flex-wrap gap-3">
											{selectedCert.skills.map((skill, index) => (
												<span key={index} className="bg-skyblue/20 border border-skyblue/30 px-4 py-2 text-sm text-skyblue">{skill}</span>
											))}
										</div>
									</div>
									
									<div className="mt-8 pt-6 border-t border-neutral-700">
										<button 
											onClick={() => setSelectedCert(null)}
											className="bg-skyblue text-black px-6 py-2 font-medium hover:bg-skyblue/80 transition-colors"
										>
											Close
										</button>
									</div>
								</div>
							</div>
						</div>
					</Modal>
				)}
			</div>
		</PageTransition>
	);
}
