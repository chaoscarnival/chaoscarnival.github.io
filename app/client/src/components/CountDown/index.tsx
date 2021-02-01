import moment from "moment-timezone";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";

interface CountDownProps {
	timeTillDate: string;
	timeFormat: string;
}

const CountDown: React.FC<CountDownProps> = ({ timeTillDate, timeFormat }) => {
	const [now, setNow] = useState(moment());
	const [over, setOver] = useState(false);
	const classes = useStyles();
	const then = moment(timeTillDate, timeFormat);
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
		<div>
			{!over ? (
				<div className={classes.timerBtn}>
					{`${days}d ${hours}h ${minutes}m ${seconds}s`}
				</div>
			) : (
				<div />
			)}
		</div>
	);
};

export default CountDown;
