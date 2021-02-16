import { Divider, Typography } from "@material-ui/core";
import React from "react";
import { getLocale } from "../../utils/getLocale";
import { useStyles } from "./styles";

const JoinCarnival = () => {
	const classes = useStyles();

	const { date: day1StartDate, time: day1StartTime, timeZone } = getLocale(
		"10 Feb 2021 08:00:00 -0800"
	);
	const { time: day1EndTime } = getLocale("10 Feb 2021 16:00:00 -0800");

	// Day 2
	const { date: day2StartDate, time: day2StartTime } = getLocale(
		"11 Feb 2021 08:00:00 -0800"
	);
	const { time: day2EndTime } = getLocale("11 Feb 2021 16:00:00 -0800");

	const startDateTime = "10 Feb 2021 08:00:00 -0800";
	const endDateTime = "11 Feb 2021 16:00:00 -0800";

	return (
		<div className={classes.root}>
			<div className={classes.mainDiv}>
				<div className={classes.imageDiv}>
					<img
						src="/icons/chaoscarnival-header-min.png"
						alt="chaos carnival logo"
						className={classes.logoImg}
					/>
					<Typography className={classes.descText}>
						This is the first episode of Chaos Carnival and it will
						be fun. Chaos engineering practitioners, experts and
						enthusiasts from all over the globe are joining this
						carnival to share and learn.
					</Typography>
				</div>
				<hr className={classes.hrLine}></hr>
				<div className={classes.dateDiv}>
					<Typography className={classes.textDay}>
						Day 1 - {day1StartDate.format("dddd")}
					</Typography>
					<Typography className={classes.textDate}>
						{day1StartDate.format("MMMM Do, YYYY")}
					</Typography>
					<Typography
						className={classes.textDay}
						style={{
							textAlign: "left",
							fontWeight: 700,
							marginBottom: "1rem",
						}}
					>
						{day1StartTime} &#8211; {day1EndTime} {timeZone}
					</Typography>
					<br />
					<Typography className={classes.textDay}>
						Day 2 - {day2StartDate.format("dddd")}
					</Typography>
					<Typography className={classes.textDate}>
						{day2StartDate.format("MMMM Do, YYYY")}
					</Typography>
					<Typography
						className={classes.textDay}
						style={{
							textAlign: "left",
							fontWeight: 700,
							marginBottom: "1rem",
						}}
					>
						{day2StartTime} &#8211; {day2EndTime} {timeZone}
					</Typography>
				</div>
			</div>
			<Divider className={classes.divider} />
		</div>
	);
};
export default JoinCarnival;
