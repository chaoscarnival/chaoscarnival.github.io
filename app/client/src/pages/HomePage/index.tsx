import { Typography } from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import { RecordedSessionCard } from "../../components/RecordedSessionCard";
import { SpeakersSection } from "../../components/SpeakersSection/index";
import Sponsors from "../../components/Sponsors";
import {
	recordedCardData_Day1,
	recordedCardData_Day2,
} from "../../data/recordedSessionCardData";
import "../../scrollbar.css";
import Bootcamps from "./Bootcamps";
import { useStyles } from "./styles";

function HomePage() {
	const classes = useStyles();

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
								</div>
								<div className={classes.embeddedTwitterDiv}>
									<iframe
										src="https://www.youtube.com/embed/4dFbleLqOtw"
										style={{ border: "none" }}
										className={classes.videoBox}
										title="video"
									></iframe>
								</div>
							</div>
						</div>

						<div className={classes.sessionsDiv}>
							{/* coming up next section */}
							<div className={classes.sessions1}>
								<RecordedSessionCard
									recordedCardData={recordedCardData_Day1}
									day1
								/>
							</div>

							<div className={classes.sessions2}>
								<RecordedSessionCard
									recordedCardData={recordedCardData_Day2}
								/>
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
