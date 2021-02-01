import { Button, Typography } from "@material-ui/core";
import React from "react";
import { getLocale } from "../../utils/getLocale";
import { useStyles } from "./styles";

export interface SponsorBooth {
	logo: string;
	description: string;
	visitLink: string;
	sponsorBoothLink: string;
	startDateTime_One: string;
	endDateTime_One: string;
	startDateTime_Two: string;
	endDateTime_Two: string;
	slackLink: string;
	sponsorName: string;
}

interface SponsorBoothProps {
	sponsorBooths: SponsorBooth[];
}

const SponsorBooth: React.FC<SponsorBoothProps> = ({ sponsorBooths }) => {
	const classes = useStyles();

	return (
		<div>
			{sponsorBooths.map(
				({
					logo,
					description,
					visitLink,
					sponsorBoothLink,
					startDateTime_One,
					endDateTime_One,
					startDateTime_Two,
					endDateTime_Two,
					slackLink,
					sponsorName,
				}) => {
					const {
						dateString: dateString_1,
						time: startTime_1,
						timeZone: timeZone_1,
					} = getLocale(startDateTime_One);
					const { time: endTime_1 } = getLocale(endDateTime_One);
					const {
						dateString: dateString_2,
						time: startTime_2,
						timeZone: timeZone_2,
					} = getLocale(startDateTime_Two);
					const { time: endTime_2 } = getLocale(endDateTime_Two);

					return (
						<div className={classes.sponsorBoothCard}>
							<div className={classes.info}>
								<img
									title={`${sponsorName}'s logo`}
									src={logo}
									alt={`${sponsorName}'s logo`}
								/>
								<Typography>{description}</Typography>
							</div>
							<div className={classes.action}>
								<Button
									onClick={() =>
										(window.location.href = sponsorBoothLink)
									}
								>
									Visit the sponsor booth
								</Button>
								<Typography>{dateString_1}</Typography>
								<Typography>
									{startTime_1} - {endTime_1} ({timeZone_1})
								</Typography>
								<Typography>{dateString_2}</Typography>
								<Typography>
									{startTime_2} - {endTime_2} ({timeZone_2})
								</Typography>
								<Button
									id="Slack"
									variant="outlined"
									href={slackLink}
									target="_blank"
									rel="noopener"
								>
									<img
										src="/icons/social/Slack.svg"
										alt="Slack logo"
									/>{" "}
									Visit Slack channel
								</Button>
							</div>
						</div>
					);
				}
			)}
		</div>
	);
};

export default SponsorBooth;
