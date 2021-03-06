export default [
	{
		sessionName: `Day 1 Keynote`,
		speaker: [
			{
				name: "Adrian Cockcroft",
				role: "VP Cloud Architecture Strategy at AWS",
				speakerImage: "https://i.ibb.co/2ZXTDWM/Adrian-AWS.png",
				companyLogo:
					"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fphoenixnap.com%2Fwp-content%2Fuploads%2F2017%2F11%2Faws_logo_smile_white-250x163.png&f=1&nofb=1",
				modalLogo: "/images/keynote_speaker1.jpg",
				linkedInProfileLink:
					"https://www.linkedin.com/in/adriancockcroft/",
				twitterProfileLink: "https://twitter.com/adrianco",
			},
		],
		time: "8:00 AM",
		startDateTime: "10 Feb 2021 08:00:00 -0800",
		endDateTime: "10 Feb 2021 09:00:00 -0800",
		description: "A talk on cloud native Chaos Engineering.",
		tags: ["Keynote"],
		id: 0,
	},
	{
		time: "9:00 AM",
		duration: "(45min)",
		startDateTime: "10 Feb 2021 09:00:00 -0800",
		endDateTime: "10 Feb 2021 09:45:00 -0800",
		speaker1: {
			sessionName: `A powerful framework for network chaos experiments`,
			speaker: [
				{
					name: "Andreas Krivas",
					role: "Engineering Manager",
					speakerImage:
						"https://i.ibb.co/thXJGpp/Andreas-Container-Solutions.png",
					companyLogo:
						"https://i.ibb.co/Jmy4RV4/container-Solutions.png",
					modalLogo: "/speakers/Andreas_ContainerSolutions-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/andreas-krivas",
					twitterProfileLink: "https://twitter.com/AndreasKrivas",
				},
			],
			description:
				"Some say that large microservices architectures have an impact on performance as there is higher network complexity. You take the blue pill, the story ends. You take the red pill, you stay in Chaos Wonderland and I show you how to uncover hidden issues via fine-grained network chaos. Follow me.\r\n\r\nIn a microservices architecture, the services tend to become simpler but the overall system complexity is increasing. This could impact performance, security, stability and generally create more operational overhead. In this talk, we will dive into a solution that can execute declarative and fine-grained network chaos experiments which test the resilience of one or more microservices. We will show how we can use open-source tools in combination with core Linux utilities like Traffic Control to create a very powerful framework for Kubernetes that can affect both internal and external to the cluster workloads.",
			background: "rgba(123, 143, 234, 0.12)",
			tags: ["Tools/Framework"],
			id: 1,
		},
		speaker2: {
			sessionName: `Building on System Resilience with Chaos Engineering for Serverless Applications on AWS`,
			speaker: [
				{
					name: "Renaldi Gondosubroto",
					role: "Founder & Project Leader",
					speakerImage: "https://i.ibb.co/GH58CRS/Renaldo-GRES.png",
					companyLogo: "https://i.ibb.co/fxM2vMh/GRES-STUDIO.png",
					modalLogo: "/speakers/Renaldi_GRES-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/renaldigondosubroto",
					twitterProfileLink: "http://twitter.com/Renaldig",
				},
			],
			description:
				"With Work From Home being widespread due to the Covid-19 pandemic, Cloud Engineering has become more needed than ever due to the shift of applications to the cloud. This talk will discuss how teams plan for and execute chaos engineering to ensure resiliency and availability in serverless projects.\r\n\r\nWith Work From Home (WFH) becoming widespread as a working practice worldwide due to the Covid-19 pandemic, preparing for unexpected conditions has become more important than ever. More and more businesses have transitioned to seeking better resiliency and availability by transitioning towards and deploying serverless applications on cloud platforms such as AWS. This trend will most likely continue to grow, even after the end of the pandemic, as more start to have their on-premises equipment dependent on the cloud.\r\n\r\nThis talk will discuss how teams can plan for chaos engineering within serverless projects on AWS, and the necessary measures to put in place to improve the system in terms of availability and resiliency. This will include best practices in coding for chaos engineering on serverless applications, considerations to keep in mind when planning chaos engineering for a new serverless project, understanding how to apply chaos to different components of your serverless application infrastructure while fixing things as they break, how to work with error and latency injection on your serverless application and setting up a disaster recovery plan to apply chaos to and develop. Alongside this, I will also give a case study of one of my own projects as well to allow attendees to better visualize how these are all applied within a use case's context.\r\n\r\nThis talk will be supported by best practices and design patterns that I will talk about based on my experiences with applying it myself for Chaos Engineering in my projects on AWS. Attendees will leave the session feeling ready to apply chaos engineering to for their own serverless application projects.",
			background: "rgba(255, 8, 88, 0.2)",
			tags: ["Case Study"],
			id: 2,
		},
	},
	{
		time: "9:45 AM",
		duration: "(45min)",
		startDateTime: "10 Feb 2021 09:45:00 -0800",
		endDateTime: "10 Feb 2021 10:30:00 -0800",
		speaker1: {
			sessionName: `Create Chaos in Databases`,
			speaker: [
				{
					name: "Vadim Tkachenko",
					role: "Co-Founder & CTO",
					speakerImage: "https://i.ibb.co/p19dw98/Vadim-Percona.png",
					companyLogo: "https://i.ibb.co/Cm4YkjD/Percona.png",
					modalLogo: "/speakers/Vadim_Percona-min.jpg",
					linkedInProfileLink: "https://www.linkedin.com/in/vadimtk",
					twitterProfileLink: "https://twitter.com/VadimTk",
				},
			],
			description:
				"Database is a critical piece of the infrastructure. With applying  some chaos we can improve resiliency and reliability of a system that handles our data.\r\n\r\nIn this talk I will discuss how we evaluate resiliency and reliability of our Percona XtraDB Cluster Operator (MySQL) and Percona Server for MongoDB Operator. We run MySQL and MongoDB in Kubernetes and we are looking to proving automatic deployment and management of database nodes and we need to make sure our data and management layer is able to sustain different kind of failures. For this I will discuss what kind of failures we are looking for, how we apply them and how database handle them.",
			background: "rgba(234, 220, 133, 0.2)",
			tags: ["Case Study"],
			id: 3,
		},
		speaker2: {
			sessionName: `Chaos Engineering in Telco Cloudnative Infra`,
			speaker: [
				{
					name: "Vaibhav Chopra",
					role: "Engineering Manager",
					speakerImage: "https://i.ibb.co/682wyTZ/Vaibhav-Orange.png",
					companyLogo: "https://i.ibb.co/GpG9PJg/image-43.png",
					modalLogo: "/speakers/Vaibhav_Orange-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/vaibhav16dec",
					twitterProfileLink: "https://twitter.com/VAIBHAV16DEC",
				},
				{
					name: "Samar Sidharth",
					role: "Lead Software Engineer",
					speakerImage: "",
					companyLogo: "",
					modalLogo: "/speakers/Samar_Orange-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/samar-sidharth-82110a9b",
					twitterProfileLink: "N/A",
				},
			],
			description:
				"When all Chaos are celebrating a carnival then why not Telco Chaos also joins this party.\nOf course They are many, They are huge and rapidly increasing in this cloud-native evolution \nHence It would be quite interesting where we will discuss some solutions to control their growing population.\r\n\r\nChaos Engineering in Telco Infra\r\n\r\n1) Telco infra background\r\n\r\na)\tKey Features of Telco grade infra and how complex it is?\r\n\r\nb)\tTelco infra v/s IT infra specifically Network and Data plane acceleration techniques \r\n\r\nc)\tDomains/Layers to ensure in a Telco Infra environment such as Data plane, Storage, Security and Most importantly Resiliency                  \r\n\r\n\r\n\r\n2)  Why we need Chaos Engineering in Telco Infra\r\n\r\na)\tNon Tangible Aspects\r\n\r\n•\t Revenue Assurance in 5 9s SLA world\r\n\r\nIn Telco world, Where Revenue is directly linked to data travelling in milliseconds. Assurance and thorough testing is the need of hour.\r\n\r\n•\t Identifying race condition \r\n\r\nHow well the applications are designed to handle race conditions e.g. out of order packet delivery of messages, Low level of load\r\n\r\n•\t Monitoring Enhancements\r\n\r\nRegular/Recursive Tuning of monitoring based on Chaos threshold identification.\r\n\r\n•\tFailure fault tolerations of multiple applications \r\n\r\n To identify how much failure can an application sustain along with successful request\r\nTo validate how an application serving as client to multiple endpoints will behave in case it starts receiving failures from one of them \r\n\r\n•\tConfiguration Tuning \r\n\r\nThere are various parameters in telco applications e.g. session related that need to be aligned for a grace full termination of the session in case of a failure scenario\r\nTimeouts in network: In telecom a session span across various application/servers from the point it was initiated so for \r\n\r\n•\tInfrastructure benchmarking\r\n\r\nTesting at different layers of virtualization getting added, Overlay network testing (latency, timeout) utilizing Chaos\r\n\r\nb)\tTangible Aspects\r\n\r\n•\tOn Prem Infra – \r\n\r\nTelco's affinity towards their datacentres and hence private cloud building requires multiple integration as well as in-house testing of resiliencies\r\n\r\n•\t5G and Edge Solution resiliency-\r\n\r\nLow Latency and high throughput applications are the future and in telco, We were already doing load testing wrt multiple protocols and packet transmissions, with intro of Chaos it increase that capabilities.\r\n\r\n•\tCNFs evolution – \r\n\r\nWhile multi-vendor coming up with their designed Containerized network function, So that need to be validated on standard platform needed for both CSPs and vendors.\r\n\r\n•\tMovement from IaaS to CaaS\r\n\r\nContainerized infra is what everyone targeting and aspire to have in production So Assurance of the CaaS becomes quite important in this journey from virtualization to containerization i.e. from NFVI to CNFi.\r\n\r\n\r\n\r\n3) Litmus K8s resiliency \r\n\r\na)\tHow Litmus is beneficial in this Chaos world\r\n\r\n​    We can leverage the wide variety of the inbuilt cloud native kubernetes test cases and litmus capability to write custom validation test cases.\r\n\r\nb)\tLitmus in Orange Cloud architecture and Use Case discussion/Demo\r\n\r\nHow Litmus fits in Orange Cloud Validation \r\n\r\nThe telco use case that we are covering with chaos testing is for Orange IAAS which is based on Openstack cloud and control plane is hosted on kubernetes along with a lot of third party service integration(Vault, traefik, consul, monitoring etc) so there is a lot of interdependency among these services and in order to validate the impact of one service on the other we are exploring litmus to validate it.",
			background: "rgba(226, 115, 23, 0.2)",
			tags: ["Case Study"],
			id: 4,
		},
	},
	{
		time: "10:45 AM",
		duration: "(45min)",
		startDateTime: "10 Feb 2021 10:45:00 -0800",
		endDateTime: "10 Feb 2021 11:30:00 -0800",
		speaker1: {
			sessionName: `Improve Application Resiliency with AWS Fault Injection Simulator`,
			speaker: [
				{
					name: "Gunnar Grosch",
					role: "Senior Developer Advocate",
					speakerImage: "https://i.ibb.co/bb1T6XL/Gunnar-AWS.png",
					companyLogo: "https://i.ibb.co/6bTj0sH/Group.png",
					modalLogo: "/speakers/Gunnar_AWS-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/gunnargrosch",
					twitterProfileLink: "https://twitter.com/GunnarGrosch",
				},
			],
			description:
				"AWS Fault Injection Simulator is a fully managed chaos engineering service that helps you improve application resiliency by making it easy and safe to perform controlled chaos experiments. In this session, see how to use AWS Fault Injection Simulator to make applications more resilient to failure.\r\n\r\nWith the wide adoption of microservices and large-scale distributed systems, architectures have grown increasingly complex and can be hard to understand and difficult to debug and test. These systems sometimes have unpredictable behaviors caused by unforeseen turbulent events that can cause cascading and catastrophic failures. Since failures have become more and more chaotic in nature, we must turn to chaos engineering in order to reveal weaknesses before they become outages, and to gain confidence in the system’s resilience to failures.\r\n\r\nAWS Fault Injection Simulator is a fully managed chaos engineering service that helps you improve application resiliency by making it easy and safe to perform controlled chaos engineering experiments on AWS. In this session, see an overview of chaos engineering and AWS Fault Injection Simulator, and then see a demo of how to use AWS Fault Injection Simulator to make applications more resilient to failure.\r\n\r\nSession talks about the complexity of modern distributed systems, how chaos engineering can help, and gives an overview of AWS Fault Injection Simulator.",
			background: "rgba(255, 142, 38, 0.3)",
			tags: ["Tools/Framework"],
			id: 5,
		},
		speaker2: {
			sessionName: "Chaos testing Red Hat Openshift Virtualization",
			speaker: [
				{
					name: "Jordi Gil",
					role: "Senior Software Engineer,",
					speakerImage: "https://i.ibb.co/cQkyhCm/Jordi-Red-Hat.png",
					companyLogo: "https://i.ibb.co/phNfHMW/Red-Hat-Logo.png",
					modalLogo: "/speakers/Jordi_RedHat-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/jordigilh",
					twitterProfileLink: "N/A",
				},
			],
			description:
				"A talk on Chaos testing Red Hat Openshift Virtualization.",
			background: "rgba(240, 31, 64, 0.15)",
			tags: ["Chaos Engineering", "Case Study"],
			id: 6,
		},
	},
	{
		time: "11:30 AM",
		duration: "(45min)",
		startDateTime: "10 Feb 2021 11:30:00 -0800",
		endDateTime: "10 Feb 2021 12:15:00 -0800",
		speaker1: {
			sessionName: `Event-Driven Chaos Injection`,
			speaker: [
				{
					name: "Raj Babu Das",
					role: "Software Engineer",
					speakerImage: "https://i.ibb.co/5LfXWMQ/Raj-Maydata.png",
					companyLogo: "/images/ChaosNative-min.png",
					modalLogo: "/speakers/Raj_ChaosNative-min.jpg",
					linkedInProfileLink: "https://www.linkedin.com/in/rajdas98",
					twitterProfileLink: "https://twitter.com/rajdas98",
				},
				{
					name: "Soumya Ghosh Dastidar",
					role: "Software Engineer",
					speakerImage:
						"https://i.ibb.co/fVRDQCS/Soumya-Mayadata.png",
					companyLogo: "/images/ChaosNative-min.png",
					modalLogo: "/speakers/Soumya_ChaosNative-min.jpg",
					linkedInProfileLink: "https://www.linkedin.com/in/gdsoumya",
					twitterProfileLink: "https://twitter.com/gdsoumya",
				},
			],
			description:
				"Running chaos-experiments manually or in CI/CD pipelines? We'll show you how you can configure your environment to trigger chaos-experiments automatically with changes in application state using Litmus' powerful event-driven chaos injection features and seamless Git integration.\r\n\r\nThe need for chaos engineering has grown over the years, and now it’s well understood. According to the one of prediction by a CNCF TOC member, Chaos engineering will be one of important technology in 2021. Its usage in CI/CD pipelines, implemented via “chaos stages” in frameworks such as Spinnaker & Keptn, are further proof of Chaos Engineering’s ubiquity over the earlier ops-driven, AWS game day oriented models.\r\n\r\nWith the above use cases, a lot of tools are finding alternative ways to induce chaos into the system. Here, we will discuss the event-driven chaos injection which will help to trigger chaos based on any specific change in the application’s manifest. We will show alongside with Gitops, a practice in which the changes are pushed to a Git source that houses the deployment artifacts picked up by a GitOps operator (ex: ArgoCD/WeaveFlux) that updates the Kubernetes cluster, ensuring a synched declarative source of truth for the application.  We have tested much as the application in dev environments, there is undeniable value in subjecting it to controlled failure in staging/prod environments, especially upon being updated with new specifications. These experiments offer a nuanced view of stability that can trigger rollbacks or alert stakeholders on potential issues.\r\n\r\nIn this talk, Soumya Ghosh & Raj Babu Das will demonstrate an event-driven chaos injection mechanism that has worked alongside standard GitOps tooling, wherein subscribing applications are automatically injected with chaos upon being updated in the cluster. The presentation will also discuss how Git is used as the source of truth for the chaos workflows themselves, extending the GitOps maxim of “All Operations on Git’’ to chaos too!\r\n\r\nThe flow of the talk will be :\r\n\r\n1. Short introduction to Chaos-engineering and event-driven chaos injection (7mins)\r\n\r\n2. Discussion on how event-driven chaos can help and some use cases where it can be utilized (7 mins)\r\n\r\n3. Hands-on demo (15mins)\r\n",
			background: "rgba(0, 99, 255, 0.05)",
			tags: ["Chaos Engineering", "CI/CD"],
			id: 7,
		},
		speaker2: {
			sessionName: `Evolution in Chaos Engineering`,
			speaker: [
				{
					name: "Sumit Nagal",
					role: "Principal Engineer",
					speakerImage: "https://i.ibb.co/rf2Hwv7/Sumit-Intuit.png",
					companyLogo: "https://i.ibb.co/R2sN5Vy/Intuit.png",
					modalLogo: "/speakers/Sumit_Intuit-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/sumitnagal",
					twitterProfileLink: "https://twitter.com/sumitnagal",
				},
			],
			description:
				"Gone are the days when we lived on the stone edge; we have gone through the most significant evolution in humans. A similar shift is happening in chaos Engineering, wherein in the past, minimal visibility with a limited tool like chaos-monkey, Symbian army,  we were building finite solutions. Today we have Chaos tool-kit, litmus-chaos, Chaos Mesh type of open source & Gremlin, ChaosIQ like a commercial solution for more extensive adoption.  Thanks to massive growth in infrastructure, which made reliability as necessary attributed to the Application System Design.  Today, many companies participate in GAME Day, and Chaos is a company-wide initiative. On Chaos Many Open source and commercial solutions available on various platforms.CNCF has a couple of Chaos engineering solutions on sandbox projects, which brings awareness to Chaos.  Now, Application resiliency and service Stability has broadened to Technology,  Platform, and Cloud. It is an evolution from Netflix chaos-monkey to AWS FIS, creating a real buzz on cloud providers. Now, chaos engineering becomes a first-class citizen on CNCF radar. Chaos' conference and awareness on social media is another dimension where chaos Carnival is part of that evolution.",
			background: "rgba(0, 119, 197, 0.15)",
			tags: ["Chaos Engineering", "Culture"],

			id: 8,
		},
	},
	{
		content: "break",
	},
	{
		time: "1:45 PM",
		duration: "(45min)",
		startDateTime: "10 Feb 2021 13:45:00 -0800",
		endDateTime: "10 Feb 2021 14:30:00 -0800",
		speaker1: {
			sessionName: `Achieving Reliability in a Microservices-Based Environment using Observability`,
			speaker: [
				{
					name: "Chinmay Gaikwad",
					role: "Technical Evangelist",
					speakerImage:
						"https://i.ibb.co/bFsjYBG/Chinmay-Epsagon.png",
					companyLogo: "https://i.ibb.co/NZQczQ1/Group-3510.png",
					modalLogo: "/speakers/Chinmay_Epsagon-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/chinmay-gaikwad",
					twitterProfileLink: "N/A",
				},
			],
			description:
				"The evolution of architecture from monolithic to microservices-based has enabled organizations to meet the ever-evolving needs of their customers. The need for getting insights into these microservices has become critical for developers and operations teams alike. However, achieving reliability in microservices-based environments is not trivial. In this session, we will explore how observability plays a critical role in the microservices world and Chaos Engineering.We will deep dive into distributed tracing to achieve full observability and monitoring for production environments. Finally, we will discuss the checklist that every DevOps person shouldlook into for incorporating observability into their environment.",
			background: "rgba(12, 131, 95, 0.3)",
			tags: ["Observability"],
			id: 9,
		},
		speaker2: {
			sessionName: `Clear the ring for Chaos Engineering at Vertrieb Deutsche Bahn! One year sensations and attractions!`,
			speaker: [
				{
					name: "Maik Figura",
					role: "IT Consultant",
					speakerImage:
						"https://i.ibb.co/cwFNVDF/Maik-Codecentric.png",
					companyLogo: "https://i.ibb.co/WkmGnBH/codecentric.png",
					modalLogo: "/speakers/Maik_Codecentric-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/maik-figura-ab308a4b",
					twitterProfileLink: "https://twitter.com/maiksensi",
				},
				{
					name: "Oliver Kracht",
					role: "Implementation Lead",
					speakerImage: "https://i.ibb.co/kGkTmJC/Oliver-DB.png",
					companyLogo: "https://i.ibb.co/g7NczbR/DB.png",
					modalLogo: "/speakers/Oliver_DB-min.jpg",
					linkedInProfileLink: "N/A",
					twitterProfileLink: "N/A",
				},
				{
					name: "Jonas vor dem Berge",
					role: "Implementation Lead",
					speakerImage: "https://i.ibb.co/McKcyyy/Jonas-DB.png",
					companyLogo: "https://i.ibb.co/g7NczbR/DB.png",
					modalLogo: "/speakers/Jonas_DB-min.jpg",
					linkedInProfileLink: "N/A",
					twitterProfileLink: "N/A",
				},
			],
			description:
				"Let's talk about some experiences, learnings and failures. Your asking about our learning environment? Well there you go: 300+ microservices, 100+ developers, 100+ Gamedays, countless experiments with various outcomes :)\r\n\r\nHave you ever been to the circus?\r\n\r\nAs software developers, we have much more in common with circus trainers than we think. On the one hand, we have to tame and maintain a steadily growing zoo of technologies and on the other hand, the undesirable audience expects us to show more and more astonishing features within a short period of time. On top of that, we’re also shooting right into the circus ring with our big CI/CD cannon. That can lead to interesting effects, because we’re shooting while a show is running.\r\n\r\nIn this session you will learn about our top 5 excuses not to do Chaos Engineering and how even the most hostile environment can be used to do Chaos Engineering.\r\n\r\nWhatever your role is, product owner or developer, we will share our experience in establishing a chaos engineering centered culture at DB Vertrieb for future ringmasters to withstand turbulent conditions in production and ultimately to satisfy your customer's expectations.",
			background: "rgba(128, 251, 198, 0.2)",
			tags: ["Case Study"],
			id: 10,
		},
	},
	{
		time: "2:30 PM",
		duration: "(45min)",
		startDateTime: "10 Feb 2021 14:30:00 -0800",
		endDateTime: "10 Feb 2021 15:15:00 -0800",
		speaker1: {
			sessionName: `The Psychology of Chaos Engineering`,
			speaker: [
				{
					name: "Julie Gunderson",
					role: "DevOps Advocate",
					speakerImage:
						"https://i.ibb.co/LkDH2Y8/Julie-Pagerduty.png",
					companyLogo: "https://i.ibb.co/JrbQH5v/Pager-Duty.png",
					modalLogo: "/speakers/Julie_PagerDuty-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/juliegunderson",
					twitterProfileLink: "https://twitter.com/Julie_Gund",
				},
			],
			description:
				"We understand why chaos engineering works from a technical perspective, but what about the humans?\r\n\r\nChaos Engineering, failure injection, and similar practices have verified benefits to the resilience of systems and infrastructure. But can they provide similar resilience to teams and people? What are the effects and impacts on the humans involved in the systems? This talk will delve into both positive and negative outcomes to all the groups of people involved - including users, engineers, product, and business owners. \r\n\r\nUsing case studies from organizations where chaos engineering has been implemented, we will explore the changes in attitude that these practices create. This talk will include a brief overview of chaos engineering practices for unfamiliar members of the audience, but the main focus will be on human elements. I will discuss successful implementations, as well as challenges faced in teams where chaos was a “success” from a technical perspective, but contained negative impact for the people involved. \r\n\r\nAfter seeing this talk, attendees will have a better understanding of the human factors involved in chaos engineering, good practices to care for the people and teams working with chaos, and be even more excited about this practice. ",
			background: "rgba(6, 172, 56, 0.2)",
			tags: ["Culture"],
			id: 11,
		},
		speaker2: {
			sessionName: `Introduction to OWASP`,
			speaker: [
				{
					name: "Gunnard Engebreth",
					role: "",
					speakerImage:
						"https://i.ibb.co/pyN9mhx/Gunnard-Power-Code.png",
					companyLogo: "N/A",
					modalLogo: "/speakers/Gunnard-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/%F0%9F%92%BB-gunnard-engebreth-ab446512",
					twitterProfileLink: "https://twitter.com/gunnard",
				},
			],
			description:
				"Keeping up to date on current security threats is a full-time job. As a developer, you already have one. OWASP is a community-based team of security experts that can influence the way you code future projects, analyse your current code, and grow as a developer.\r\n\r\nThis workshop will introduce, walk-through and leave you prepared to engage with the internet’s best defense against hacking! I will familiarize you with OWASP and where they came from, what they do and where they are going. We will step through some challenges in the Juice Shop demo they have, familiarizing everyone with the project. I will also show off some other work by OWASP that is leading the way in defense against hackers.\r\n\r\n\r\nWhat is OWASP? - 10 min\r\n\r\nHistory\r\nPrinciples\r\nOWASP Top 10 \r\nExample: XML External Entities (XXE)\r\n\r\n\r\nXXE - 5 min\r\n\r\nWhat is it?\r\nHow to perform\r\nXInclude\r\nPrevention\r\n\r\n\r\nProactive > Reactive - 10 min\r\n\r\n“Exploitation of insufficient logging and monitoring is the bedrock of nearly every major incident”\r\nImportance of Log monitoring (which logs are watching)\r\nWhat to look for (what people are looking for, covering your tracks)\r\nReal world example of catching a malicious nationstate actor via IP\r\nOWASP recommendations for monitoring\r\n\r\n\r\nThe Mind of an Attacker - \r\n\r\npuzzles vs vault doors\r\nOWASP “The Juice Shop”\r\nChallenge 1: Find the carfully hidden ‘Score Board’ page.\r\n– – Breakdown of source-code\r\n– – analyizing .js files\r\nChallenge 2: Log in with the administrator’s user account.\r\n– – basic or 1=1 sql injection\r\n– – how to prevent and find in logs\r\n\r\n\r\nOWASP ZAP - 10 min\r\n\r\nDescription of project\r\nDemo on live site\r\nRecap and OWASP takeaways",
			background: "rgba(5, 167, 225, 0.08)",
			tags: ["Tools/Framework"],
			id: 12,
		},
	},
	{
		time: "3:15 PM",
		duration: "(30min)",
		startDateTime: "10 Feb 2021 15:15:00 -0800",
		endDateTime: "10 Feb 2021 15:45:00 -0800",
		speaker1: {
			sessionName: `Chaos Engineering the Chaos Engineers`,
			speaker: [
				{
					name: "Jason Yee",
					role: "Director of Advocacy",
					speakerImage: "https://i.ibb.co/fGP0fPZ/Jason-Gremlin.png",
					companyLogo: "https://i.ibb.co/DK17SWq/gremlin.png",
					modalLogo: "/speakers/Jason_Gremlin-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/gitbisect",
					twitterProfileLink: "https://twitter.com/gitbisect",
				},
			],
			description:
				"Even when your entire business is Chaos Engineering, fully embracing the process can present challenges. I’ll share what we’ve learned & how we’ve adapted our approach to find success.\r\n\r\nEating your own dog food can be difficult, especially when you’re too busy to slow down and eat. Despite being proponents of Chaos Engineering for a very long time, running Chaos Engineering internally at Gremlin hasn’t always been easy. Like most companies, feature work takes high priority and reliability efforts were often a distant second, especially as the company grew.\r\n\r\nIn this talk, I’ll share how Gremlin experimented with our own Chaos Engineering practices, what we tried, what worked, and what didn’t. I’ll also discuss ways that you can keep your own Chaos Engineering practices lightweight and quick so you can strike the right balance between feature work and reliability in your own organization.\r\n\r\nThis talk focuses on our evolution from larger, traditional gamedays to smaller, more efficient ones that promote more regular practices.",
			background: "rgba(12, 131, 95, 0.3)",
			tags: ["Culture"],
			id: 13,
		},
		speaker2: {
			sessionName: `Building Reliability Pipelines with Chaos Workflows`,
			speaker: [
				{
					name: "Michael Knyazev",
					role: "DevOps Consultant",
					speakerImage: "https://i.ibb.co/s3YB7Ly/Michael-IAG.png",
					companyLogo: "https://i.ibb.co/BnsWkPN/IAG.png",
					modalLogo: "/speakers/Michael_IAG-min.jpg",
					linkedInProfileLink:
						"https://www.linkedin.com/in/mikhailkniazev",
					twitterProfileLink: "N/A",
				},
			],
			description:
				"This talk describes how Chaos Engineering techniques were used at Insurance Australia Group to ensure better systems reliability.\nIt goes into architectural details of Reliability Pipeline, such as: the Kubernetes resources organization, Litmus components orchestration, leveraging Argo Workflows.",
			background: "rgba(0, 124, 188, 0.25)",
			tags: ["CI/CD"],
			id: 14,
		},
	},
];
