/* eslint-disable array-callback-return */
import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export interface CardData {
	sessionName: string;
	speakerImage: string;
	name: string;
	role: string;
	companyLogo: string;
	startDateTime: string;
	endDateTime: string;
	thumbnail?: string;
}

interface UpNextProps {
	cardData: CardData[];
}

const UpNext: React.FC<UpNextProps> = ({ cardData }) => {
	const classes = useStyles();
	const filteredData = cardData
		.filter((data) => {
			if (new Date().getTime() < new Date(data.startDateTime).getTime())
				return data;
		})
		.slice(0, 3);
	return (
		<div className={classes.rootContainer}>
			<Typography className={classes.upNext}>Coming up next</Typography>
			<Typography className={classes.desc}>
				Watch the opening day keynote, featured sessions and daily
				highlights for a snapshot of Universe's biggest moments
			</Typography>
			<div className={classes.cardSection}>
				{filteredData.map(
					({
						sessionName,
						speakerImage,
						name,
						role,
						companyLogo,
					}) => {
						return (
							<div className={classes.speakerCard}>
								<Typography style={{ width: "100%" }}>
									{sessionName}
								</Typography>
								<div className={classes.speakerSection}>
									<div className={classes.speakerDetails}>
										<img
											src={speakerImage}
											alt="speaker"
											style={{
												height: "3rem",
												width: "3rem",
											}}
										/>
										<div id="info">
											<Typography>{name}</Typography>
											<Typography>{role}</Typography>
										</div>
									</div>
									<img
										id="logo"
										src={companyLogo}
										alt="company Logo"
										style={{
											marginTop: "0.5rem",
											maxHeight: "2rem",
											maxWidth: "10rem",
											objectFit: "contain",
										}}
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

export { UpNext };
