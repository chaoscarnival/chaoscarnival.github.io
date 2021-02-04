import { Typography } from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet";
import Bootcamps from "../../components/Bootcamps";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import Sponsors from "../../components/Sponsors";
import bootcamps from "../../data/bootcampData";
import "../../scrollbar.css";
import { useStyles } from "./styles";

function BootcampPage() {
	const classes = useStyles();

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Chaos Carnival | 2021 Chaos Engineering Bootcamps</title>
				<meta
					name="keywords"
					content="chaos carnival 2021, chaos carnival bootcamps, chaos engineering bootcamps, chaos engineering 101, learn chaos engineering, getting started with chaos engineering, running chaos experiments, chaos engineering for Kafka, chaos engineering for percona, creating chaos workflows"
				/>
				<link
					rel="canonical"
					href="https://chaoscarvival.io/bootcamps"
				/>
			</Helmet>
			<div className="scrollbar scrollbar-primary">
				<div className={classes.rootContainer}>
					<MainHeader />
					<div className={classes.root}>
						<Typography className={classes.title}>
							Chaos Engineering Bootcamps
						</Typography>
						<Bootcamps bootcamps={bootcamps} />
					</div>
					<Sponsors />
					<JoinCarnival />
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default BootcampPage;
