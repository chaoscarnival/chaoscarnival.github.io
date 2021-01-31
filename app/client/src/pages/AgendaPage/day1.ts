export default [
	{
		sessionName: `Day 1 Keynote`,
		speaker: [
			{
				name: "Adrian Cockroft",
				role: "VP Cloud Architecture Strategy at AWS",
				speakerImage: "https://i.ibb.co/Bcs2KFd/Adrian-AWS.png",
				companyLogo:
					"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fphoenixnap.com%2Fwp-content%2Fuploads%2F2017%2F11%2Faws_logo_smile_white-250x163.png&f=1&nofb=1",
				modalLogo: "/images/keynote_speaker1.jpg",
			},
		],
		time: "8:00 AM",
		description: "",
		tags: ["Keynote"],
		id: 0,
	},
	{
		time: "9:00 AM",
		duration: "(45min)",
		speaker1: {
			sessionName: `[Session 1] A powerful framework for network chaos experiments note`,
			speaker: [
				{
					name: "Andreas Krivas",
					role: "Engineering Manager",
					speakerImage:
						"https://i.ibb.co/thXJGpp/Andreas-Container-Solutions.png",
					companyLogo:
						"https://i.ibb.co/Jmy4RV4/container-Solutions.png",
					modalLogo: "/speakers/Andreas_ContainerSolutions-min.jpg",
				},
			],
			description: "",
			background: "rgba(123, 143, 234, 0.12)",
			tags: ["Chaos Engineering", "Observability"],
			id: 1,
		},
		speaker2: {
			sessionName: `[Session 2] Building on System Resilience with Chaos Engineering for Serverless Applications on AWS`,
			speaker: [
				{
					name: "Renaldi Gondosubroto",
					role: "Founder & Project Leader",
					speakerImage: "https://i.ibb.co/GH58CRS/Renaldo-GRES.png",
					companyLogo: "https://i.ibb.co/fxM2vMh/GRES-STUDIO.png",
					modalLogo: "/speakers/Renaldi_GRES-min.jpg",
				},
			],
			description: "",
			background: "rgba(255, 8, 88, 0.2)",
			tags: ["Chaos Engineering"],
			id: 2,
		},
	},
	{
		time: "9:45 AM",
		duration: "(45min)",
		speaker1: {
			sessionName: `[Session 3] Create Chaos in Databases`,
			speaker: [
				{
					name: "Vadim Tkachenko",
					role: "C0-Founder & CTO",
					speakerImage: "https://i.ibb.co/p19dw98/Vadim-Percona.png",
					companyLogo: "https://i.ibb.co/Cm4YkjD/Percona.png",
					modalLogo: "/speakers/Vadim_Percona-min.jpg",
				},
			],
			description: "",
			background: "rgba(234, 220, 133, 0.2)",
			tags: ["Chaos Engineering", "Observability"],
			id: 3,
		},
		speaker2: {
			sessionName: `[Session 4] Chaos Engineering in Telco Cloudnative Infra`,
			speaker: [
				{
					name: "Vaibhav Chopra",
					role: "Engineering Manager",
					speakerImage: "https://i.ibb.co/682wyTZ/Vaibhav-Orange.png",
					companyLogo: "https://i.ibb.co/GpG9PJg/image-43.png",
					modalLogo: "/speakers/Vaibhav_Orange-min.jpg",
				},
			],
			description: "",
			background: "rgba(226, 115, 23, 0.2)",
			tags: ["Chaos Engineering"],
			id: 4,
		},
	},
	{
		time: "10:00 AM",
		duration: "(45min)",
		speaker1: {
			sessionName: `[Session 5] Improve Application Resiliency with AWS Fault Injection Simulator`,
			speaker: [
				{
					name: "Gunnar Grosch",
					role: "Senior Developer Advocate",
					speakerImage: "https://i.ibb.co/bb1T6XL/Gunnar-AWS.png",
					companyLogo: "https://i.ibb.co/6bTj0sH/Group.png",
					modalLogo: "/speakers/Gunnar_AWS-min.jpg",
				},
			],
			description: "",
			background: "rgba(255, 142, 38, 0.3)",
			tags: ["Chaos Engineering", "Observability"],
			id: 5,
		},
		speaker2: {
			sessionName: `[Session 6] Creating a learning culture`,
			speaker: [
				{
					name: "Amir Shaked",
					role: "Senior VP of R&D",
					speakerImage:
						"https://i.ibb.co/wrz24c2/Amir-Perimeter-X.png",
					companyLogo: "https://i.ibb.co/NWkPT2R/perimeterx-Logo.png",
					modalLogo: "/speakers/Amir_PerimeterX-min.jpg",
				},
			],
			description: "",
			background: "rgba(240, 31, 64, 0.15)",
			tags: ["Chaos Engineering", "Observability"],
			id: 6,
		},
	},
	{
		time: "10:45 AM",
		duration: "(45min)",
		speaker1: {
			sessionName: `[Session 7] Event-Driven Chaos Injection`,
			speaker: [
				{
					name: "Raj Babu Das",
					role: "Software Engineer",
					speakerImage: "https://i.ibb.co/5LfXWMQ/Raj-Maydata.png",
					companyLogo: "https://i.ibb.co/X35X6hP/Mayadata.png",
					modalLogo: "/speakers/Raj_Mayadata-min.jpg",
				},
				{
					name: "Soumya Ghosh Dastidar",
					role: "Software Engineer",
					speakerImage:
						"https://i.ibb.co/fVRDQCS/Soumya-Mayadata.png",
					companyLogo: "https://i.ibb.co/X35X6hP/Mayadata.png",
					modalLogo: "/speakers/Soumya_Mayadata-min.jpg",
				},
			],
			description: "",
			background: "rgba(0, 99, 255, 0.05)",
			tags: ["Chaos Engineering", "Observability"],
			id: 7,
		},
		speaker2: {
			sessionName: `[Session 8] Chaos Engineering for Cloud Native Security`,
			speaker: [
				{
					name: "Kennedy A Torkura",
					role: "Cloud Security Engineer",
					speakerImage: "",
					companyLogo: "",
					modalLogo: "/images/dummy-min.jpg",
				},
			],
			description: "",
			background: "rgba(82, 145, 202, 0.2)",
			tags: ["Chaos Engineering"],
			id: 8,
		},
	},
	{
		content: "break",
	},
	{
		time: "1:15 PM",
		duration: "(45min)",
		speaker1: {
			sessionName: `[Session 9] Chaos Engineering the Chaos Engineers`,
			speaker: [
				{
					name: "Jason Yee",
					role: "Director of Advocacy",
					speakerImage: "https://i.ibb.co/fGP0fPZ/Jason-Gremlin.png",
					companyLogo: "https://i.ibb.co/DK17SWq/gremlin.png",
					modalLogo: "/speakers/Jason_Gremlin-min.jpg",
				},
			],
			description: "",
			background: "rgba(12, 131, 95, 0.3)",
			tags: ["Chaos Engineering", "Observability"],
			id: 9,
		},
		speaker2: {
			sessionName: `[Session 10] Clear the ring for Chaos Engineering at Vertrieb Deutsche Bahn! One year sensations and attractions!`,
			speaker: [
				{
					name: "Maik Figura",
					role: "IT Consultant",
					speakerImage:
						"https://i.ibb.co/cwFNVDF/Maik-Codecentric.png",
					companyLogo: "https://i.ibb.co/WkmGnBH/codecentric.png",
					modalLogo: "/speakers/Maik_Codecentric-min.jpg",
				},
				{
					name: "Oliver Kracht",
					role: "Implementation Lead",
					speakerImage: "https://i.ibb.co/kGkTmJC/Oliver-DB.png",
					companyLogo: "https://i.ibb.co/g7NczbR/DB.png",
					modalLogo: "/speakers/Oliver_DB-min.jpg",
				},
				{
					name: "Jonas vor dem Berge",
					role: "Implementation Lead",
					speakerImage: "https://i.ibb.co/McKcyyy/Jonas-DB.png",
					companyLogo: "https://i.ibb.co/g7NczbR/DB.png",
					modalLogo: "/speakers/Jonas_DB-min.jpg",
				},
			],
			description: "",
			background: "rgba(128, 251, 198, 0.2)",
			tags: ["Chaos Engineering"],
			id: 10,
		},
	},
	{
		time: "2:00 PM",
		duration: "(30min)",
		speaker1: {
			sessionName: `[Session 11] The Psychology of Chaos Engineering`,
			speaker: [
				{
					name: "Julie Gunderson",
					role: "DevOps Advocate",
					speakerImage:
						"https://i.ibb.co/LkDH2Y8/Julie-Pagerduty.png",
					companyLogo: "https://i.ibb.co/JrbQH5v/Pager-Duty.png",
					modalLogo: "/speakers/Julie_PagerDuty-min.jpg",
				},
			],
			description: "",
			background: "rgba(6, 172, 56, 0.2)",
			tags: ["Chaos Engineering", "Observability"],
			id: 11,
		},
		speaker2: {
			sessionName: `[Session 12] Introduction to OWASP`,
			speaker: [
				{
					name: "Gunnard Engebreth",
					role: "Senior Developer",
					speakerImage:
						"https://i.ibb.co/pyN9mhx/Gunnard-Power-Code.png",
					companyLogo: "https://i.ibb.co/Ht56Ws5/Power-Code.png",
					modalLogo: "/speakers/Gunnard_PowerCode-min.jpg",
				},
			],
			description: "",
			background: "rgba(5, 167, 225, 0.08)",
			tags: ["Chaos Engineering"],
			id: 12,
		},
	},
	{
		time: "2:30 PM",
		duration: "(45min)",
		speaker1: {
			sessionName: "",
			speaker: [
				{
					name: "",
					role: "",
					speakerImage: "",
					companyLogo: "",
					modalLogo: "",
				},
			],
			description: "",
			background: "transparent",
			id: 13,
		},
		speaker2: {
			sessionName: `[Session 13] Building Reliability Pipelines with Chaos Workflows`,
			speaker: [
				{
					name: "Michael Knyazev",
					role: "DevOps Consultant",
					speakerImage: "https://i.ibb.co/s3YB7Ly/Michael-IAG.png",
					companyLogo: "https://i.ibb.co/BnsWkPN/IAG.png",
					modalLogo: "/speakers/Michael_IAG-min.jpg",
				},
			],
			description: "",
			background: "rgba(0, 124, 188, 0.25)",
			tags: ["Chaos Engineering"],
			id: 14,
		},
	},
];
