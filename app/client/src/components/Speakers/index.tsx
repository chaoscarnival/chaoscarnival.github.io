import React from "react";
import CustomCard from "../CustomCard";
import { useStyles } from "./styles";
import { SpeakerData } from './SpeakerData';
import { Typography } from "@material-ui/core";

export function Speakers() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<div className={classes.speakers}>
					<Typography className={classes.ourExcitingText}>Our Exciting</Typography>
					<Typography className={classes.speakersText}>Speakers</Typography>
				</div>
			</div>
			<div className={classes.speakerRoot}>
				{SpeakerData.map((speaker) => (
					<CustomCard
						key={speaker.id}
						id={speaker.id}
						name={speaker.name}
						title={speaker.title}
						urlToIcon={speaker.urlToIcon}
					/>
				))}
			</div>
		</div>
	);
}
