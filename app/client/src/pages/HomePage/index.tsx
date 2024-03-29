import { Button, Typography } from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import { RecordedSessionCard } from "../../components/RecordedSessionCard";
import { SpeakersSection } from "../../components/SpeakersSection/index";
import Sponsors from "../../components/Sponsors";
import { cardData } from "../../data/cardData";
import "../../scrollbar.css";
import Bootcamps from "./Bootcamps";
import { useStyles } from "./styles";

function HomePage() {
	const classes = useStyles();
	const day1_data = cardData.filter((data, index) => {
		if (index < 15) {
			return data;
		}
	});
	const day2_data = cardData.filter((data, index) => {
		if (index >= 15) {
			return data;
		}
	});
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
							{/* Hero Section start */}
							<div className={classes.twitterDiv}>
								<div className={classes.heroSection}>
									<Typography
										className={classes.happeningMainText}
									>
										Thanks for
									</Typography>
									<Typography
										className={classes.happeningMainText}
									>
										being a part of
									</Typography>
									<Typography
										className={classes.happeningText}
									>
										Chaos Carnival 2021
									</Typography>
									<Typography
										className={classes.carnivalDesc}
									>
										<div>
											<Typography>30+</Typography>
											<Typography
												className={
													classes.subHeadingText
												}
											>
												{`Chaos \n Experts`}
											</Typography>
										</div>
										<div>
											<Typography>2</Typography>
											<Typography
												className={
													classes.subHeadingText
												}
											>
												{`Hands on\n workshops`}
											</Typography>
										</div>
										<div>
											<Typography>500+</Typography>
											<Typography
												className={
													classes.subHeadingText
												}
											>
												{`Worldwide \nAttendees`}
											</Typography>
										</div>
									</Typography>
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
											src="/icons/slack.svg"
											alt="Slack"
											className={classes.slackIcon}
										/>{" "}
										Join our Slack
									</Button>
								</div>
							</div>
						</div>

						<div className={classes.sessionsDiv}>
							{/* coming up next section */}
							<div className={classes.sessions1}>
								<RecordedSessionCard
									recordedCardData={day1_data}
									day={1}
								/>
								<>
									<Typography
										className={`${classes.RecordedSessionCard} ${classes.headDay1}`}
									>
										Day 1 Bootcamp
									</Typography>

									<div className={classes.speakerCard}>
										<iframe
											src={
												"https://www.youtube.com/embed/i-paikImUCA"
											}
											frameBorder="0"
											allow="accelerometer"
											allowFullScreen
											title="Recording link"
											className={classes.iframeDiv}
										/>
										<Typography
											className={classes.sessionName}
										>
											AWS Kafka Bootcamp
										</Typography>
									</div>
								</>
							</div>

							<div className={classes.sessions2}>
								<RecordedSessionCard
									recordedCardData={day2_data}
									day={2}
								/>
								<>
									<Typography
										className={`${classes.RecordedSessionCard} ${classes.headDay1}`}
									>
										Day 2 Bootcamp
									</Typography>

									<div className={classes.speakerCard}>
										<iframe
											src={
												"https://www.youtube.com/embed/Jlsjrr2F8Ok"
											}
											frameBorder="0"
											allow="accelerometer"
											allowFullScreen
											title="Recording link"
											className={classes.iframeDiv}
										/>
										<Typography
											className={classes.sessionName}
										>
											AKS Percona Bootcamp
										</Typography>
									</div>
								</>
							</div>
						</div>

						{/* constant on all pages:  */}
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
