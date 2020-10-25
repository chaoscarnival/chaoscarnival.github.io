import { Button, Hidden, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import Timer from "./timer";
import LazyLoad from 'react-lazy-load';

const JoinCarnival = () => {
	const classes = useStyles();
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
					<LazyLoad offsetTop={100}>
						<img
							src="icons/chaoscarnival-header.png"
							alt="chaos carnival logo"
							className={classes.logoImg}
						/>
					</LazyLoad>
					<Typography className={classes.descText}>
						This is the first episode of Chaos Carnival and it will be fun. Chaos engineering practitioners, experts and enthusiasts from all over the globe are joining this carnival to share and learn.
					</Typography>
					<div className={classes.regNow}>
						<Button
							className={classes.registerButton}
							color="primary"
							variant="contained"
							style={{ marginRight: "1.5rem" }}
							onClick={() => {
								window.open(
									"https://join.slack.com/t/chaoscarnival/shared_invite/zt-ic63h58h-C_G5IwZ1EwhCtDcSpEEd0w"
								);
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
						Day 1 - Friday
					</Typography>
					<Typography className={classes.textDate} style={{ marginBottom: '2rem' }}>
						January 8th, 2021
					</Typography>
					<Typography className={classes.textDay}>
						Day 2 - Saturday
					</Typography>
					<Typography className={classes.textDate} style={{ marginBottom: '2rem' }}>
						January 9th, 2021
					</Typography>
					<Typography className={classes.textDay} style={{ textAlign: "left", fontWeight: 700, marginBottom: '1rem' }}>
						8AM-5PM EST
					</Typography>
					<Button
						className={classes.registerButtonOutline}
						color="primary"
						variant="outlined"
						onClick={() => {
							window.open(
								"https://calendar.google.com/calendar/r/eventedit?text=Chaos+Carnival&dates=20210107T230000Z/20210109T030000Z&details=For+updates,+Join:+https://join.slack.com/t/chaoscarnival"
							);
						}}
					>
						<Typography
							className={classes.registerText}
							style={{ textTransform: "none", padding: "3rem" }}
						>
							<b>Add&nbsp;to&nbsp;Calender</b>
						</Typography>
					</Button>
				</div>
			</div>
		</div>
	);
};
export default JoinCarnival;
