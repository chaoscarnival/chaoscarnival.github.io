import { Typography } from "@material-ui/core";
import * as React from "react";
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
		<div className="scrollbar scrollbar-primary">
			<div className={classes.rootContainer}>
				<MainHeader />
				<div className={classes.root}>
					<Typography className={classes.title}>Bootcamps</Typography>
					<Bootcamps bootcamps={bootcamps} />
				</div>
				<Sponsors />
				<JoinCarnival />
				<Footer />
			</div>
		</div>
	);
}

export default BootcampPage;
