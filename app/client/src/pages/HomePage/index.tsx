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
	recordedCardData_Day2
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
								<div
									style={{
										textAlign: "left",
										margin: "0 auto",
									}}
								>
									<Typography
										className={classes.happeningMainText}
									>
										That's a
									</Typography>
									<Typography
										className={classes.happeningText}
									>
										wrap!
									</Typography>
									<Typography
										className={classes.carnivalDesc}
									>
										<div>
											<Typography>30</Typography>
											<Typography>
												Chaos Experts
											</Typography>
										</div>
										<div>
											<Typography>2</Typography>
											<Typography>
												Hand on workshops
											</Typography>
										</div>
										<div>
											<Typography>500</Typography>
											<Typography>
												Worldwide Attendees
											</Typography>
										</div>
									</Typography>
								</div>
								<div className={classes.embeddedTwitterDiv}>
									<iframe
										src="https://www.youtube.com/embed/rOrKegj5ePI"
										style={{ border: "none" }}
										className={classes.videoBox}
									></iframe>
								</div>
							</div>
						</div>

						{/* coming up next section */}
						<div>
							<RecordedSessionCard
								recordedCardData={recordedCardData_Day1}
								day1
							/>
						</div>

						<div>
							<RecordedSessionCard
								recordedCardData={recordedCardData_Day2}
							/>
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
