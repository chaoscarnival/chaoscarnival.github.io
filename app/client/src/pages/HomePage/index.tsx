import { Button, Hidden, Typography } from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import { LiveSession } from "../../components/LiveSession";
import { SpeakersSection } from "../../components/SpeakersSection/index";
import Sponsors from "../../components/Sponsors";
import { UpNext } from "../../components/UpNext";
import { cardData } from "../../data/cardData";
import "../../scrollbar.css";
import Bootcamps from "./Bootcamps";
import { useStyles } from "./styles";
import TwitterTimeline from "./TwitterTimeline";

function HomePage() {
	const classes = useStyles();
	const twitterURL = `https://twitter.com/intent/tweet?text=We are live at ChaosCarnival.io &hashtags=ChaosCarnival2021`;

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
							<div style={{ margin: "auto" }}>
								<Typography className={classes.headerDesc}>
									February 10-11, 2021{" "}
									<Hidden mdUp>
										<br />
									</Hidden>
									{" (4PM - 12AM UTC)"}
								</Typography>
								<Typography
									className={classes.carnivalLiveText}
								>
									{`The Carnival \n is live`}
								</Typography>
								<div className={classes.heroButtonSection}>
									<Button
										className={classes.joinButton}
										color="primary"
										variant="contained"
										onClick={() => {
											window.open(
												"https://www.airmeet.com/e/cabe9140-62c8-11eb-8a3f-5f90a373e3d1",
												"_blank"
											);
										}}
									>
										Join the carnival
									</Button>
									<Button
										className={classes.slackButton}
										variant="contained"
										onClick={() => {
											window.open(
												"https://join.slack.com/t/chaoscarnival/shared_invite/zt-jy0q3xxc-EIYmlEXqvqbRRxYQkvdRpw",
												"_blank"
											);
										}}
									>
										<img
											src="./icons/slack.svg"
											alt="Slack"
											className={classes.slackIcon}
										/>{" "}
										Go to Slack
									</Button>
								</div>
							</div>
						</div>

						<div className={classes.twitterDiv}>
							<div
								style={{
									textAlign: "left",
									margin: "0 auto",
								}}
							>
								<Typography
									className={classes.happeningMainText}
								>
									Oh yes! It’s
								</Typography>
								<Typography className={classes.happeningText}>
									happening
								</Typography>
								<Typography className={classes.carnivalDesc}>
									Chaos carnival is a global two-day virtual
									conference for Cloud Native Chaos
									Engineering which aims to to achieve
									reliability in systems by breaking things on
									purpose.{" "}
								</Typography>

								<Button
									className={classes.twitterBtn}
									onClick={() => {
										window.open(twitterURL, "_blank");
									}}
								>
									Tweet
								</Button>
							</div>
							<div className={classes.embeddedTwitterDiv}>
								<TwitterTimeline />
							</div>
						</div>
						<div>
							<LiveSession cardData={cardData} />
						</div>
						<div>
							<UpNext cardData={cardData} />
						</div>
						<div style={{ marginTop: "auto" }}>
							<div className={classes.speakersDiv}>
								<a id="speakers" href="speakers">
									{" "}
								</a>
								<SpeakersSection />
							</div>
						</div>
						<div>
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
