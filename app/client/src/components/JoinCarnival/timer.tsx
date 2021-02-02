import { Typography } from "@material-ui/core";
import moment from "moment-timezone";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";

const Timer = () => {
	const classes = useStyles();
	const [now, setNow] = useState(moment().tz("America/Los_Angeles"));
	const [over, setOver] = useState(false);
	const then = moment("10 Feb 2021 08:00:00 -0800");
	const days = then.diff(now, "days");
	now.add(days, "days");
	const hours = then.diff(now, "hours");
	now.add(hours, "hours");
	const minutes = then.diff(now, "minutes");
	now.add(minutes, "minutes");
	const seconds = then.diff(now, "seconds");

	useEffect(() => {
		if (days < 0) {
			setOver(true);
		}
		setInterval(() => {
			setNow(moment());
		}, 1000);
	}, [days]);

	return (
		<>
			{!over ? (
				<Typography className={classes.timerBtn}>
					{`${days}d ${hours}h ${minutes}m ${seconds}s`}
				</Typography>
			) : (
				<div />
			)}
		</>
	);
};
export default Timer;
