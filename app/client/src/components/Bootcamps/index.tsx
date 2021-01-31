import { Button, Typography } from "@material-ui/core";
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
		<div className={classes.root}>
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
							<div>
								<Typography variant="h2">{title}</Typography>
								<Typography>{description}</Typography>
							</div>
							<div>
								<Button
									onClick={() =>
										(window.location.href = joinUrl)
									}
								>
									Join the Bootcamp
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
