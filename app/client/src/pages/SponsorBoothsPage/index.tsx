import * as React from "react";
import Bootcamps from "../../components/Bootcamps";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import Sponsors from "../../components/Sponsors";
import "../../scrollbar.css";
import bootcamps from "../../data/bootcampData";
import { useStyles } from "./styles";

function SponsorBoothsPage() {
	const classes = useStyles();

	return (
		<div className="scrollbar scrollbar-primary">
			<MainHeader />
			<div className={classes.root}>
				<Bootcamps bootcamps={bootcamps} />
				<Sponsors />
				<JoinCarnival />
				<Footer />
			</div>
		</div>
	);
}

export default SponsorBoothsPage;

