import { Button, Divider, Hidden, Typography } from "@material-ui/core";
import React from "react";
import calendarTime from "../../utils/calenderTime";
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
				<Hidden smDown>
					<Typography className={classes.joinText}>
						Join&nbsp;the
					</Typography>
				</Hidden>
				<Hidden mdUp>
					<Typography className={classes.joinTextSM}>
						Join&nbsp;the
					</Typography>
				</Hidden>
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
					<div className={classes.regNow}>
						<Button
							className={classes.registerButton}
							color="primary"
							variant="contained"
							style={{ marginRight: "1.5rem" }}
							onClick={() => {
								window.location.href =
									"https://www.airmeet.com/e/cabe9140-62c8-11eb-8a3f-5f90a373e3d1";
							}}
						>
							<Typography
								className={classes.registerText}
								style={{ textTransform: "none" }}
							>
								<b>Register&nbsp;Now</b>
							</Typography>
						</Button>
						{/* <Timer /> */}
					</div>
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
					<Button
						className={classes.registerButtonOutline}
						color="primary"
						variant="outlined"
						onClick={() => {
							window.open(
								calendarTime(
									startDateTime,
									endDateTime,
									"Chaos Carnival",
									"For updates, Join: https://join.slack.com/t/chaoscarnival"
								)
							);
						}}
					>
						<Typography
							className={classes.timerText}
							style={{ textTransform: "none", padding: "3rem" }}
						>
							<b>Add&nbsp;to&nbsp;Calender</b>
						</Typography>
					</Button>
				</div>
			</div>
			<Divider className={classes.divider} />
		</div>
	);
};
export default JoinCarnival;
