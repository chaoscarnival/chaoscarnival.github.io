import { Button, Typography } from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import React from "react";
import { getLocale } from "../../utils/getLocale";
import { useStyles } from "./styles";

export interface Bootcamp {
	title: string;
	description: string;
	joinUrl: string;
	startDateTime: string;
	endDateTime: string;
}

interface BootcampsProps {
	bootcamps: Bootcamp[];
}

const Bootcamps: React.FC<BootcampsProps> = ({ bootcamps }) => {
	const classes = useStyles();

	return (
		<div>
			{bootcamps.map(
				({
					title,
					description,
					joinUrl,
					startDateTime,
					endDateTime,
				}) => {
					const { dateString, time: startTime, timeZone } = getLocale(
						startDateTime
					);
					const { time: endTime } = getLocale(endDateTime);
					return (
						<div className={classes.bootcampCard}>
							<div className={classes.info}>
								<Typography variant="h4">{title}</Typography>
								<Typography>{description}</Typography>
							</div>
							<div className={classes.action}>
								<Button
									onClick={() =>
										(window.location.href = joinUrl)
									}
								>
									Join the Bootcamp <OpenInNewIcon />
								</Button>
								<Typography>{dateString}</Typography>
								<Typography>
									{startTime} - {endTime} ({timeZone})
								</Typography>
							</div>
						</div>
					);
				}
			)}
		</div>
	);
};

export default Bootcamps;
