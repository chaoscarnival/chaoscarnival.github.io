import { Typography } from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet";
import COC from "../../components/COC";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import Sponsors from "../../components/Sponsors";
import cocData from "../../data/cocData";
import "../../scrollbar.css";
import { useStyles } from "./styles";

function COCPage() {
	const classes = useStyles();

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Chaos Carnival 2021 Code of Conduct</title>
				<meta
					name="keywords"
					content="Chaos carnival 2021, chaos engineering, chaos conference, chaos conference 2021, chaosconf, sponsor booths, chaos engineering 101, cloud native, ChaosNative, chaos native, CNCF, Percona, Wipro, Epsagon, Elastic, Gremlin, Soda Foundation"
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
							Attendee Guide & Code of Conduct
						</Typography>
						<COC cocData={cocData} />
					</div>
					<Sponsors />
					<JoinCarnival />
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default COCPage;
