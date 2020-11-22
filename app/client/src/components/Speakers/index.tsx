import { Button, Typography } from "@material-ui/core";
import React from "react";
import CustomCard from "../CustomCard";
import KeyNoteCard from '../KeyNoteCards';
import { CompanyData } from './companyData';
import { KeyNoteSpeakerData } from './KeyNoteSpeakerData';
import { useStyles } from "./styles";

export function Speakers() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.headingspeaker}>
				<div>
					<div className={classes.ourExcitingText}>Our Keynote</div>
					<div className={classes.speakersText}>Speakers</div>
				</div>
			</div>
			<div className={classes.speakerRoot}>
				{KeyNoteSpeakerData.map((speaker) => (
					<KeyNoteCard
						key={speaker.id}
						id={speaker.id}
						name={speaker.name}
						title={speaker.title}
						urlToIcon={speaker.urlToIcon}
						companyIcon={speaker.companyIcon}
					/>
				))}
			</div>
			<div className={classes.headingspeaker}>
				<div>
					<div className={classes.ourExcitingText}>Featuring</div>
					<div className={classes.chaosExpertsFrom}>
						<div className={classes.chaosExpertsText}>Chaos Experts</div>
						<div className={classes.fromText}>from</div>
					</div>
				</div>
			</div>
			<div className={classes.speakerRoot}>
				{CompanyData.map((company) => (
					<CustomCard
						key={company.id}
						id={company.id}
						companyIcon={company.companyIcon}
					/>
				))}
			</div>
			<div className={classes.cfpSection}>
				<div>
					<div className={classes.moreText}>And more to come. Interested in Speaking ?</div>
					<div className={classes.applyButton}>
						<Button
								className={classes.cfpButton}
								color="primary"
								variant="contained"
								style={{ float: "left", padding: "2rem", marginTop: "2rem" }}
								onClick={() => {
									window.open(
										"https://www.papercall.io/chaoscarnival"
									);
								}}
							>
								<Typography className={classes.cfpText} style={{ textTransform: 'none', fontSize: "1.15rem" }}><b>Apply&nbsp;for&nbsp;CFP</b></Typography>
						</Button>
						</div>
				</div>
			</div>
		</div>
	);
}
