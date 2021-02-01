import React from "react";
import { getLocale } from "../../utils/getLocale";
import { useStyles } from "./styles";

interface BreakProps {
	title: string;
}

const Break: React.FC<BreakProps> = ({ title }) => {
	const classes = useStyles();
	return (
		<div
			style={{
				display: "flex",
				minHeight: "10rem",
			}}
		>
			<div className={classes.breakTimes}>
				<div className={classes.breakTime}>
					{getLocale("10 Feb 2021 12:15:00 -0800").time}
					<br />
					<span>(45min)</span>
				</div>
				<div className={classes.breakTime}>
					{getLocale("10 Feb 2021 13:00:00 -0800").time}
					<br />
					<span>(45min)</span>
				</div>
			</div>

			{/* Section 1 */}
			<div className={classes.breakEvents}>
				<div className={`${classes.breakItem1} ${classes.breakItem}`}>
					<h2>Sponsor Booth</h2>
					<h2>Sponsor Booth</h2>
				</div>

				{/* Section 2 */}
				<div className={`${classes.breakItem2} ${classes.breakItem}`}>
					<h2>
						{title}
						<br />({getLocale("10 Feb 2021 12:30:00 -0800").time}-
						{getLocale("10 Feb 2021 13:15:00 -0800").time})
					</h2>
				</div>

				{/* Section 3 */}
				<div className={`${classes.breakItem3} ${classes.breakItem}`}>
					<h2>Break / Lunch</h2>
				</div>
			</div>
		</div>
	);
};

export default Break;
