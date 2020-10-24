import React from "react";
import CustomCard from "../CustomCard";
import { useStyles } from "./styles";
import { SpeakerData } from './SpeakerData';

export function Speakers() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.headingspeaker}>
				<div className={classes.speakers}>
					<div className={classes.ourExcitingText}>Our Exciting</div>
					<div className={classes.speakersText}>Speakers</div>
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
