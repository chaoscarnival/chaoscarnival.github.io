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
        
        

				<div className={classes.advantageElements}>
				
				<Typography className={classes.advantageNumber}> 01 </Typography>

				<div> 
				<Typography className={classes.advantageHead}> Experts </Typography>
				<Typography className={classes.advantageInfo}> Hear from experts, innovators and industry leaders that are shaping the Kubernetes ecosystem. </Typography>
				</div>
				
				</div>


				<div className={classes.advantageElements}>
				
				<Typography className={classes.advantageNumber}> 02 </Typography>

				<div> 
				<Typography className={classes.advantageHead}> Takeaways </Typography>
				<Typography className={classes.advantageInfo}> Actionable takeaways to help you further your advancement in the chaos engineering. </Typography>
				</div>
				
				</div>


				<div className={classes.advantageElements}>
				
				<Typography className={classes.advantageNumber}> 03 </Typography>

				<div> 
				<Typography className={classes.advantageHead}> Discover </Typography>
				<Typography className={classes.advantageInfo}> Discover new products and get hands-on to master the latest tools and techniques. </Typography>
				</div>
				
				</div>


				<div className={classes.advantageElements}>
				
				<Typography className={classes.advantageNumber}> 04 </Typography>

				<div> 
				<Typography className={classes.advantageHead}> Learn </Typography>
				<Typography className={classes.advantageInfo}> Learn from your peers and their experiences. </Typography>
				</div>
				
				</div>

				</div>
				</div>
	);
}

export default WhyToAttend;
