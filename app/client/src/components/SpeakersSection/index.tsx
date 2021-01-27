import { Typography } from "@material-ui/core";
import React from "react";
import LazyLoad from "react-lazy-load";
import CustomCard from "../CustomSpeakerCard";
import KeyNoteCard from "../KeyNoteCards";
import { KeyNoteSpeakerData } from "./KeyNoteSpeakerData";
import { SpeakerData } from "./SpeakerData";
import { useStyles } from "./styles";

export function SpeakersSection() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.keyNoteSection}>
				<div className={classes.keyNoteSpeakerRoot}>
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
				<div className={classes.keyNoteTextSection}>
					<Typography className={classes.ourKeyNoteText}>
						Our Keynote
					</Typography>
					<Typography className={classes.speakerHeadText}>
						Speakers
					</Typography>
					<div className={classes.info}>
						<Typography
							className={classes.infoText}
						>{`Chaos Carnival is more than a conference. It’s a experience that brings the most talented & passionate chaos engineering experts to same stage to share ideas about Chaos Engineering and Kubernetes. This year Adrian Cockcroft and Uma Mukkara will be joining us to share chaos engineering ideas in recent times.`}</Typography>
					</div>
				</div>
			</div>
			<div className={classes.headingspeaker}>
				<div>
					<div className={classes.ourExcitingText}>Featuring our</div>
					<div className={classes.speakersText}>Chaos Speakers</div>
				</div>

				<div className={classes.speakersInfoText}>
					We have exciting lineup for the 2 days of Chaos Carnival
					featuring various chaos experts from all over the globe.
				</div>
			</div>
			<LazyLoad
				offsetVertical={0}
				offsetHorizontal={0}
				offsetTop={0}
				className={classes.lazyLoadDiv}
			>
				<div className={classes.speakerRoot}>
					{SpeakerData.map((speaker) => (
						<CustomCard
							key={speaker.id}
							id={speaker.id}
							name={speaker.name}
							title={speaker.title}
							urlToIcon={speaker.urlToIcon}
							company={speaker.company}
						/>
					))}
				</div>
			</LazyLoad>
			<div className={classes.agendaSection}>
				<div
					className={classes.detailText}
					style={{ display: "inline" }}
				>
					Detailed
				</div>
				<div
					className={classes.agendaText}
					style={{ display: "inline" }}
				>
					agenda
				</div>
				<div
					className={classes.detailText}
					style={{ display: "inline" }}
				>
					coming soon
				</div>
			</div>
		</div>
	);
}
