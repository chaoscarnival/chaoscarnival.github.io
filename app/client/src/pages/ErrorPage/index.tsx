import { Typography } from "@material-ui/core";
import * as React from "react";
import { useStyles } from "./styles";

function ErrorPage() {
	const classes = useStyles();
	React.useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
				<div className={classes.root}>
						<Typography className={classes.mainText}>
							<strong>
								404
								<br />
								This page is unavailable
							</strong>
						</Typography>	
				</div>
	);
}

export default ErrorPage;