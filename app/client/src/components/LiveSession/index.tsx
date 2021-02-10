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

const LiveSession: React.FC<UpNextProps> = ({ cardData }) => {
	const classes = useStyles();
	const filteredData = cardData.filter((data) => {
		// if (
		// 	new Date().getTime() >= new Date(data.startDateTime).getTime() &&
		// 	new Date().getTime() <= new Date(data.endDateTime).getTime()
		// ) {
		return data;
		// }
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
								sessionName,
								name,
								role,
								companyLogo,
								thumbnail,
							}) => {
								return (
									<div
										style={{ padding: 40, paddingLeft: 0 }}
									>
										<div>
											<a
												href="https://www.airmeet.com/e/cabe9140-62c8-11eb-8a3f-5f90a373e3d1"
												target="_blank"
												rel="noopener"
											>
												<img
													src={thumbnail}
													alt="speaker"
													className={
														classes.speakerImage
													}
												/>
											</a>
											<Typography
												className={classes.descText}
											>
												{sessionName}
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
													{role}
												</Typography>
											</div>
										</div>
										<img
											id="company Logo"
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
