import { Typography, Button } from "@material-ui/core";
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
        <Typography className={classes.whyToAttendText}>Why To attend</Typography>
        <Typography className={classes.chaosCarnivalText}>Chaos Carnival</Typography>
        </div>
        <div className={classes.info}>
				<Typography className={classes.infoText}>{`Chaos Engineering is a discipline to achieve reliability in systems by breaking things on purpose. ChaosCarnival brings all the chaos practitioners together to share their experiences and learn together.`}</Typography>
				</div>
        </div>


        <div className={classes.advantages}>
        
        

        <div></div>
        <div></div>
        <div></div>
        <div></div>

				</div>
				</div>
	);
}

export default WhyToAttend;
