export const resumeContent = {
	resumePages: [
		{
			id: 'overview',
			title: 'Neeraj Yamaji',
			subtitle:
				'Frontend developer focused on React, TypeScript, responsive web experiences, and practical AI-powered developer tools.',
		},
		{
			id: 'profile-focus',
			title: 'About',
			subtitle:
				'Frontend developer building polished, responsive web products with React, TypeScript, and practical AI integrations.',
			summary:
				'I like turning product ideas into interfaces and systems that feel clear, fast, and usable. My work includes real-time dashboards, responsive websites, GitHub-powered matchmaking tools, and AI-assisted code analysis, with a focus on clean React architecture and thoughtful interaction details.',
			highlights: ['ReactJS', 'TypeScript', 'Tailwind CSS', 'Product UI'],
		},
		{
			id: 'technical-range',
			title: 'Full-Stack Range',
			subtitle:
				'Comfortable connecting frontend interfaces with APIs, databases, cloud tools, and AI services.',
			summary:
				'Project work spans Flask, Node.js, Express.js, Firebase, transformer models, Gemini, and matching/recommendation logic.',
			highlights: ['Node.js', 'Express.js', 'Flask', 'Firebase', 'Gemini'],
		},
		{
			id: 'contact',
			title: 'Contact',
			subtitle: '',
			body: [
				'Email: neerajyamaji@gmail.com',
				'LinkedIn: https://linkedin.com/in/neeraj-yamaji',
				'Twitter: https://x.com/n_y_1411/',
				'GitHub: https://github.com/ny1411',
				'Phone: +91-9021017715',
				'WhatsApp: https://wa.me/919021017715',
				'Location: Pune, MH',
			],
			highlights: ['Email', 'LinkedIn', 'GitHub', 'Phone'],
		},
	],
	workExperiences: [
		{
			title: 'Freelance',
			subtitle: 'Remote',
			body: [
				'Developed a premium global telecom top-up platform using Next.js, React, TypeScript, and Tailwind CSS, implementing a scalable App Router architecture, component library, and responsive UI.',
				'Built a scalable telecom backend using Node.js, Express.js, TypeScript, and Supabase (PostgreSQL) implementing JWT authentication, RBAC, rate limiting, security middleware, and modular REST APIs.'
			],
			link: '',
			tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Supabase', 'Node.js', 'Express.js'],
		},
		{
			title: 'PHP Developer at Fermion Infotech',
			subtitle: 'On site, Navi Mumbai, 1 month',
			body: [
				'Built and deployed projects including a Todo App and an E-Commerce Platform in PHP featuring authentication systems, session management, role-based modules, database integration, and responsive user interfaces.',
				'Implemented secure login and password management using bcrypt, and developed interactive frontend features such as form validation, filtering, and dynamic content rendering.'
			],
			link: 'https://drive.google.com/file/d/1p1G7RWdCknapJHaFUDQMkC-2fwJer7_o/view?usp=sharing',
			tags: ['PHP', 'MVC', 'HTML', 'CSS', 'jQuery', 'REST APIs', 'Bootstrap'],
		},
		{
			title: 'Frontend Developer Intern at Yahweh Software Solutions',
			subtitle: 'Remote, Bengaluru, KA, May 2025 - Sept 2025',
			body: [
				'Engineered a Bus Tracking System with live location updates (MapboxGL), while developing responsive and accessible modules for HRMS, Event Management, and Authentication system.',
				'Collaborated with backend engineers to integrate RESTful APIs, develop reusable UI components, and optimize frontend architecture for maintainability, performance, and efficient data flow.',
				'Built scalable ReactJS applications using the Context API for authentication and session management, ensuring responsiveness, cross-browser compatibility, and accessibility across desktop and mobile devices',
			],
			link: 'https://drive.google.com/file/d/1b5qlTdBPUsItcsR__OkyJDukrNN78U7p/view?usp=sharing',
			tags: ['Frontend Development', 'ReactJS', 'Tailwind CSS', 'ERP Systems', 'Supabase', 'MapBoxGL'],
		},
		{
			title: 'Web Developer Intern at Kaizen Softservices',
			subtitle: 'Pune, MH, Jan 2025 - Feb 2025',
			body: [
				'Developed a comprehensive multi-page website using HTML5, CSS3, and JavaScript.',
				'Integrated interactive JavaScript features including form validation, search/filtering, pagination, and dynamic content loading.',
			],
			link: 'https://drive.google.com/file/d/1wxjprxRy5IHJs8iBYombCEBykI_BvIUJ/view?usp=sharing',
			tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
		},
	],
	projectItems: [

		{
			title: 'Founders Directory',
			stack: ['Next.js', 'TypeScript', 'ReactJS', 'Tailwind CSS', 'Firebase', 'Gemini API'],
			body: [
				' Built a startup discovery platform featuring 900+ Y Combinator startups; launched with 12 active users and received 9 Product Hunt upvotes.',
				'Automated data collection through Playwright + Cheerio scraping pipelines to collect, normalize, and upsert startup data into Firebase Firestore.',
				'Designed a scalable Firebase backend with Authentication, Firestore, and protected user profiles supporting AI-powered personalized outreach using Gemini Flash API.',
			],
			links: [
				{ label: 'Source code', href: 'https://github.com/ny1411/founders-directory' },
				{ label: 'Live Demo', href: 'https://www.founders.neerajyamaji.com' },
			],
		},
		{
			title: 'ValidX',
			stack: ['ReactJS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Tesseract OCR', 'OpenCV', 'Python', 'Fast API', 'Solidity'],
			body: [
				'Developed a microservice-based academic certificate verification platform with role-based access control, real-time verification workflows, and Dockerized deployment architecture.',
				'Engineered an AI-assisted document verification pipeline integrating Tesseract OCR, OpenCV-based digital forensics, anomaly detection, semantic certificate hashing, and heuristic tampering analysis for fake certificate detection.',
				'Built scalable verification and trust workflows including JWT authentication, institution-scoped RBAC, blockchain-backed document anchoring, audit logging, OCR orchestration, and deterministic candidate-to-trusted certificate matching.',
				'Implemented blockchain-backed certificate verification workflows using Solidity/EVM smart contracts and Solana Anchor integration for immutable document hash anchoring and public verification.',
			],
			links: [
				{ label: 'Source code', href: 'https://github.com/ombalgude/validator2.o' },
			],
		},
		{
			title: 'GitMatch',
			stack: ['ReactJS', 'TypeScript', 'Node.js', 'Express.js', 'Firebase'],
			body: [
				'Built a Tinder-style dating web application with interactive swipe gestures and dynamic card transitions using Motion animation library.',
				'Architected & implemented a scalable real-time matching algorithm with 65/35 weighted scoring system that analyzes GitHub profiles, tech stacks, and compatibility factors to suggest optimal developer matches.',
				'Engineered a backend repository intelligence pipeline for GitHub profile ingestion, repository metadata extraction, technology detection, contribution analysis, and compatibility scoring using weighted matching algorithms.',
			],
			links: [
				{ label: 'Source code', href: 'https://github.com/ny1411/git-match' },
			],
		},
		{
			title: 'Repolyse',
			stack: ['ReactJS', 'JavaScript', 'Tailwind CSS', 'Flask', 'Python', 'Gemini'],
			body: [
				'Engineered a Flask REST API to analyse GitHub repositories using Google Gemini and 4 transformer models (CodeBERT, RoBERTa, DistilBERT, T5).',
				'Developed a vulnerability detection system using keyword analysis with a 10-point scoring system.',
				'Built documentation generator to produce comprehensive code summaries, quality metrics, and repository-wide coherence analysis',
			],
			links: [
				{ label: 'Source code', href: 'https://github.com/ny1411/repolyse' },
				{ label: 'Live demo', href: 'https://repolyse.vercel.app/' },
			],
		},
	],
	extracurricularExperiences: [
		{
			title: 'Hacktoberfest',
			subtitle: 'Open-Source Contribution, Remote, Oct 2025',
			link: 'https://www.holopin.io/@ny1411',
			tags: ['Open Source', '6 Accepted PRs', 'Features', 'Bug Fixes'],
		},
		{
			title: 'Smart India Hackathon',
			subtitle: 'Hackathon, Sept 2025',
			link: 'https://youtu.be/6J57p__akaA',
			tags: ['Team Leadership', 'Institute Rank 2', 'Hackathon'],
		},
		{
			title: 'Courses & Hackathon Certifications',
			subtitle: 'Selected certification folder from resume',
			link: 'https://drive.google.com/drive/folders/1Rcdef31gItuSz6HHmgi7xpneBRTOkXB4?usp=sharing',
			tags: ['Courses', 'Hackathons', 'Certifications'],
		},
	],
	educationDetails: {
		institution: "TSSM's BSCOER",
		degree: "Bachelor's of Engineering",
		period: 'July 2022 - June 2026',
		grade: 'Pune, MH',
		focus: 'Engineering undergraduate program.',
	},
	skillsAndStack: {
		languages: [
			'JavaScript',
			'TypeScript',
			'Java',
			'PHP',
			'HTML',
			'CSS',
			'Python',
		],
		frontend: [
			'ReactJS',
			'Tailwind CSS',
			'Next.js',
			'Bootstrap',
			'HTML5',
			'CSS3',
			'Responsive Design',
			'Cross-Browser Compatibility',
		],
		backendApis: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs'],
		cloudDatabases: [
			'Firebase',
			'MySQL',
			'Supabase',
			'MongoDB',
			'Google Cloud',
		],
		developerTools: ['VS Code', 'Git', 'NodeJS', 'Collab', 'Jenkins'],
	},
} as const;
