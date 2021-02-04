import { Typography } from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import SponsorBooth from "../../components/SponsorBooth";
import Sponsors from "../../components/Sponsors";
import sponsorBooth from "../../data/sponsorBoothData";
import "../../scrollbar.css";
import { useStyles } from "./styles";

function SponsorBoothsPage() {
	const classes = useStyles();

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Chaos Carnival 2021 sponsor booths</title>
				<meta
					name="keywords"
					content="Chaos carnival 2021, chaos engineering, chaos conference, chaos conference 2021, chaosconf, sponsor booths, chaos engineering 101, cloud native, MayaData, CNCF, Percona, Wipro, Epsagon, Elastic, Gremlin, Soda Foundation"
				/>
				<link
					rel="canonical"
					href="https://chaoscarvival.io/sponsorbooths"
				/>
			</Helmet>
			<div className="scrollbar scrollbar-primary">
				<div className={classes.rootContainer}>
					<MainHeader />
					<div className={classes.root}>
						<Typography className={classes.title}>
							Sponsor Booths
						</Typography>
						<SponsorBooth sponsorBooths={sponsorBooth} />
					</div>
					<Sponsors />
					<JoinCarnival />
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default SponsorBoothsPage;
