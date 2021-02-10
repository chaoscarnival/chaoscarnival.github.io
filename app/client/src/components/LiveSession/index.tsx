import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export interface CardData {
	desc: string;
	img: string;
	name: string;
	designation: string;
	logo: string;
	startDateTime: string;
	endDateTime: string;
	thumbnail?: string;
}

interface UpNextProps {
	cardData: CardData[];
}

const LiveSession: React.FC<UpNextProps> = ({ cardData }) => {
	const classes = useStyles();
	const filteredData = cardData.filter((data) => {
		if (
			new Date().getTime() >= new Date(data.startDateTime).getTime() &&
			new Date().getTime() <= new Date(data.endDateTime).getTime()
		) {
			return data;
		}
	});
	console.log(filteredData);
	return (
		<div className={classes.rootContainer}>
			{filteredData.length !== 0 ? (
				<>
					<Typography className={classes.upNext}>
						Now Showing
					</Typography>
					<Typography className={classes.desc}>
						Watch the opening day keynote, featured sessions and
						daily highlights for a snapshot of Universe's biggest
						moments
					</Typography>
					<div className={classes.cardSection}>
						{filteredData.map(
							({
								desc,
								img,
								name,
								designation,
								logo,
								thumbnail,
							}) => {
								return (
									<div
										style={{ padding: 40, paddingLeft: 0 }}
									>
										<div>
											<img
												src={thumbnail}
												alt="speaker"
												className={classes.speakerImage}
											/>
											<Typography
												className={classes.descText}
											>
												{desc}
											</Typography>
											<div id="info">
												<Typography
													style={{
														fontSize: 18,
														fontWeight: "bold",
													}}
												>
													{name}
												</Typography>
												<Typography
													style={{
														fontSize: 18,
													}}
												>
													{designation}
												</Typography>
											</div>
										</div>
										<img
											id="Logo"
											src={logo}
											alt="company logo"
											style={{
												marginTop: "0.5rem",
												maxHeight: "2rem",
												maxWidth: "10rem",
												objectFit: "contain",
											}}
										/>
									</div>
								);
							}
						)}
					</div>
				</>
			) : null}
		</div>
	);
};

export { LiveSession };
