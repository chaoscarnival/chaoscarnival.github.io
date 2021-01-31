import * as React from "react";
import SponsorBooth from "../../components/SponsorBooth";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import Sponsors from "../../components/Sponsors";
import "../../scrollbar.css";
import sponsorBooth from "../../data/sponsorBoothData";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";

function SponsorBoothsPage() {
	const classes = useStyles();

	return (
		<div className="scrollbar scrollbar-primary">
			<MainHeader />
			<div className={classes.root}>
				<Typography className={classes.title}>Sponsor booths</Typography>
				<SponsorBooth sponsorBooths={sponsorBooth} />
				<Sponsors />
				<JoinCarnival />
				<Footer />
			</div>
		</div>
	);
}

export default SponsorBoothsPage;
