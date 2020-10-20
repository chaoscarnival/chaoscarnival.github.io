import { Typography, Hidden, Button } from "@material-ui/core";
import * as React from "react";
import Footer from "../../components/Footer";
import { useStyles } from "./styles";
import MainHeader from "../../components/Header";
import "../../scrollbar.css";
import WhyToAttend from "../../components/WhyToAttend";
import Sponsors from "../../components/Sponsors";
import JoinCarnival from "../../components/JoinCarnival";
import CallForPapers from "../../components/CallForPapers";
import { Speakers } from '../../components/Speakers';

function HomePage() {
	const classes = useStyles();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className="scrollbar scrollbar-primary">
			<div className={classes.rootContainer}>
				<MainHeader inHomePage={true} />
				<div className={classes.root}>
					<div className={classes.mainDiv}>
					<a id="home"></a>
						<div className={classes.headerDiv}>
							<div style={{ margin: "auto" }}>
								<img
									src="icons/chaoscarnival-header.svg"
									alt="Chaos Bird Experiment"
									className={classes.logoImg}
								/>
							</div>
							<div style={{ margin: "auto" }}>
							<Typography
								className={classes.mainHeader}
								style={{ margin: "auto" }}
							>
								A global two-day virtual conference
							</Typography>

							<Typography
								className={classes.mainHeader}
								style={{ margin: "auto" }}
							>
								for Cloud Native Chaos Engineering
							</Typography>
							</div>
							
							<div style={{ margin: "auto" }}>
							<Typography
								className={classes.headerDesc}
								style={{ margin: "auto" }}
							>
								January 8-9, 2021
							</Typography>
							</div>

							<div style={{ margin: "auto" }}>
							<Button
								className={classes.registerButton}
								color="primary"
								variant="contained"
								style={{ margin: "auto" }}
								onClick={() => {
									window.open(
										"https://join.slack.com/t/chaoscarnival"
									);
								}}
							>
								<Typography
									className={classes.registerText}
									style={{ textTransform: "none" }}
								>
									<b>Register Now for Free</b>
								</Typography>
							</Button>
							</div>
						</div>
					</div>

					<div style={{ marginTop: "auto" }}>
							<WhyToAttend />
					</div>

					<div style={{ marginTop: "auto" }}>
						<a id="cfp"></a>
							<CallForPapers />
					</div>

					<div style={{ marginTop: "auto" }}>
						<div className={classes.speakersDiv}>
						<a id="speakers"></a>
						<Speakers/>
						</div>
					</div>

					<div style={{ marginTop: "auto" }}>
						<JoinCarnival />
					</div>
				</div>

				<div style={{ marginTop: "auto" }}>
				<a id="sponsors"></a>
					<Sponsors />
				</div>

				<div style={{ marginTop: "auto" }}>
					<Footer /> 
				</div>
			</div>
		</div>
	);
}

export default HomePage;
