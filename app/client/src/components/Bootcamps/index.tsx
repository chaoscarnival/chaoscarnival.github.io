import { Typography } from "@material-ui/core";
import * as React from "react";
import { useStyles } from "./styles";

function Bootcamps() {
	const classes = useStyles();
	React.useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<div className={classes.bootcamps}>
					<div className={classes.image}>
						<img
							src="icons/bootcampImg-min.png"
							alt="chaos carnival bootcamps"
							className={classes.bootcampImg}
						/>
					</div>
					<div className={classes.text}>
						<Typography className={classes.chaosEngineeringText}>
							Chaos Engineering
						</Typography>
						<Typography className={classes.bootcampsText}>
							Bootcamps
						</Typography>
						<div className={classes.info}>
							<Typography
								className={classes.infoText}
							>{`Learn chaos engineering 101 and experience it`}</Typography>
							<Typography
								className={classes.detailedInfoText}
							>{`A lot of us want to experience running that first chaos experiment. Well, we run the CE-101 sessions just for that purpose. In these tutorial sessions, you will learn why chaos engineering, and how to get started on it. A cloud based infrastructure will be provided for each attendee and experience how easy it is to run chaos with  the  the modern chaos engineering toolset.`}</Typography>
							<Typography
								className={classes.detailedInfoText}
							>{`This tutorial sessions will be run on both day1 and day2.`}</Typography>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Bootcamps;
