import { Typography } from "@material-ui/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";

const Timer = () => {
	const [now, setNow] = useState(moment());
	const [over, setOver] = useState(false);

	const then = moment("02 10 2021, 11:00 am", "MM DD YYYY, h:mm a");
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
	}, []);
	const classes = useStyles();
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
