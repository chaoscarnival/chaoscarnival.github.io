import { Button, Hidden, Typography } from "@material-ui/core";
import gtag from "ga-gtag";
import * as React from "react";
import Bootcamps from "../../components/Bootcamps/index";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import Timer from "../../components/JoinCarnival/timer";
import { SpeakersSection } from "../../components/SpeakersSection/index";
import Sponsors from "../../components/Sponsors";
import WhyToAttend from "../../components/WhyToAttend";
import "../../scrollbar.css";
import { useStyles } from "./styles";

function HomePage() {
	const classes = useStyles();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	});

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
		<div className="scrollbar scrollbar-primary">
			<div className={classes.rootContainer}>
				<MainHeader inHomePage={true} linksActive={true} />
				<div className={classes.root}>
					<div className={classes.mainDiv}>
						<div className={classes.flexContainer}>
							<div className={classes.flexItemText}>
								<div style={{ margin: "auto" }}>
									<Typography className={classes.headerDesc}>
										February 10-11, 2021
									</Typography>
									<Typography
										className={classes.letsTalkAboutText}
									>
										Let’s talk about
									</Typography>
									<Typography
										className={classes.chaosEngineeringText}
									>
										Chaos Engineering
									</Typography>
									<Typography className={classes.descText}>
										Chaos carnival is a global two-day
										virtual conference for Cloud Native
										Chaos Engineering which aims to to
										achieve reliability in systems by
										breaking things on purpose.
									</Typography>

									<div className={classes.regNow}>
										<Button
											className={classes.registerButton}
											color="primary"
											variant="contained"
											style={{ marginRight: "1.5rem" }}
											onClick={() => {
												gtag_report_conversion(
													"https://chaoscarnival.io/register"
												);
												window.location.href =
													"https://chaoscarnival.io/register";
											}}
										>
											<Typography
												className={classes.registerText}
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
												className={classes.closesText}
											>
												Registration closes in
											</Typography>
											<Timer />
										</div>
									</div>
								</div>
							</div>
							<div className={classes.flexItemImage}>
								<Hidden smUp>
									<img
										src="icons/homeBackgroundMobile.svg"
										alt="Chaos Carnival Home"
										className={classes.homeBackgroundImg}
									/>
								</Hidden>
								<Hidden xsDown>
									<img
										src="icons/homeBackground.png"
										alt="Chaos Carnival Home"
										className={classes.homeBackgroundImg}
									/>
								</Hidden>
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
	);
}

export default HomePage;
