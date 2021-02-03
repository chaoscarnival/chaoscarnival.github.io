export default [
	//Day 2 (Feb 11)
	{
		sessionName: `Day 2 Keynote`,
		speaker: [
			{
				name: "Uma Mukkara",
				role:
					"Maintainer of LitmusChaos project, Co-founder & COO at MayaData",
				speakerImage: "https://i.ibb.co/GsXnxnC/Group-3278.png",
				companyLogo: "https://i.ibb.co/X35X6hP/Mayadata.png",
				modalLogo: "/images/keynote_speaker2.jpg",
				linkedInProfileLink: "https://www.linkedin.com/in/uma-mukkara/",
				twitterProfileLink: "https://twitter.com/Uma_Mukkara",
			},
		],
		time: "8:00 AM",
		startDateTime: "11 Feb 2021 08:00:00 -0800",
		endDateTime: "11 Feb 2021 09:00:00 -0800",
		description:
			"A large chunk of challenges in the Kubernetes production environments is how to run stateful applications reliably. Each stateful application has many micro services and there is a mesh of such applications creating a tight dependency for running the stateful services successfully. Cloud Native Chaos Engineering is a modern approach to get a shot at predictable resilience in Kubernetes production at scale. Uma Mukkara, maintainer at LitmusChaos project discusses best practices to roll out Cloud Native Chaos Engineering and achieve desired SLOs for Kubernetes platform and applications.",
		tags: ["Keynote"],
		id: 15,
	},
	{
		time: "9:00 AM",
		duration: "(45min)",
		startDateTime: "11 Feb 2021 09:00:00 -0800",
		endDateTime: "11 Feb 2021 09:45:00 -0800",
		speaker1: {
			sessionName: `IBM's Principles of Chaos Engineering`,
			speaker: [
				{
					name: "Robert Barron",
					role: "AIOps, Technology Assets & Architecture",
					speakerImage: "https://i.ibb.co/dJBPhDH/Robert-IBM.png",
					companyLogo: "https://i.ibb.co/Ss17hJx/IBM.png",
					modalLogo: "/speakers/Robert_IBM-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/flyingbarron",
					twitterProfileLink: "https://twitter.com/flyingbarron",
				},
			],
			description:
				"IBM has spent over a century improving the reliability of systems ranging from the largest of mainframes to the smallest of microservices. As part of cultural and organisational improvements we’ve codified a list of principles which define our view of Chaos Engineering.\r\n\r\nIBM's Principles of Chaos Engineering do not replace existing principles, but adapt them and match them to the requirements we have from our clients and from our own internal services. In this session we will describe a little of the process of getting engineers from across to agree on these principles (herding cats is child’s play in comparison) and present the principles and lessons which we agreed upon.\r\n\r\nMost Chaos Engineering examples come from either born-on-the-cloud examples or companies which are significantly smaller than IBM. In this session attendees will learn about adopting Chaos Engineering in a highly complex environment - both from a technical and a cultural perspective. We believe that the principles we present will be relevant to all types of environments and organisations of all sizes.\r\n\r\nWe will also touch on IBM's Chaos Engineering method that allowed internal IBM SREs to successfully build and maintain reliable mission critical services and showcase the benefits of a well formed and measurable Chaos Engineering program for digital transformation engagements.\r\n",
			background: "rgba(31, 112, 193, 0.15)",
			tags: ["Culture"],
			id: 16,
		},
		speaker2: {
			sessionName: `Stand up for Chaos!`,
			speaker: [
				{
					name: "Aravind Putrevu",
					role: "Developer Advocate",
					speakerImage: "https://i.ibb.co/kxCV8vd/Aravind-Intuit.png",
					companyLogo: "https://i.ibb.co/hg13RFp/elastic.png",
					modalLogo: "/speakers/Aravind_Elastic-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/aravindputrevu",
					twitterProfileLink: "https://twitter.com/aravindputrevu",
				},
			],
			description:
				'You might be running an eCommerce, Food Delivery, or a SaaS service. But the common possibility of all these risks or otherwise \n"Chaos" a simple outage might create to your customers, partners, or even internal platform users.\r\n\r\nYou might be running an eCommerce, Food Delivery, or a SaaS service. But the common possibility of all these risks or otherwise \r\n"Chaos" a simple outage might create to your customers, partners, or even internal platform users.\r\n\r\n"Chaos" is an interesting concept of getting ready for the outage day and minimizing the blast radius by using specific methods. \r\n\r\nIn this talk, we\'ll take a look at the story of chaos in an application, "free & open" tools available, some best practices! ',
			background: "rgba(166, 210, 96, 0.3)",
			tags: ["Culture"],
			id: 17,
		},
	},
	{
		time: "9:45 AM",
		duration: "(45min)",
		startDateTime: "11 Feb 2021 09:45:00 -0800",
		endDateTime: "11 Feb 2021 10:30:00 -0800",
		speaker1: {
			sessionName: `In the kitchen: A sprinkle of fire and chaos`,
			speaker: [
				{
					name: "Ana Margarita Medina",
					role: "Senior Chaos Engineer",
					speakerImage:
						"https://i.ibb.co/mTD915T/Aravind-Intuit-1.png",
					companyLogo: "https://i.ibb.co/DK17SWq/gremlin.png",
					modalLogo: "/speakers/Ana_Gremlin-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/anammedina",
					twitterProfileLink: "https://twitter.com/Ana_M_Medina",
				},
			],
			description:
				"Learn by fire! Chaos and Learning!\r\n\r\nHow do you ensure your food tastes good? Or maybe you don't and everyone hates your cooking. How do you learn to avoid burning or cutting yourself while cooking? Is the kitchen on fire or is the smoke alarm just complaining that it needs a new battery? \r\n\r\n\r\nWhat does all of this have to do with the cloud? Chaos and Learning!  She will talk about her favorite ingredient for shipping resilient cloud-native applications. \r\n",
			background: "rgba(12, 131, 95, 0.3)",
			tags: ["Culture"],
			id: 12,
		},
		speaker2: {
			sessionName: `Chaos on VMWare Infrastructure using Litmus`,
			speaker: [
				{
					name: "Delphine Joyneer",
					role: "Senior Software Engineer",
					speakerImage: "https://i.ibb.co/vcKY5Bq/Delphine-Wipro.png",
					companyLogo: "https://i.ibb.co/gMJkYDw/Wipro.png",
					modalLogo: "/speakers/Delphine_Wipro-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/delphine-joyneer-golkonda-bb0386aa",
					twitterProfileLink: "N/A",
				},
				{
					name: "Ankur Ghosh",
					role: "Lead Consultant",
					speakerImage: "",
					companyLogo: "https://i.ibb.co/gMJkYDw/Wipro.png",
					modalLogo: "/speakers/Ankur_Wipro-min.jpg",
					linkedInProfileLink: "N/A",
					twitterProfileLink: "N/A",
				},
			],
			description:
				"To know the capability of VMware environment, we are introducing chaos in the VMware environment based on different parameters.  These chaos will be introduced using litmus which already has a well-defined console/UI to introduce chaos.\r\n\r\nOver three-quarters of all businesses make use of server virtualization and the most common and used solution for Server Virtualization is VMware . In order to check system's capability to withstand turbulent and unexpected conditions, we need to introduce chaos and check how it responds. We are designing the Workflows to test that test the VMware environment based on different parameters like compute, network and storage.\r\n\r\nLitmus  provides console or UI experience for managing, monitoring, and events round chaos workflows. This platform had experiments on non-kubernetes environment such as AWS. As an extension for this, we have added a new VMware experiments which can be used to induce Chaos on VMware virtual machines/Infra. Each work flow can be further improvised by inducing Litmus probes  inside the experiments to validate the resiliency of the virtual machine farm.\r\n\r\nSoon we will be submitting these experiments into Litmus Chaos Hub",
			background: "rgba(183, 22, 112, 0.15)",
			tags: ["Case Study"],
			id: 19,
		},
	},
	{
		time: "10:45 AM",
		duration: "(45min)",
		startDateTime: "11 Feb 2021 10:45:00 -0800",
		endDateTime: "11 Feb 2021 11:30:00 -0800",
		speaker1: {
			sessionName: `Improving Business Resiliency with Chaos Engineering`,
			speaker: [
				{
					name: "Olga Hall",
					role: "Global Head, Amazon Video Availabilty",
					speakerImage: "https://i.ibb.co/2FN5GZF/Olga-Amazon.png",
					companyLogo: "https://i.ibb.co/FwRttVk/Amazon.png",
					modalLogo: "/speakers/Olga_Amazon-min.jpg",
					linkedInProfileLink: "https://www.linkedin.com/in/olgahall",
					twitterProfileLink: "https://twitter.com/ovhall",
				},
			],
			description:
				"An uninterrupted, enjoyable customer experience is our main goal in Prime Video, but we operate in a world of distributed services, network interruptions, and variable workload on our services. How do you run a reliable service in a world full of so much chaos? Embrace it!\r\n\r\nAn uninterrupted, enjoyable customer experience is our main goal in Prime Video, but we operate in a world of distributed services, network interruptions, and variable workload on our services. How do you run a reliable service in a world full of so much chaos? Embrace it!\r\n\r\nIn this session, you will learn how and why adding Chaos Engineering to DevOps practices helps us to build better and more resilient applications. We will share examples of how setting organizational goals for Chaos Engineering transformed engineering culture and helped us delight our customers. In short, Chaos Engineering goals mean delivering on business goals. ",
			background: "rgba(255, 142, 38, 0.3)",
			tags: ["chaos-engineering", "benefits-of-chaos-engineering"],
			id: 20,
		},
		speaker2: {
			sessionName: `It won't make a noise when it breaks`,
			speaker: [
				{
					name: "Piyush Verma",
					role: "Co-Founder & CTO",
					speakerImage: "https://i.ibb.co/d0trDJZ/Piyush-Last9.png",
					companyLogo: "https://i.ibb.co/hMbZ82Q/Last9.png",
					modalLogo: "/speakers/Piyush_Last9-min.jpg",
					linkedInProfileLink: "https://www.linkedin.com/in/meson10",
					twitterProfileLink: "https://twitter.com/realmeson10",
				},
			],
			description:
				"Systems fail but the real failures are the ones from those we learn nothing. This talk is a tale of few such failures that went right under our noses and what we did to prevent those. The techniques covered range from Heterogenous systems, unordered events, missing correlations, and human errors.\r\n\r\nEvery time there is a failure there is a root cause analysis and there is a vow to not repeat the mistake. I will take some curious failures that I have dealt with in the past decade of my work with Infrastructure systems and the steps we had to undertake to:\r\n\r\n1. Isolate\r\n2. Limit the spread\r\n3. Prevent from happening again\r\n\r\n\r\nFailure 1\r\n\r\nAn un-replicated consul configuration results in data loss 25 hours before a countrywide launch. Took a staggering 5 engineers and 20 hours to find one single line of change.\r\n\r\n\r\nFailure 2\r\n\r\nA failed distributed lock in etcD. Forcing us to re-write the whole storage on Consul and hours of migration. Only to find later that it was a clock Issue.\r\n\r\nThe above Isolation and immediate fixes were painfully long, yet doable. \r\nThe real ambition was to prevent *similar* such Incidents from repeating. I will share samples of some of our RCAs and what was missing with each one of those versions. And what the resultant RCA looks like. This section does touch briefly upon blameless RCA but real point of focus is action-ability of an RCA.\r\n\r\n\r\nFailure 3\r\n\r\nIn this section, I will showcase some of the in-house frameworks and technologies (easy to replicate) that were built to turn the prevention/alert section of RCAs into lines of code rather than lines of blurb of text. The goal of this section is to advertise and advocate the need to build/adopt toolchains which promise early-detection and not just faster-resolution.",
			background: "rgba(10, 255, 179, 0.1)",
			tags: ["Tools/Framework"],
			id: 21,
		},
	},
	{
		time: "11:30 AM",
		duration: "(45min)",
		startDateTime: "11 Feb 2021 11:30:00 -0800",
		endDateTime: "11 Feb 2021 12:15:00 -0800",
		speaker1: {
			sessionName: `Getting Started with Observability for Chaos Engineering`,
			speaker: [
				{
					name: "Shelby Spees",
					role: "Developer Advocate",
					speakerImage: "https://i.ibb.co/ss7h8m4/Group-3187.png",
					companyLogo: "https://i.ibb.co/xm8G0VP/Honeycomb.png",
					modalLogo: "/speakers/Shelby_Honeycomb-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/shelbyspees",
					twitterProfileLink: "https://twitter.com/shelbyspees",
				},
			],
			description:
				"How much are you learning from your chaos experiments? How do you know it’s safe to perform them? Learn how to instrument your systems in order to gain confidence and get the most out of chaos, whether you’re injecting it on purpose or it’s already there in your system.\r\n\r\nHow much are you learning from your chaos experiments? How do you know it’s safe to perform them? Learn how to instrument your systems in order to gain confidence and get the most out of chaos, whether you’re injecting it on purpose or it’s already there in your system. This talk explores how Honeycomb’s engineering team leverages high-context telemetry data to measure service heath and risk in order to determine when it’s safe to perform experiments. You’ll also hear the lessons we learned about our backend ingest service after performing controlled experiments. Attendees will come away with next steps for instrumenting for observability in order to get the most out of their own chaos experiments.\r\n\r\nTopics to be covered:\r\n\r\nIntro: Honeycomb is a data storage engine and analytics tool\r\n    * Backend ingests structured event data and indexes on individual fields to support fast querying\r\n* We measure how well we’re doing with SLOs (examples of SLOs for different services)\r\n    * Error budget helps us decide when to take risks and when to invest in reliability\r\n* Structured events capture runtime context and benchmarking data in a format that supports trace visualizations and event-based SLOs\r\n    * Here’s what our instrumentation looks like\r\n*  (if time) Overview of experiment on our backend ingest service and what we learned\r\n    * Reference Graviton2 rollout and 40% cost savings\r\n* Outro: Here’s how to get started instrumenting for observability!\r\n\r\n",
			background: "rgba(254, 210, 103, 0.3)",
			tags: ["Observability"],
			id: 22,
		},
		speaker2: {
			sessionName: `Putting Chaos into Continuous Delivery - how to increase the resilience of your applications`,
			speaker: [
				{
					name: "Jürgen Etzlstorfer",
					role: "Technology Strategist",
					speakerImage:
						"https://i.ibb.co/yR1D8jH/Dynatrace-Speaker.png",
					companyLogo: "https://i.ibb.co/mG1WDb1/Dynatrace.png",
					modalLogo: "/speakers/Dynatrace_Speaker-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/juergenetzlstorfer",
					twitterProfileLink: "https://twitter.com/jetzlstorfer",
				},
			],
			description:
				"We will discuss how you can construct continuous delivery pipelines that include chaos experimentation while simulating real-world load to test the resilience of applications. On top, we implement quality gates based on SLOs to ensure resilient applications are deployed into production.\r\n\r\nContinuous Delivery practices have evolved significantly with the cloud-native paradigm. GitOps & Chaos Engineering are at the forefront of this new CD approach, with an ever-increasing pattern involving Git-backed pipeline definitions that implement “chaos stages” in pre-prod environments to gauge SLO compliance. In this talk, we will discuss how you can construct pipelines that include chaos experimentation (mapped to declarative hypothesis around application steady-state) while simulating real-world load and implement quality gates to ensure resilient applications are deployed into production. All this - in a GitOps native manner. We will also demonstrate how you can include chaos tests to your existing CD pipelines without the need of rewriting them.",
			background: "rgba(128, 52, 193, 0.2)",
			tags: ["CI/CD"],
			id: 23,
		},
	},
	{
		content: "break",
	},
	{
		time: "1:45 PM",
		duration: "(45min)",
		startDateTime: "11 Feb 2021 13:45:00 -0800",
		endDateTime: "11 Feb 2021 14:30:00 -0800",
		speaker1: {
			sessionName: `Tulp: Integrating Artificial Intelligence and Chaos Engineering to Learn from the Incidents`,
			speaker: [
				{
					name: "Yury Niño Roa",
					role: "Senior Site Reliability Engineer",
					speakerImage: "https://i.ibb.co/R29hpSs/Yury-ADL.png",
					companyLogo: "https://i.ibb.co/C9q0pY8/ADLLogo.png",
					modalLogo: "/speakers/Yury_ADL-min.jpg",
					linkedInProfileLink: "https://www.linkedin.com/in/yurynino",
					twitterProfileLink: "https://twitter.com/yurynino",
				},
			],
			description:
				"Web applications living in an imperfect world, exposed to inevitable incidents. It imposes challenges for Artificial Intelligence and Chaos Engineering. Aware of this, our team designed to Tulp integrating these disciplines to Incident Managing to provide useful information for solving a new outage.\r\n\r\nIntroduction\r\n---------------------------------------\r\n---------------------------------------\r\nThe infrastructure required by a software system can be as complex as the software itself. Web applications living in this complex and imperfect world, in which outages are around the corner, are exposed to inevitable incidents. It imposes challenges for many fields, including novel techniques such as Artificial Intelligence and Chaos Engineering.\r\nAware of this, our team designed a platform named Tulp that integrates the knowledge that we have regarding Incident Managing, Artificial Intelligence, and Chaos Engineering. Although every production failure is unique, Tulp should be able to learn from previous incidents in order to provide useful information for solving a new outage. Tulp classifies post mortems available on the web, with the objective of getting the most important information that could be used when we are facing a new storm.\r\nWe would like to tell you about our journey, sharing our experience, what we learned, and the challenges that we identified designing and implementing Tulp.\r\n\r\nMethodology\r\n-----------------------------------------\r\n-----------------------------------------\r\n* Present a background of Incident Management.\r\n* Analyze the anatomy of one postmortem.\r\n* Find common patterns in them.\r\n* Present the design of a tool that uses AI to build models from postmortems.\r\n* Show our learnings designing and building a POC for this.  ",
			background: "rgba(66, 45, 138, 0.2)",
			tags: ["Tools/Framework"],
			id: 24,
		},
		speaker2: {
			sessionName: `Chaos Engineering is fun!`,
			speaker: [
				{
					name: "Eugenio Marzo",
					role: "DevOps Engineer",
					speakerImage:
						"https://i.ibb.co/KmxQ1nS/Eugenio-Source-Sense.png",
					companyLogo:
						"https://i.ibb.co/zNqkz5n/source-Sense-Logo.png",
					modalLogo: "/speakers/Eugenio_SourceSense-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/eugenio-marzo-646a6742",
					twitterProfileLink: "https://twitter.com/luckysideburn",
				},
			],
			description:
				"Hi everyone I would like share with you Kubeinvaders, a gamiefied chaos engineering tool called for Kubernetes. It is like space invaders but aliens are pods or k8s nodes.\r\n\r\nDuring the talk I will show you how you use the special features for doing chaos engineering with fun!",
			background: "rgba(235, 28, 36, 0.2)",
			tags: ["Culture"],
			id: 25,
		},
	},
	{
		time: "2:30 PM",
		duration: "(30min)",
		startDateTime: "11 Feb 2021 14:30:00 -0800",
		endDateTime: "11 Feb 2021 15:15:00 -0800",
		speaker1: {
			sessionName: `Bring Chaos into your Development Environment`,
			speaker: [
				{
					name: "Ramiro Berrelleza",
					role: "Founder & CEO",
					speakerImage: "https://i.ibb.co/C6LdPjR/Ramiro-Okteto.png",
					companyLogo: "https://i.ibb.co/XzsKTY3/Okteto.png",
					modalLogo: "/speakers/Ramiro_Okteto-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/ramiroberrelleza",
					twitterProfileLink: "https://twitter.com/rberrelleza",
				},
			],
			description:
				"Chaos Engineering is a must if you're building Cloud Native applications. If you unit test your code, you should chaos test it. Join us to learn how open-source tools like LitmusChaos, Okteto, and Kubernetes help make Chaos Engineering a core part of your entire team's development environment.\r\n\r\nWhen most organizations think of Chaos Engineering, they visualize it as a stage that happens at the end of the software development cycle. You build, you test,  While this is a good way to start, is far from optimal.\r\n\r\nChaos Engineering, just like security or observability, is a tool that developers can leverage even before they write a line of code. In this talk, Ramiro will talk about how you can use open-source tools like Litmus Chaos, Okteto, and Kubernetes to bring Chaos Engineering into your entire's team development environment on day 1, instead of as a last-minute afterthought.",
			background: "rgba(0, 209, 202, 0.18)",
			tags: ["CI/CD"],
			id: 26,
		},
		speaker2: {
			sessionName: `Chaos Engineering for Cloud Native Security`,
			speaker: [
				{
					name: "Kennedy A Torkura",
					role: "Cloud Security Engineer",
					speakerImage:
						"https://i.ibb.co/48RnQ75/Kennedy-Mattermost.png",
					companyLogo:
						"https://i.ibb.co/QMhVBNw/Mattermost-Logo-Blue-1.png",
					modalLogo: "/speakers/Kennedy_Mattermost-min.jpg",
					linkedInProfileLink: "https://www.linkedin.com/in/aondona",
					twitterProfileLink: "N/A",
				},
			],
			description:
				"Human errors and misconfiguration-based vulnerabilities have become a major cause of data breaches in cloud native infrastructure.  We tackle these security challenges via Risk-driven Fault Injection (RDFI), a novel application of cyber security to chaos engineering.\r\n\r\nHuman errors and misconfiguration-based vulnerabilities have become a major cause of data breaches and other forms of security attacks in cloud-native infrastructure (CNI). The dynamic and complex nature of CNI and the underlying distributed systems further complicate these challenges. Hence, novel security mechanisms are imperative to overcome these challenges.  Such mechanisms must be customer-centric, continuous, not focused on traditional security paradigms like intrusion detection.  We tackle these security challenges via Risk-driven Fault Injection (RDFI), a novel application of cyber security to chaos engineering. Chaos engineering concepts (e.g. Netflix's Chaos Monkey) have become popular since they increase confidence in distributed systems by injecting non-malicious faults (essentially addressing availability concerns) via experimentation techniques. RDFI goes further by adopting security-focused approaches by injecting security faults that trigger security failures that impact integrity, confidentiality, and availability. Safety measures are also employed such that impacted environments can be reversed to secure states.  Therefore, RDFI improves security and resilience drastically, in a continuous and efficient manner and extends the benefits of chaos engineering to cyber security. We have researched and implemented a proof-of-concept for RDFI that targets multi-cloud enterprise environments deployed on AWS and Google Cloud platform. ",
			background: "rgba(82, 145, 202, 0.2)",
			tags: ["Security"],
			id: 27,
		},
	},
	{
		time: "3:15 PM",
		duration: "(30min)",
		startDateTime: "11 Feb 2021 15:15:00 -0800",
		endDateTime: "11 Feb 2021 15:45:00 -0800",
		speaker1: {
			sessionName: "Creating a learning culture",
			speaker: [
				{
					name: "Amir Shaked",
					role: "Senior VP of R&D",
					speakerImage:
						"https://i.ibb.co/wrz24c2/Amir-Perimeter-X.png",
					companyLogo: "https://i.ibb.co/NWkPT2R/perimeterx-Logo.png",
					modalLogo: "/speakers/Amir_PerimeterX-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/amirshaked",
					twitterProfileLink: "https://twitter.com/amirshaked",
				},
			],
			description:
				"Building and marinating a five 9s system isn’t just about the tools and technologies.\n\r\n\rIn this talk, we will discuss how to create a learning culture using debriefs, what to avoid, and how to instill change in an engineering organization.\r\n\r\nBuilding and marinating a five 9s system isn’t just about the tools and technologies. Development culture has a big part in how you keep a system available while scaling it up and supporting more features, users, and locations.\r\n\r\nA healthy learning culture, supporting the development, not repairing mistakes, and identifying weak points is another tool in the engineering toolbox.\r\n\r\nIn this talk, we will discuss how to create a learning culture using debriefs, what to avoid, and how to instill change in an engineering organization.\r\n\r\nThe talk will cover our path to culture change, examples, common pitfalls to avoid.",
			background: "rgba(240, 31, 64, 0.15)",
			tags: ["Culture"],
			id: 28,
		},
		speaker2: {
			sessionName: `Chaos with Care`,
			speaker: [
				{
					name: "Carl Chesser",
					role: "Principal Engineer",
					speakerImage: "https://i.ibb.co/5L1bPw9/Carl-Cerner.png",
					companyLogo: "https://i.ibb.co/jr4hN1m/Cerner.png",
					modalLogo: "/speakers/Carl_Cerner-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/carl-chesser",
					twitterProfileLink: "https://twitter.com/che55er",
				},
			],
			description:
				"Oftentimes, chaos engineering is viewed as a source of risk versus one that can reduce risk to their systems. This talk provides a guide on how to influence people on this approach, by growing and showing how it can reduce risk that is important to your systems.\r\n\r\nWe all care about reliability. It is often assumed that any new feature is reliable; however, we recognize it is not a free property of the systems we build.\r\nOur speed to market with newer features and the inevitable growth of our systems can be combative forces to the reliability that we pursue. Chaos engineering is a practice that can continuously improve our reliability, but it often comes with a cost that must be balanced with the expectation of newer features.\r\n\r\nIn this talk, we will discuss how to introduce and grow chaos engineering in your organization. This includes how to effectively communicate this approach with leadership and related teams, strategies on how to start small and expand into more risk adverse environments, and valuable lessons learned on making it effective within your systems. Approaches will include specific examples of how teams have applied chaos engineering at Cerner Corporation, a healthcare technology company. From this talk, you will be equipped with ideas on how to safely grow your chaos engineering practice within your organization. \r\n",
			background: "rgba(0, 124, 188, 0.25)",
			tags: ["Culture"],
			id: 29,
		},
	},
];
