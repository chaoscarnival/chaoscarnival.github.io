import { install } from "ga-gtag";
import React, { lazy, Suspense } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { useStyles } from "./App-styles";
import { Loader } from "./components/Loader";
import history from "./history";
import withTheme from "./theme";

const HomePage = lazy(() => import("./pages/HomePage"));
const SponsorshipPage = lazy(() => import("./pages/SponsorshipPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const AcknowledgementPage = lazy(() => import("./pages/AcknowledgementPage"));
const AgendaPage = lazy(() => import("./pages/AgendaPage"));
const BootcampPage = lazy(() => import("./pages/BootcampPage"));
const SponsorBoothsPage = lazy(() => import("./pages/SponsorBoothsPage"));

const Routes: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.content}>
			<Switch>
				<Route exact={true} path="/" component={HomePage} />
				<Route
					exact={true}
					path="/register"
					component={RegistrationPage}
				/>
				<Route
					exact={true}
					path="/acknowledgement"
					component={AcknowledgementPage}
				/>
				<Route
					exact={true}
					path="/Sponsorship"
					component={SponsorshipPage}
				/>
				<Route exact={true} path="/Team" component={TeamPage} />
				<Route exact={true} path="/agenda" component={AgendaPage} />
				<Route
					exact={true}
					path="/bootcamps"
					component={BootcampPage}
				/>
				<Route
					exact={true}
					path="/sponsorbooths"
					component={SponsorBoothsPage}
				/>
				<Route exact={true} path="/404" component={ErrorPage} />
				<Redirect to="/404" />
			</Switch>
		</div>
	);
};

function App() {
	const classes = useStyles();

	install("AW-453907965");

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
