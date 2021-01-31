import * as React from "react";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import "../../scrollbar.css";
import { useStyles } from "./styles";

const imgLink = [
	{
		img: "/images/mohan.jpeg",
		name: "Mohanarangan Muthukumar",
		description:
			"Software Engineer at Avalara | Host of podcast.yaml Kubernetes podcast | Organizer of Docker Chennai",
		githublink: "https://github.com/extrasalt",
		linkedinlink: "https://www.linkedin.com/in/extrasalt",
	},
	{
		img: "/images/senthil.jpeg",
		name: "Senthil Raja Chermapandian",
		description:
			"Cloud | Big Data/ ML | Kubernetes | OpenShift | Golang | Python | Open Source Contributor",
		githublink: "https://github.com/senthilrch",
		linkedinlink: "https://www.linkedin.com/in/senthil-raja-chermapandian",
	},
	{
		img: "/images/abhishekcomp.jpeg",
		name: "Abhishek Mishra",
		description: "Software Engineer at @Saama Research Lab",
		githublink: "https://github.com/abhishekmishragithub",
		linkedinlink: "https://www.linkedin.com/in/stalwartcoder",
	},
	{
		img: "/images/prithvicomp.jpeg",
		name: "Prithvi Raj",
		description:
			"Community Manager at LitmusChaos | Chaos Engineering | Kubernetes | Cloud-Native | Open Source",
		githublink: "https://github.com/prithvi1307",
		linkedinlink: "https://www.linkedin.com/in/prithvi-raj-41b4581a8/",
	},
];

function TeamPage() {
	const classes = useStyles();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className="scrollbar scrollbar-primary">
			<MainHeader />
			<div className={classes.rootContainer}>
				<div className={classes.wrapContainer}>
					<p className={classes.mainHeader}>
						Behind&nbsp;this&nbsp;great
						<br />
						event,&nbsp;there&nbsp;is&nbsp;a
						<br />
						<span className={classes.greatTeam}>
							Great&nbsp;Team.
						</span>
					</p>
				</div>
				<div className={classes.teamContainer}>
					{imgLink.map((team) => (
						<div
							className={classes.cardTeam}
							style={{ marginRight: 0 }}
							key={Math.random() * 99999}
						>
							<img
								src={team.img}
								alt={team.name}
								className={classes.teamImg}
							/>
							<div className={classes.teamDetails}>
								<div className={classes.teamName}>
									{team.name}
								</div>
								<p className={classes.teaminfo}>
									{team.description}
								</p>
								<div className={classes.teamLinks}>
									<div className={classes.teamLink}>
										<a
											href={team.githublink}
											target="_blank"
											rel="noopener noreferrer"
										>
											<img
												src="/icons/github.svg"
												alt={team.name}
												className={classes.teamlinkIcon}
											/>
										</a>
									</div>
									<div className={classes.teamLink}>
										<a
											href={team.linkedinlink}
											target="_blank"
											rel="noopener noreferrer"
										>
											<img
												src="/icons/linkedin.svg"
												alt={team.name}
												className={classes.teamlinkIcon}
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div style={{ marginTop: "auto" }}>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default TeamPage;
