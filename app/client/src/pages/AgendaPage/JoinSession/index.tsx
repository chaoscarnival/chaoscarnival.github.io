import React from "react";
import { Button, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
interface JoinSessionProps {
	handleClick: () => void;
}

const JoinSession: React.FC<JoinSessionProps> = ({ handleClick }) => {
	const classes = useStyles();
	return (
		<Button className={classes.rootContainer} onClick={() => handleClick()}>
			<div className={classes.root}>
				<Typography className={classes.text}>
					Join the session
				</Typography>
				<img src="./icons/external-link.svg" alt="External Link" />
			</div>
		</Button>
	);
};

export default JoinSession;
