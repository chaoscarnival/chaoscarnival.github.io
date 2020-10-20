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
						<Typography className={classes.infoText}>{`Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mAliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.`}</Typography>
						<Typography className={classes.dateText}>{`Last date to submit is 10th Dec, 2020`}</Typography>
					</div>
					<div className={classes.infoButton}>


						<Button
							className={classes.cfpButton}
							color="primary"
							variant="contained"
							style={{ margin: "auto" }}
							onClick={() => {
								window.open(
									"https://www.facebook.com/Chaos-Carnival-108128454412853"
								);
							}}
						>
							<Typography className={classes.cfpText} style={{ textTransform: 'none' }}><b>Submit&nbsp;your&nbsp;CFP</b></Typography>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CallForPapers;
