import { Button, Hidden, Typography } from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet";
import MainHeader from "../../components/Header";
import "../../scrollbar.css";
import { useStyles } from "./styles";

function AcknowledgementPage() {
	const classes = useStyles();

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Chaos Carnival 2021 | Thanks for registering !</title>
				<meta
					name="keywords"
					content="Chaos carnival 2021, chaos engineering, adrian cockcroft, chaos conference, chaos conference 2021, chaosconf, chaos engineering bootcamps, chaos engineering 101, cloud native, Acknowledgement, Thanks for registering"
				/>
				<link
					rel="canonical"
					href="https://chaoscarvival.io/acknowledgement"
				/>
			</Helmet>
			<div className="scrollbar scrollbar-primary">
				<div className={classes.rootContainer}>
					<MainHeader />
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
										You’ll soon receive a confimation email
										with event details. Feel free to join
										our slack community.
									</Typography>
								</div>
								<div style={{ margin: "auto" }}>
									<div className={classes.buttons}>
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
												style={{
													textTransform: "none",
												}}
											>
												<img
													src="/icons/social/Slack.svg"
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
												src="/icons/social/Fb.svg"
												alt="Facebook"
												className={
													classes.footerIconImages
												}
											/>
										</a>
										&emsp;&emsp;
										<a
											href="https://twitter.com/chaoscarnivalio"
											target="#"
											style={{ textDecoration: "none" }}
										>
											<img
												src="/icons/social/Twitter.svg"
												alt="Twitter"
												className={
													classes.footerIconImages
												}
											/>
										</a>
										&emsp;&emsp;
										<a
											href="https://www.linkedin.com/company/chaos-carnival"
											target="#"
											style={{ textDecoration: "none" }}
										>
											<img
												src="/icons/social/LinkedIn.svg"
												alt="Linkedin"
												className={
													classes.footerIconImages
												}
											/>
										</a>
										&emsp;&emsp;
										<a
											href="https://medium.com/@chaoscarnival"
											target="#"
											style={{ textDecoration: "none" }}
										>
											<img
												src="/icons/social/Medium.svg"
												alt="Medium"
												className={
													classes.footerIconImages
												}
											/>
										</a>
										&emsp;&emsp;
										<a
											href="https://www.youtube.com/channel/UCDoH57pQWHU0MCm6Y5Y3LhA"
											target="#"
											style={{ textDecoration: "none" }}
										>
											<img
												src="/icons/social/Youtube.svg"
												alt="Youtube"
												className={
													classes.footerIconImages
												}
											/>
										</a>
									</Typography>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AcknowledgementPage;
