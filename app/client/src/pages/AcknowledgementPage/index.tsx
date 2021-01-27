import { Button, Hidden, Typography } from "@material-ui/core";
import React from "react";
import MainHeader from "../../components/Header";
import "../../scrollbar.css";
import { useStyles } from "./styles";

function AcknowledgementPage() {
	const classes = useStyles();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className="scrollbar scrollbar-primary">
			<div className={classes.rootContainer}>
				<MainHeader inHomePage={true} linksActive={false} />
				<div className={classes.root}>
					<div className={classes.mainDiv}>
						<div className={classes.headerDiv}>
							<div style={{ margin: "auto" }}>
								<img
									src="icons/CCIcon-min.svg"
									alt="Chaos Bird Experiment"
									className={classes.logoImg}
								/>
							</div>
							<div style={{ margin: "auto" }}>
								<Typography
									className={classes.thanksForText}
									style={{ margin: "auto" }}
									display="inline"
								>
									Thanks for
								</Typography>
								<Hidden xsDown>
									<Typography
										className={classes.registeringText}
										style={{ margin: "auto" }}
										display="inline"
									>
										Registering
									</Typography>
								</Hidden>
								<Hidden smUp>
									<Typography
										className={classes.registeringText}
										style={{
											margin: "auto",
											textAlign: "center",
										}}
									>
										Registering
									</Typography>
								</Hidden>
								<Typography
									className={classes.mainHeaderCaption}
									style={{
										margin: "auto",
										textAlign: "center",
									}}
								>
									You’ll soon receive a confimation email with
									event details. Meanwhile you can save the
									dates to calendar and feel free to join our
									slack community.
								</Typography>
							</div>
							<div style={{ margin: "auto" }}>
								<div className={classes.buttons}>
									<Button
										className={
											classes.registerButtonOutline
										}
										color="primary"
										variant="outlined"
										style={{
											margin: "auto",
											padding: "1.5rem",
											marginTop: "2rem",
											width: "46.5%",
										}}
										onClick={() => {
											window.open(
												"https://calendar.google.com/calendar/r/eventedit?text=Chaos+Carnival&dates=20210210T080000/20210211T160000&details=For+updates,+Join:+https://join.slack.com/t/chaoscarnival"
											);
										}}
									>
										<Typography
											className={classes.timerText}
											style={{
												textTransform: "none",
												fontWeight: 600,
											}}
										>
											Save dates to calendar
										</Typography>
									</Button>

									<Button
										className={classes.registerButton}
										color="primary"
										variant="contained"
										style={{
											margin: "auto",
											padding: "1.5rem",
											marginTop: "2rem",
											width: "46.5%",
										}}
										onClick={() => {
											window.open(
												"https://join.slack.com/t/chaoscarnival/shared_invite/zt-jy0q3xxc-EIYmlEXqvqbRRxYQkvdRpw"
											);
										}}
									>
										<Typography
											className={classes.registerText}
											style={{ textTransform: "none" }}
										>
											<img
												src="./icons/social/Slack.svg"
												alt="Slack Icon"
												className={classes.slack}
											/>
											&emsp;
										</Typography>
										<Typography
											className={classes.registerText}
											style={{
												textTransform: "none",
												fontWeight: 600,
											}}
										>
											Join our slack community
										</Typography>
									</Button>
								</div>
							</div>
							<div style={{ margin: "auto" }}>
								<Typography
									className={classes.mainFooterCaption}
									style={{ margin: "auto" }}
								>
									Also keep in touch with us on
								</Typography>

								<Typography
									style={{ margin: "auto" }}
									className={classes.footerIcons}
								>
									<a
										href="https://www.facebook.com/Chaos-Carnival-108128454412853"
										target="#"
										style={{ textDecoration: "none" }}
									>
										<img
											src="./icons/social/Fb.svg"
											alt="Facebook"
											className={classes.footerIconImages}
										/>
									</a>
									&emsp;&emsp;
									<a
										href="https://twitter.com/chaoscarnivalio"
										target="#"
										style={{ textDecoration: "none" }}
									>
										<img
											src="./icons/social/Twitter.svg"
											alt="Twitter"
											className={classes.footerIconImages}
										/>
									</a>
									&emsp;&emsp;
									<a
										href="https://www.linkedin.com/company/chaos-carnival"
										target="#"
										style={{ textDecoration: "none" }}
									>
										<img
											src="./icons/social/LinkedIn.svg"
											alt="Linkedin"
											className={classes.footerIconImages}
										/>
									</a>
									&emsp;&emsp;
									<a
										href="https://medium.com/@chaoscarnival"
										target="#"
										style={{ textDecoration: "none" }}
									>
										<img
											src="./icons/social/Medium.svg"
											alt="Medium"
											className={classes.footerIconImages}
										/>
									</a>
									&emsp;&emsp;
									<a
										href="https://www.youtube.com/channel/UCDoH57pQWHU0MCm6Y5Y3LhA"
										target="#"
										style={{ textDecoration: "none" }}
									>
										<img
											src="./icons/social/Youtube.svg"
											alt="Youtube"
											className={classes.footerIconImages}
										/>
									</a>
								</Typography>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AcknowledgementPage;
