import { Typography } from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet";
import { useStyles } from "./styles";

function ErrorPage() {
	const classes = useStyles();

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Chaos Carnival 2021 | 404</title>
				<link rel="canonical" href="https://chaoscarvival.io/404" />
			</Helmet>
			<div className={classes.root}>
				<Typography className={classes.mainText}>
					<strong>
						<span className={classes.text404}>404</span>
						<br />
						This page is unavailable
					</strong>
				</Typography>
			</div>
		</div>
	);
}

export default ErrorPage;
