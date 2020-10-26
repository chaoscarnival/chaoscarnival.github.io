import { Typography, Button } from "@material-ui/core";
import * as React from "react";
import Footer from "../../components/Footer";
import { useStyles } from "./styles";
import MainHeader from "../../components/Header";
import "../../scrollbar.css";
import LazyLoad from 'react-lazy-load';
import WhyToAttend from "../../components/WhyToAttend";
import Sponsors from "../../components/Sponsors";
import JoinCarnival from "../../components/JoinCarnival";
import CallForPapers from "../../components/CallForPapers";
import { Speakers } from '../../components/Speakers';

const imgLink = [
	{
		img: "/images/mohan.jpeg",
		name: "Mohanarangan Muthukumar",
		description: "Software Engineer at Avalara | Host of podcast.yaml Kubernetes podcast | Organizer of Docker Chennai",
		githublink: "https://github.com/extrasalt",
		linkedinlink: "https://www.linkedin.com/in/extrasalt",
	},
	{
		img: "/images/senthil.jpeg",
		name: "Senthil Raja Chermapandian",
		description: "Cloud | Big Data/ ML | Kubernetes | OpenShift | Golang | Python | Open Source Contributor",
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
		description: "Community Manager at LitmusChaos | Chaos Engineering | Kubernetes | Cloud-Native | Open Source",
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
			<div className={classes.rootContainer}>
				<MainHeader inHomePage={false} />
				<div className={classes.wrapContainer}>
					<p className={classes.mainHeader}>
						Behind&nbsp;this&nbsp;great<br />event,&nbsp;there&nbsp;is&nbsp;a<br /><span className={classes.greatTeam}>Great&nbsp;Team.</span>
					</p>
					<p className={classes.mainContent}>
						Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mAliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
					</p>
				</div>
				<div className={classes.teamContainer}>
					{imgLink.map((team) => (
						<div className={classes.cardTeam} style={{ marginRight: 0 }} key={Math.random() * 99999}>
							{/* <a href={team.githublink} target="_blank" rel="noopener noreferrer"> */}
							<LazyLoad offsetTop={100}>
								<img
									src={team.img}
									alt={team.name}
									className={classes.teamImg}
								/>
							</LazyLoad>
							<div className={classes.teamDetails}>
								<div className={classes.teamName}>
									{team.name}
								</div>
								<p className={classes.teaminfo}>
									{team.description}
								</p>
								<div className={classes.teamLinks}>
									<div className={classes.teamLink}>
										<a href={team.githublink} target="_blank" rel="noopener noreferrer">
											<img
												src="/icons/github.svg"
												alt={team.name}
												className={classes.teamlinkIcon}
											/>
										</a>
									</div>
									<div className={classes.teamLink}>
										<a href={team.linkedinlink} target="_blank" rel="noopener noreferrer">
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
			</div >
		</div >
	);
}

export default TeamPage;
