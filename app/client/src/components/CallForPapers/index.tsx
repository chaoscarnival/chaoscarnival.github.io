import { Typography, Button } from "@material-ui/core";
import * as React from "react";
import { useStyles } from "./styles";

function CallForPapers() {
	const classes = useStyles();
	React.useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<div className={classes.callForPapers}>
					<Typography className={classes.callForPapersText}>Call for Papers</Typography>
					<Typography className={classes.isOpenText}>is open</Typography>
					<div className={classes.info}>
						<Typography className={classes.infoText}>{`Speaking at this carnival is an opportunity to share your insights to the chaos community. You can speak on wide range of topics such as Chaos in CI/CD, DevOps in general, specific experiments, reliability, SLOs, cloud-native and of course chaos in general. Fill up your application on `}<a href="https://www.papercall.io" target="_blank" style={{ color: '#FFFFFF' }}>papercall.io</a></Typography>
						<Typography className={classes.dateText}>{`Last date to submit is 10th Dec, 2020`}</Typography>
						<Button
							className={classes.cfpButton}
							color="primary"
							variant="contained"
							style={{ float: "left", padding: "2rem", marginTop: "2rem", width: "fit-content" }}
							onClick={() => {
								window.open(
									"https://join.slack.com/t/chaoscarnival/shared_invite/zt-ic63h58h-C_G5IwZ1EwhCtDcSpEEd0w"
								);
							}}
						>
							<Typography className={classes.cfpText} style={{ textTransform: 'none' }}><b>Submit&nbsp;your&nbsp;CFP</b></Typography>
						</Button>
					</div>
					{/* <div className={classes.infoButton}> */}
				</div>
			</div>
		</div>
		// </div >
	);
}

export default CallForPapers;
