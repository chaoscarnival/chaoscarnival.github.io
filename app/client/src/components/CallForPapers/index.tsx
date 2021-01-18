import { Typography } from "@material-ui/core";
import * as React from "react";
import LazyLoad from "react-lazy-load";
import { useStyles } from "./styles";

function CallForPapers() {
	const classes = useStyles();
	React.useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<LazyLoad
			offsetVertical={1000}
			offsetHorizontal={1000}
			offsetTop={1000}
		>
			<div className={classes.root}>
				<div className={classes.heading}>
					<div className={classes.callForPapers}>
						<Typography className={classes.callForPapersText}>
							Call for Papers
						</Typography>
						<Typography className={classes.isNowClosedText}>
							is now closed
						</Typography>
						<div className={classes.info}>
							<Typography
								className={classes.infoText}
							>{`Thank you for submitting your CFPs. We are thrilled to see so many renowned speakers coming forward to speak at ChaosCarnival.`}</Typography>
							{/* <Typography className={classes.infoText}>{`Speaking at this carnival is an opportunity to share your insights to the chaos community. You can speak on wide range of topics such as Chaos in CI/CD, DevOps in general, specific experiments, reliability, SLOs, cloud-native and of course chaos in general. Fill up your application on `}<a href="https://www.papercall.io" target="_blank" style={{ color: '#FFFFFF' }}>papercall.io</a></Typography> */}
							<Typography
								className={classes.dateText}
							>{`Stay tuned for the announcement of speaker lineup.`}</Typography>
							{/* <Button
								className={classes.cfpButton}
								color="primary"
								variant="contained"
								style={{
									float: "left",
									padding: "2rem",
									marginTop: "2rem",
								}}
								onClick={() => {
									window.open(
										"https://www.papercall.io/chaoscarnival"
									);
								}}
							>
								<Typography
									className={classes.cfpText}
									style={{
										textTransform: "none",
										fontSize: "1.15rem",
									}}
								>
									<b>Submit&nbsp;your&nbsp;CFP</b>
								</Typography>
							</Button> */}
						</div>
					</div>
				</div>
			</div>
		</LazyLoad>
	);
}

export default CallForPapers;
