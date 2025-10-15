"use client";

import jsPDF from 'jspdf';

type ResumeData = {
	id: string;
	title: string;
	description: string;
	personalInfo: {
		name: string;
		email: string;
		linkedin: string;
		github: string;
		location: string;
	};
	summary: string;
	skills: string[];
	experience: Array<{
		title: string;
		company: string;
		period: string;
		achievements: string[];
	}>;
	education: Array<{
		degree: string;
		institution: string;
		period: string;
	}>;
	certifications: Array<{
		name: string;
		issuer: string;
		date: string;
	}>;
	projects: Array<{
		name: string;
		description: string;
	}>;
};

const resumeData: Record<string, ResumeData> = {
	data: {
		id: "data",
		title: "Data Analytics",
		description: "Power BI, SQL, Excel. Analytics with rigor.",
		personalInfo: {
			name: "Michelle Wambaya",
			email: "michellewambaya@gmail.com",
			linkedin: "linkedin.com/in/michelle-wambaya/",
			github: "github.com/MichelleWambaya",
			location: "Nairobi, Kenya"
		},
		summary: "Data Analyst and Software Developer with a foundation in Economics and Finance. Skilled in Power BI, SQL, Excel, and business intelligence. Advocate for social impact technology, open source contributor, Web3 & Blockchain, fintech and sustainability enthusiast. I build secure web apps and translate complex data into clear, decision-ready visuals.",
		skills: ["Power BI", "SQL", "Excel", "Python", "R", "Tableau", "Data Visualization", "Statistical Analysis", "Database Design", "ArcGIS", "Google Analytics", "IBM SkillsBuild"],
		experience: [
			{
				title: "Community Conservation, Data Visualization and Mapping Externship",
				company: "Extern",
				period: "Feb 2025 - May 2025",
				achievements: [
					"Applied data visualization and mapping techniques to support community-based conservation efforts",
					"Created interactive maps to highlight conservation challenges and solutions",
					"Translated raw data into compelling visuals for stakeholders and policy advocacy",
					"Collaborated with multidisciplinary team to support community-led initiatives",
					"Gained hands-on experience using ArcGIS and QGIS for environmental data analysis"
				]
			},
			{
				title: "Finance Accounting Intern",
				company: "Kenya Urban Roads Authority",
				period: "May 2024 - Oct 2024",
				achievements: [
					"Processed and verified Local Purchase Orders (LPOs) and payment vouchers",
					"Assisted in preparing imprests, invoices, and financial reports",
					"Maintained and reconciled ledger accounts; supported monthly bank reconciliations",
					"Contributed to 98% accuracy rate in financial records through thorough verification",
					"Participated in audit preparations and ensured proper documentation for internal controls"
				]
			},
			{
				title: "Data Analyst",
				company: "MeriSKILL",
				period: "Apr 2024 - May 2024",
				achievements: [
					"Completed real-world data analysis projects using Excel and Power BI",
					"Interpreted large datasets to identify trends and present insights in dashboards",
					"Applied data cleaning, visualization, and storytelling techniques to solve business problems",
					"Created comprehensive reports for stakeholder decision-making"
				]
			}
		],
		education: [
			{
				degree: "Bachelor's Degree in Applied Economics",
				institution: "Kenyatta University",
				period: "2021-2025"
			},
			{
				degree: "Software Engineering",
				institution: "Holberton School",
				period: "2023-2026"
			}
		],
		certifications: [
			{ name: "Certified Public Accountant (CPA) - Part I", issuer: "kasneb", date: "2023" },
			{ name: "ALX Africa Data Analytics Program", issuer: "ALX Africa", date: "2024" },
			{ name: "Microsoft Digital Literacy Program", issuer: "AJIRA Digital Program KEPSA", date: "2023" },
			{ name: "Basics of SQL and R & Data Science Foundations", issuer: "Great Learning Academy", date: "2024" },
			{ name: "INCO Academy Green Skills Certificate", issuer: "INCO Academy", date: "2024" },
			{ name: "Data Engineering Foundations", issuer: "LinkedIn Learning", date: "2024" },
			{ name: "ALX Professional Foundations Program", issuer: "ALX Africa", date: "2025" },
			{ name: "IBM Upskilling - Fundamentals of Data Analytics", issuer: "IBM SkillsBuild", date: "2024" },
			{ name: "Google Analytics Certification (Basic)", issuer: "Google", date: "2024" },
			{ name: "Essentials of MS EXCEL", issuer: "UniAthena + Acacia University", date: "2024" }
		],
		projects: [
			{
				name: "Medical Supply Price Prediction Model",
				description: "Built ML model to forecast pharmaceutical prices for KEMSA using 2017 data"
			},
			{
				name: "Real Estate Market Analysis",
				description: "Comprehensive data analytics case study using fictional Kenyan real estate dataset"
			},
			{
				name: "Financial Dashboard",
				description: "Power BI dashboard for tracking and analyzing financial performance metrics"
			},
			{
				name: "Statistics Without Borders Volunteer Work",
				description: "Volunteer data analyst providing statistical support for social impact projects (2025-Present)"
			}
		]
	},
	web: {
		id: "web",
		title: "Software Developer",
		description: "Modern, secure services. Engineered precisely.",
		personalInfo: {
			name: "Michelle Wambaya",
			email: "michellewambaya@gmail.com",
			linkedin: "linkedin.com/in/michelle-wambaya/",
			github: "github.com/MichelleWambaya",
			location: "Nairobi, Kenya"
		},
		summary: "Full-Stack Software Developer with expertise in modern web technologies and backend systems. Advocate for social impact technology, open source contributor, Web3 & Blockchain, fintech and sustainability enthusiast. Passionate about building secure, scalable applications with clean code and robust architecture.",
		skills: ["JavaScript", "Perl", "Python", "HTML/CSS", "C", "Java", "Node.js", "Express.js", "Docker", "Git", "XAMPP", "CPAN", "HashiCorp Vault", "MySQL", "Debian", "VMware", "WSL", "ORACLE"],
		experience: [
			{
				title: "Software Developer",
				company: "EGA Tech",
				period: "Sep 2024 - Apr 2025",
				achievements: [
					"Contributed to backend development of Express.js and Node.js applications",
					"Supported DevOps workflows including CI/CD pipelines and containerization",
					"Assisted in developing AI-integrated features and maintained Perl scripts",
					"Collaborated with international teams to deploy secure web services"
				]
			},
			{
				title: "Community Conservation Externship",
				company: "Extern",
				period: "Feb 2025 - May 2025",
				achievements: [
					"Applied data visualization and mapping techniques for conservation efforts",
					"Worked with spatial data analysis using ArcGIS and QGIS",
					"Created interactive maps to highlight conservation challenges and solutions",
					"Translated raw data into compelling visuals for stakeholders"
				]
			}
		],
		education: [
			{
				degree: "Software Engineering",
				institution: "Holberton School",
				period: "2023-2026"
			},
			{
				degree: "Bachelor's Degree in Applied Economics",
				institution: "Kenyatta University",
				period: "2021-2025"
			}
		],
		certifications: [
			{ name: "ALX Professional Foundations Program", issuer: "ALX Africa", date: "2025" },
			{ name: "JP Morgan & Chase Software Engineering Simulation", issuer: "Forage", date: "2024" },
			{ name: "DevOps/Java/ HashiCorp & Ansible Admin Bootcamp", issuer: "Gridironjobs.com", date: "2024" },
			{ name: "Perl Programming", issuer: "Gridironjobs.com", date: "2024" },
			{ name: "ALX Career essentials and AI skills", issuer: "ALX Africa", date: "2024" },
			{ name: "Microsoft Digital Literacy Program", issuer: "AJIRA Digital Program KEPSA", date: "2023" },
			{ name: "Basics of SQL and R & Python", issuer: "Great Learning Academy", date: "2024" },
			{ name: "INCO Academy Green Skills Certificate", issuer: "INCO Academy", date: "2024" },
			{ name: "Software Testing and Automation", issuer: "Edureka", date: "2024" }
		],
		projects: [
			{
				name: "MpesaFi Prototype",
				description: "Decentralized, mobile-first finance concept with minimal UI"
			},
			{
				name: "EcoLedger Prototype",
				description: "Audit-style records for sustainability tracking"
			},
			{
				name: "AZ Frontend",
				description: "Layout drills focusing on grid discipline and typographic balance"
			}
		]
	},
	design: {
		id: "design",
		title: "Graphic Designer",
		description: "Visual storytelling through intentional design.",
		personalInfo: {
			name: "Michelle Wambaya",
			email: "michellewambaya@gmail.com",
			linkedin: "linkedin.com/in/michelle-wambaya/",
			github: "github.com/MichelleWambaya",
			location: "Nairobi, Kenya"
		},
		summary: "Creative Graphic Designer specializing in visual storytelling through intentional design. Focused on creating clean lines, purposeful composition, and strategic communication that builds brand identity and user engagement.",
		skills: ["Adobe Creative Suite", "Figma", "UI/UX Design", "Brand Design", "Typography", "Print Design", "Digital Design", "User Research"],
		experience: [
			{
				title: "Community Conservation Externship",
				company: "Extern",
				period: "Feb 2025 - May 2025",
				achievements: [
					"Created interactive maps and visual storytelling for conservation efforts",
					"Designed compelling visuals for stakeholders and policy advocacy",
					"Applied design thinking to environmental data visualization",
					"Translated complex conservation data into accessible visual narratives"
				]
			},
			{
				title: "Software Developer",
				company: "EGA Tech",
				period: "Sep 2024 - Apr 2025",
				achievements: [
					"Designed user interfaces for web applications",
					"Created visual assets for AI-integrated features",
					"Collaborated on user experience design for international teams",
					"Maintained consistent visual design across multiple platforms"
				]
			}
		],
		education: [
			{
				degree: "Bachelor's Degree in Applied Economics",
				institution: "Kenyatta University",
				period: "2021-2025"
			},
			{
				degree: "Software Engineering",
				institution: "Holberton School",
				period: "2023-2026"
			}
		],
		certifications: [
			{ name: "Design Thinking Certificate", issuer: "IDEO", date: "2024" },
			{ name: "UI/UX Design Fundamentals", issuer: "Google", date: "2024" },
			{ name: "Brand Identity Design", issuer: "Adobe", date: "2023" },
			{ name: "Frontend Development", issuer: "FreeCodeCamp", date: "2023" }
		],
		projects: [
			{
				name: "Brand Identity Systems",
				description: "Complete visual identity packages for startups and established brands"
			},
			{
				name: "Editorial Design",
				description: "Magazine layouts and publication design with emphasis on readability"
			},
			{
				name: "UI/UX Design",
				description: "Interface design focused on user experience and functional aesthetics"
			}
		]
	},
	finance: {
		id: "finance",
		title: "Finance Professional",
		description: "Economics and public finance. Typed clean, checked twice.",
		personalInfo: {
			name: "Michelle Wambaya",
			email: "michellewambaya@gmail.com",
			linkedin: "linkedin.com/in/michelle-mtoni-wambaya/",
			github: "github.com/MichelleWambaya",
			location: "Nairobi, Kenya"
		},
		summary: "Finance Professional with expertise in Economics and Public Finance. Skilled in financial analysis, accounting, and economic modeling with a focus on accuracy, compliance, and strategic decision-making.",
		skills: ["Financial Analysis", "Accounting", "Excel", "Power BI", "SQL", "Financial Modeling", "Economic Analysis", "Risk Assessment"],
		experience: [
			{
				title: "Finance Accounting Intern",
				company: "Kenya Urban Roads Authority",
				period: "May 2024 - Oct 2024",
				achievements: [
					"Processed and verified Local Purchase Orders (LPOs) and payment vouchers",
					"Assisted in preparing imprests, invoices, and financial reports",
					"Maintained and reconciled ledger accounts; supported monthly bank reconciliations",
					"Contributed to 98% accuracy rate in financial records"
				]
			},
			{
				title: "Data Analyst",
				company: "MeriSKILL",
				period: "Apr 2024 - May 2024",
				achievements: [
					"Completed financial data analysis projects using Excel and Power BI",
					"Interpreted large financial datasets to identify trends and insights",
					"Applied data cleaning and visualization techniques to financial data",
					"Delivered actionable financial insights through data analysis"
				]
			}
		],
		education: [
			{
				degree: "Bachelor's Degree in Applied Economics",
				institution: "Kenyatta University",
				period: "2021-2025"
			},
			{
				degree: "Software Engineering",
				institution: "Holberton School",
				period: "2023-2026"
			}
		],
		certifications: [
			{ name: "Certified Public Accountant (CPA)", issuer: "kasneb", date: "2023" },
			{ name: "Financial Modeling & Analysis", issuer: "Corporate Finance Institute", date: "2024" },
			{ name: "CFA Level I", issuer: "CFA Institute", date: "2024" },
			{ name: "Financial Risk Management", issuer: "GARP", date: "2024" },
			{ name: "Kubernetes and Cloud Native Essentials", issuer: "The Linux Foundation", date: "2025" }
		],
		projects: [
			{
				name: "Financial Dashboard",
				description: "Power BI dashboard for tracking financial performance metrics"
			},
			{
				name: "Economic Policy Analysis",
				description: "Research and analysis of public finance policies"
			},
			{
				name: "Investment Portfolio Analysis",
				description: "Comprehensive analysis of investment strategies"
			}
		]
	}
};

