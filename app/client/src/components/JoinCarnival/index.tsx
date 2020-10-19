import { Button, Hidden, Typography } from "@material-ui/core";
import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { useStyles } from "./styles";
import Timer from "./timer";
const JoinCarnival = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.mainDiv}>
				<Hidden smDown>
					<Typography className={classes.joinText}>
						Join the
					</Typography>
				</Hidden>
				<Hidden mdUp>
					<Typography className={classes.joinTextSM}>
						Join the
					</Typography>
				</Hidden>
				<div className={classes.imageDiv}>
					<img
						src="icons/chaoscarnival-header.svg"
						alt="Chaos Bird Experiment"
						className={classes.logoImg}
					/>
					<Typography className={classes.descText}>
						Aliqua id fugiat nostrud irure ex duis ea quis id quis
						ad et. Sunt qui esse pariatur duis deserunt mAliqua id
						fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
						qui esse pariatur duis deserunt mollit dolore cillum
						minim tempor enim.
					</Typography>
					<div className={classes.regNow}>
						<Button
							className={classes.registerButton}
							color="primary"
							variant="contained"
							style={{ margin: "auto" }}
							onClick={() => {
								window.open(
									"https://github.com/litmuschaos/chaos-charts/blob/master/CONTRIBUTING.md"
								);
							}}
						>
							<Typography
								className={classes.registerText}
								style={{ textTransform: "none" }}
							>
								<b>Register Now</b>
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
					<Typography className={classes.textDate}>
						January 8th, 2021
					</Typography>
					<Typography className={classes.textDay}>
						Day 2 - Saturday
					</Typography>
					<Typography className={classes.textDate}>
						January 9th, 2021
					</Typography>
					<Typography style={{ textAlign: "left" }}>
						8AM-5PM EST
					</Typography>
					<Button
						className={classes.registerButtonOutline}
						color="primary"
						variant="outlined"
						onClick={() => {
							window.open(
								"https://github.com/litmuschaos/chaos-charts/blob/master/CONTRIBUTING.md"
							);
						}}
					>
						<Typography
							className={classes.registerText}
							style={{ textTransform: "none" }}
						>
							<b>Add to Calender</b>
						</Typography>
					</Button>
				</div>
			</div>
		</div>
	);
};
export default JoinCarnival;
