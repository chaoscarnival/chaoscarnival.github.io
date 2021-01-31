import React from "react";
import { Button, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
interface AddCalendarProps {
	handleClick: () => void;
}

const AddCalendar: React.FC<AddCalendarProps> = ({ handleClick }) => {
	const classes = useStyles();
	return (
		<Button className={classes.rootContainer} onClick={() => handleClick()}>
			<div className={classes.root}>
				<Typography className={classes.text}>
					Add to calendar
				</Typography>
			</div>
		</Button>
	);
};

export default AddCalendar;