export function generateResumePDF(resumeType: string): void {
	const data = resumeData[resumeType];
	if (!data) return;

	const doc = new jsPDF();
	const pageWidth = doc.internal.pageSize.getWidth();
	const pageHeight = doc.internal.pageSize.getHeight();
	let yPosition = 20;
	let currentPage = 1;

	// Helper function to add text with word wrapping
	const addText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 11) => {
		doc.setFontSize(fontSize);
		doc.setFont("helvetica", "normal");
		const lines = doc.splitTextToSize(text, maxWidth);
		
		// Check if we need a new page
		const lineHeight = fontSize * 0.5;
		const requiredHeight = lines.length * lineHeight;
		
		if (y + requiredHeight > pageHeight - 20) {
			doc.addPage();
			y = 20;
			currentPage++;
		}
		
		doc.text(lines, x, y);
		return y + requiredHeight;
	};

	// Helper function to check page space and add new page if needed
	const checkPageSpace = (requiredSpace: number) => {
		if (yPosition + requiredSpace > pageHeight - 20) {
			doc.addPage();
			yPosition = 20;
			currentPage++;
		}
	};

	// Helper function to add section headers
	const addSectionHeader = (title: string, y: number) => {
		checkPageSpace(20);
		doc.setFontSize(16);
		doc.setFont("helvetica", "bold");
		doc.setTextColor(0, 0, 0);
		doc.text(title, 20, yPosition);
		// Add underline
		doc.setLineWidth(0.5);
		doc.line(20, yPosition + 2, 20 + doc.getTextWidth(title), yPosition + 2);
		doc.setFont("helvetica", "normal");
		yPosition += 12;
		return yPosition;
	};

	// Header
	doc.setFontSize(24);
	doc.setFont("helvetica", "bold");
	doc.setTextColor(0, 0, 0);
	doc.text(data.personalInfo.name, 20, yPosition);
	yPosition += 10;

	doc.setFontSize(12);
	doc.setFont("helvetica", "normal");
	doc.text(data.personalInfo.email, 20, yPosition);
	yPosition += 7;
	doc.text(data.personalInfo.linkedin, 20, yPosition);
	yPosition += 7;
	doc.text(data.personalInfo.github, 20, yPosition);
	yPosition += 7;
	doc.text(data.personalInfo.location, 20, yPosition);
	yPosition += 20;

	// Professional Summary
	yPosition = addSectionHeader("Professional Summary", yPosition);
	yPosition = addText(data.summary, 20, yPosition, pageWidth - 40) + 10;

	// Skills
	yPosition = addSectionHeader("Technical Skills", yPosition);
	yPosition = addText(data.skills.join(" • "), 20, yPosition, pageWidth - 40) + 10;

	// Experience
	yPosition = addSectionHeader("Professional Experience", yPosition);
	data.experience.forEach(exp => {
		checkPageSpace(30);
		doc.setFontSize(12);
		doc.setFont("helvetica", "bold");
		doc.text(`${exp.title} | ${exp.company}`, 20, yPosition);
		yPosition += 6;
		doc.setFontSize(10);
		doc.setFont("helvetica", "normal");
		doc.text(exp.period, 20, yPosition);
		yPosition += 8;
		exp.achievements.forEach(achievement => {
			yPosition = addText(`• ${achievement}`, 25, yPosition, pageWidth - 45) + 3;
		});
		yPosition += 5;
	});

	// Education
	yPosition = addSectionHeader("Education", yPosition);
	data.education.forEach(edu => {
		checkPageSpace(20);
		doc.setFontSize(12);
		doc.setFont("helvetica", "bold");
		doc.text(edu.degree, 20, yPosition);
		yPosition += 6;
		doc.setFontSize(10);
		doc.setFont("helvetica", "normal");
		doc.text(`${edu.institution} | ${edu.period}`, 20, yPosition);
		yPosition += 8;
	});

	// Certifications
	yPosition = addSectionHeader("Certifications", yPosition);
	data.certifications.forEach(cert => {
		checkPageSpace(15);
		doc.setFontSize(10);
		doc.setFont("helvetica", "bold");
		doc.text(cert.name, 20, yPosition);
		yPosition += 5;
		doc.setFont("helvetica", "normal");
		doc.text(`${cert.issuer} | ${cert.date}`, 20, yPosition);
		yPosition += 6;
	});

	// Projects
	yPosition = addSectionHeader("Projects", yPosition);
	data.projects.forEach(project => {
		checkPageSpace(20);
		doc.setFontSize(10);
		doc.setFont("helvetica", "bold");
		doc.text(project.name, 20, yPosition);
		yPosition += 5;
		doc.setFont("helvetica", "normal");
		yPosition = addText(project.description, 20, yPosition, pageWidth - 40) + 5;
	});

	// Download the PDF
	doc.save(`${data.title}_Resume.pdf`);
}
