import { Button, Divider, Hidden, Typography } from "@material-ui/core";
import gtag from "ga-gtag";
import React from "react";
import { useStyles } from "./styles";
import Timer from "./timer";

const JoinCarnival = () => {
	const classes = useStyles();

	function gtag_report_conversion(url) {
		var callback = function () {
			if (typeof url != "undefined") {
				window.location = url;
			}
		};
		gtag("event", "conversion", {
			send_to: "AW-453907965/x9FXCNje-e4BEP2ruNgB",
			event_callback: callback,
		});
		gtag("config", "AW-453907965");
		return false;
	}

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
						src="icons/chaoscarnival-header.png"
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
								gtag_report_conversion(
									"https://chaoscarnival.io/register"
								);
								window.location.href =
									"https://chaoscarnival.io/register";
							}}
						>
							<Typography
								className={classes.registerText}
								style={{ textTransform: "none" }}
							>
								<b>Register&nbsp;Now</b>
							</Typography>
						</Button>
						<Timer />
					</div>
				</div>
				<hr className={classes.hrLine}></hr>
				<div className={classes.dateDiv}>
					<Typography className={classes.textDay}>
						Day 1 - Wednesday
					</Typography>
					<Typography
						className={classes.textDate}
						style={{ marginBottom: "2rem" }}
					>
						February 10th, 2021
					</Typography>
					<Typography className={classes.textDay}>
						Day 2 - Thursday
					</Typography>
					<Typography
						className={classes.textDate}
						style={{ marginBottom: "2rem" }}
					>
						February 11th, 2021
					</Typography>
					<Typography
						className={classes.textDay}
						style={{
							textAlign: "left",
							fontWeight: 700,
							marginBottom: "1rem",
						}}
					>
						8AM &#8211; 4PM PT
					</Typography>
					<Button
						className={classes.registerButtonOutline}
						color="primary"
						variant="outlined"
						onClick={() => {
							window.open(
								"https://calendar.google.com/calendar/r/eventedit?text=Chaos+Carnival&dates=20210210T080000/20210211T160000&details=For+updates,+Join:+https://join.slack.com/t/chaoscarnival"
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
