import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import moment from "moment";
import useStyles from "./styles";
// import { Console } from "console";

interface CountDownProps {
	timeTillDate: string;
	timeFormat: string;
	inHomePage: boolean;
}

const CountDown: React.FC<CountDownProps> = ({
	timeTillDate,
	timeFormat,
	inHomePage,
}) => {
	const [now, setNow] = useState(moment());
	const [over, setOver] = useState(false);
	const classes = useStyles(inHomePage);

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
	}, []);

	return (
		<div>
			{!over ? (
				<Button variant="outlined" className={classes.timerBtn}>
					{`${days}d ${hours}h ${minutes}m ${seconds}s`}
				</Button>
			) : (
				<div />
			)}
		</div>
	);
};

export default CountDown;
