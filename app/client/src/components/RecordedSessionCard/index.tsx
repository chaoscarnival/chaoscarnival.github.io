import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export interface RecordedCardData {
	src: string;
	desc: string;
	name: string;
	designation: string;
	logo: string;
}

interface RecordedSessionCardProps {
	recordedCardData: RecordedCardData[];
	day1?: boolean;
}

const RecordedSessionCard: React.FC<RecordedSessionCardProps> = ({
	recordedCardData,
	day1,
}) => {
	const classes = useStyles();
	const day = day1 ? "1" : "2";
	return (
		<div className={classes.rootContainer}>
			<Typography
				className={`${classes.RecordedSessionCard} ${
					day1 ? classes.headDay1 : classes.headDay2
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
					({ src, desc, name, designation, logo }) => {
						return (
							<div className={classes.speakerCard}>
								<iframe
									src={src}
									style={{
										border: "none",
										width: "100%",
										borderRadius: "0.75rem",
										maxWidth: "20rem",
									}}
									title="Recording link"
								/>
								<Typography style={{ width: "100%" }}>
									{desc}
								</Typography>
								<div className={classes.speakerSection}>
									<div className={classes.speakerDetails}>
										<div id="info">
											<Typography>{name}</Typography>
											<Typography>
												{designation}
											</Typography>
										</div>
									</div>
									<img
										id="Logo"
										src={logo}
										alt="company logo"
										className={classes.companyLogo}
									/>
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
