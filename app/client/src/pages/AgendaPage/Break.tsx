import React from "react";
import { useStyles } from "./styles";

const Break: React.FC = () => {
	const classes = useStyles();
	return (
		<div
			style={{
				display: "flex",
				minHeight: "10rem",
				margin: "3rem 0",
			}}
		>
			<div className={classes.breakTimes}>
				<div className={classes.breakTime}>
					11:30 AM
					<br />
					<span>(45min)</span>
				</div>
				<div className={classes.breakTime}>
					12:15 PM
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
						BOOT CAMP 1 AWS-KAFKA
						<br />
						(12-12.45)
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
