import { install } from "ga-gtag";
import React, { lazy, Suspense } from "react";
import {
	Redirect,
	Route,
	Router,
	Switch,
	BrowserRouter,
} from "react-router-dom";
import { useStyles } from "./App-styles";
import { Loader } from "./components/Loader";
import history from "./history";
import withTheme from "./theme";

const HomePage = lazy(() => import("./pages/HomePage"));
const SponsorshipPage = lazy(() => import("./pages/SponsorshipPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const AcknowledgementPage = lazy(() => import("./pages/AcknowledgementPage"));
const AgendaPage = lazy(() => import("./pages/AgendaPage"));
const BootcampPage = lazy(() => import("./pages/BootcampPage"));
const SponsorBoothsPage = lazy(() => import("./pages/SponsorBoothsPage"));
const COCPage = lazy(() => import("./pages/CodeOfConductPage"));

const Routes: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.content}>
			<Switch>
				<Route exact={true} path="/2021" component={HomePage} />
				<Route
					exact={true}
					path="/2021/acknowledgement"
					component={AcknowledgementPage}
				/>
				<Route
					exact={true}
					path="/2021/Sponsorship"
					component={SponsorshipPage}
				/>
				<Route exact={true} path="/2021/Team" component={TeamPage} />
				<Route
					exact={true}
					path="/2021/agenda"
					component={AgendaPage}
				/>
				<Route
					exact={true}
					path="/2021/bootcamps"
					component={BootcampPage}
				/>
				<Route
					exact={true}
					path="/2021/sponsorbooths"
					component={SponsorBoothsPage}
				/>
				<Route exact={true} path="/2021/COC" component={COCPage} />
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
				{/* <BrowserRouter basename="/2021"> */}
				<div className={classes.root}>
					<div className={classes.appFrame}>
						<div className={classes.routeBody}>
							<Routes />
						</div>
					</div>
				</div>
				{/* </BrowserRouter> */}
			</Router>
		</Suspense>
	);
}

export default withTheme(App);
