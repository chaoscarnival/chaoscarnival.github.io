import { Button, Hidden, Typography } from "@material-ui/core";
import gtag from "ga-gtag";
import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import Timer from "../../components/JoinCarnival/timer";
import { SpeakersSection } from "../../components/SpeakersSection/index";
import Sponsors from "../../components/Sponsors";
import WhyToAttend from "../../components/WhyToAttend";
import "../../scrollbar.css";
import Bootcamps from "./Bootcamps";
import { useStyles } from "./styles";

function HomePage() {
	const classes = useStyles();

	function gtag_report_conversion(url) {
		var callback = function () {
			if (typeof url != "undefined") {
				window.location = url;
			}
		};
		gtag("event", "conversion", {
			send_to: "AW-453907965/x9FXCNje-e4BEP2ruNgB",
			event_callback: callback,
		});
		gtag("config", "AW-453907965");
		return false;
	}

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>
					Chaos Carnival | Cloud-Native Chaos Engineering conference
				</title>
				<meta
					name="keywords"
					content="Chaos carnival 2021, chaos engineering, adrian cockcroft, chaos conference, chaos conference 2021, chaosconf, chaos engineering bootcamps, chaos engineering 101, cloud native, Airmeet, Slack"
				/>
				<link rel="canonical" href="https://chaoscarvival.io/" />
			</Helmet>
			<div className="scrollbar scrollbar-primary">
				<div className={classes.rootContainer}>
					<a id="home" href="home">
						{" "}
					</a>
					<MainHeader />
					<div className={classes.root}>
						<div className={classes.mainDiv}>
							<div className={classes.flexContainer}>
								<div className={classes.flexItemText}>
									<div style={{ margin: "auto" }}>
										<Typography
											className={classes.headerDesc}
										>
											February 10-11, 2021{" "}
											<Hidden mdUp>
												<br />
											</Hidden>
											{" (4PM - 12AM UTC)"}
										</Typography>
										<Typography
											className={
												classes.letsTalkAboutText
											}
										>
											Let’s talk about
										</Typography>
										<Typography
											className={
												classes.chaosEngineeringText
											}
										>
											Chaos Engineering
										</Typography>
										<Typography
											className={classes.descText}
										>
											Chaos carnival is a global two-day
											virtual conference for Cloud Native
											Chaos Engineering which aims to
											achieve reliability in systems by
											breaking things on purpose.
										</Typography>

										<div className={classes.regNow}>
											<Button
												className={
													classes.registerButton
												}
												color="primary"
												variant="contained"
												style={{
													marginRight: "1.5rem",
												}}
												onClick={() => {
													gtag_report_conversion(
														"https://chaoscarnival.io/register"
													);
													window.location.href =
														"https://chaoscarnival.io/register";
												}}
											>
												<Typography
													className={
														classes.registerText
													}
													style={{
														textTransform: "none",
													}}
												>
													<b>
														Register&nbsp;Now&nbsp;for&nbsp;Free
													</b>
												</Typography>
											</Button>
											<div>
												<Typography
													className={
														classes.closesText
													}
												>
													Registration closes in
												</Typography>
												<Timer />
											</div>
										</div>
									</div>
								</div>
								<div className={classes.flexItemImage}>
									<img
										src="icons/homeBackground-min.png"
										alt="Chaos Carnival Home"
										className={classes.homeBackgroundImg}
									/>
								</div>
							</div>
						</div>

						<div style={{ marginTop: "auto" }}>
							<div className={classes.speakersDiv}>
								<a id="speakers" href="speakers">
									{" "}
								</a>
								<SpeakersSection />
							</div>
						</div>

						<div style={{ marginTop: "auto" }}>
							<WhyToAttend />
						</div>

						<div style={{ marginTop: "auto" }}>
							<a id="bootcamps" href="bootcamps">
								{" "}
							</a>
							<Bootcamps />
						</div>

						<div style={{ marginTop: "auto" }}>
							<a id="sponsors" href="sponsors">
								{" "}
							</a>
							<Sponsors />
						</div>
					</div>

					<div style={{ marginTop: "auto" }}>
						<JoinCarnival />
					</div>

					<div style={{ marginTop: "auto" }}>
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
