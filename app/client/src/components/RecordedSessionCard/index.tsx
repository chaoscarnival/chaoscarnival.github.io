import { Typography } from "@material-ui/core";
import React from "react";
import { CardData } from "../UpNext";
import { useStyles } from "./styles";

export interface RecordedCardData {
	src: string;
	desc: string;
	name: string;
	designation: string;
	logo: string;
}

interface RecordedSessionCardProps {
	recordedCardData: CardData[];
	day?: number;
}

const RecordedSessionCard: React.FC<RecordedSessionCardProps> = ({
	recordedCardData,
	day,
}) => {
	const classes = useStyles();
	return (
		<div className={classes.rootContainer}>
			<Typography
				className={`${classes.RecordedSessionCard} ${
					day === 1 ? classes.headDay1 : classes.headDay2
				}`}
			>
				Day {day} recorded sessions
			</Typography>
			<Typography className={classes.desc}>
				Watch the opening day keynote, featured sessions and daily
				highlights for a snapshot of Universe's biggest moments
			</Typography>
			<div className={classes.cardSection}>
				{recordedCardData.map(
					({ youTubeUrl, sessionName, name, role, companyLogo }) => {
						return (
							<div className={classes.speakerCard}>
								<iframe
									src={youTubeUrl}
									frameBorder="0"
									allow="accelerometer"
									allowFullScreen
									title="Recording link"
									className={classes.iframeDiv}
								/>
								<Typography className={classes.sessionName}>
									{sessionName}
								</Typography>
								<div className={classes.speakerSection}>
									<div className={classes.speakerDetails}>
										<div id="info">
											<Typography>{name}</Typography>
											<Typography
												style={{
													whiteSpace: "pre-line",
												}}
											>
												{role}
											</Typography>
										</div>
									</div>
									{companyLogo?<img
										id="Logo"
										src={companyLogo}
										alt="company logo"
										className={classes.companyLogo}
									/>:<></>}
								</div>
							</div>
						);
					}
				)}
			</div>
		</div>
	);
};

export { RecordedSessionCard };
