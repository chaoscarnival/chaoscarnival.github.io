import { Typography } from "@material-ui/core";
import * as React from "react";
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
	);
}

export default SponsorBoothsPage;
