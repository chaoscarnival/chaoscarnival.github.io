import React, { lazy, Suspense, useEffect } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { useStyles } from "./App-styles";
import { Loader } from "./components";
import withTheme from './theme';
import history from './history';

const HomePage = lazy(() => import("./pages/HomePage"));
const SponsorshipPage = lazy(() => import("./pages/SponsorshipPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));


const Routes: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.content}>
			<Switch>
				<Route exact={true} path="/" component={HomePage} />
				<Route exact={true} path="/Sponsorship" component={SponsorshipPage} />
				<Route exact={true} path="/404" component={ErrorPage} />
				<Redirect to="/404" />
			</Switch>
		</div>
	);
}

function App() {
	const classes = useStyles();

	useEffect(() => {
	});

	return (
		<Suspense fallback={<Loader />}>
			<Router history={history}>
				<div className={classes.root}>
					<div className={classes.appFrame}>
						<div className={classes.routeBody}>
							<Routes />
						</div>
					</div>
				</div>
			</Router>
		</Suspense>
	);
}

export default withTheme(App);
