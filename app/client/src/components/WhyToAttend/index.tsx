import { Typography } from "@material-ui/core";
import * as React from "react";
import { useStyles } from "./styles";

function WhyToAttend() {
	const classes = useStyles();
	React.useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<div className={classes.whyToAttend}>
					<Typography className={classes.whyToAttendText}>
						Why attend
					</Typography>
					<Typography className={classes.chaosCarnivalText}>
						Chaos Carnival
					</Typography>
				</div>
				<div className={classes.info}>
					<Typography
						className={classes.infoText}
					>{`Chaos Engineering is a discipline to achieve reliability in systems by breaking things on purpose. Chaos Carnival brings all the chaos practitioners together to share their experiences and learn together.`}</Typography>
				</div>
			</div>
			<div className={classes.advantages}>
				<div className={classes.advantageElements}>
					<Typography className={classes.advantageNumber}>
						{" "}
						01{" "}
					</Typography>
					<div>
						<Typography className={classes.advantageHead}>
							{" "}
							Experts{" "}
						</Typography>
						<Typography className={classes.advantageInfo}>
							{" "}
							Hear from experts, innovators and industry leaders
							that are shaping the Kubernetes ecosystem.{" "}
						</Typography>
					</div>
				</div>
				<div className={classes.advantageElements}>
					<Typography className={classes.advantageNumber}>
						{" "}
						02{" "}
					</Typography>
					<div>
						<Typography className={classes.advantageHead}>
							{" "}
							Takeaways{" "}
						</Typography>
						<Typography className={classes.advantageInfo}>
							{" "}
							Actionable takeaways to help you implement Chaos
							Engineering in your environment.{" "}
						</Typography>
					</div>
				</div>
				<div className={classes.advantageElements}>
					<Typography className={classes.advantageNumber}>
						{" "}
						03{" "}
					</Typography>
					<div>
						<Typography className={classes.advantageHead}>
							{" "}
							Discover{" "}
						</Typography>
						<Typography className={classes.advantageInfo}>
							{" "}
							Discover new chaos engineering tools and talk to the
							makers directly.{" "}
						</Typography>
					</div>
				</div>
				<div className={classes.advantageElements}>
					<Typography className={classes.advantageNumber}>
						{" "}
						04{" "}
					</Typography>
					<div>
						<Typography className={classes.advantageHead}>
							{" "}
							Community{" "}
						</Typography>
						<Typography className={classes.advantageInfo}>
							{" "}
							Be part of Chaos Engineering slack community, learn
							from your peers and stay up-to-date even after the
							conference ends.{" "}
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyToAttend;
