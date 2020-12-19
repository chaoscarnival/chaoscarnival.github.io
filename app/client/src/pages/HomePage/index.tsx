import { Button, Typography } from "@material-ui/core";
import * as React from "react";
import CallForPapers from "../../components/CallForPapers";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import { Speakers } from "../../components/Speakers";
import Sponsors from "../../components/Sponsors";
import WhyToAttend from "../../components/WhyToAttend";
import "../../scrollbar.css";
import { useStyles } from "./styles";

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
						<a id="home" href="home"></a>
						<div className={classes.headerDiv}>
							<div style={{ margin: "auto" }}>
								<img
									src="icons/chaoscarnival-header.png"
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
									February 10-11, 2021
								</Typography>
							</div>

							<div style={{ margin: "auto" }}>
								<Button
									className={classes.registerButton}
									color="primary"
									variant="contained"
									style={{
										margin: "auto",
										padding: "2rem",
										marginTop: "2rem",
										width: "100%",
									}}
									onClick={() => {
										window.location.href =
											"https://chaoscarnival.io/register";
									}}
								>
									<Typography
										className={classes.registerText}
										style={{
											textTransform: "none",
											fontSize: "1.15rem",
										}}
									>
										<b>
											Register&nbsp;Now&nbsp;for&nbsp;Free
										</b>
									</Typography>
								</Button>
							</div>
						</div>
					</div>

					<div style={{ marginTop: "auto" }}>
						<WhyToAttend />
					</div>

					<div style={{ marginTop: "auto" }}>
						<a id="cfp" href="cfp"></a>
						<CallForPapers />
					</div>

					<div style={{ marginTop: "auto" }}>
						<div className={classes.speakersDiv}>
							<a id="speakers" href="speakers"></a>
							<Speakers />
						</div>
					</div>

					<div style={{ marginTop: "auto" }}>
						<JoinCarnival />
					</div>
				</div>

				<div style={{ marginTop: "auto" }}>
					<a id="sponsors" href="sponsors"></a>
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
