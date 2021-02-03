import { AppBar, Hidden, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Footer: React.FC = () => {
	const classes = useStyles();

	return (
		<div>
			<AppBar
				position="relative"
				className={classes.appBar}
				elevation={0}
			>
				<Toolbar className={classes.toolbarDiv}>
					<div className={classes.toolbarDiv}>
						<img
							src={"/icons/chaoscarnival-header-min.png"}
							alt=" header"
							className={classes.mainLogo}
						/>

						<Typography className={classes.timeFont}>
							February 10-11, 2021
						</Typography>
						<Hidden smDown>
							<div className={classes.headerHomeDiv}>
								<a
									href="https://join.slack.com/t/chaoscarnival/shared_invite/zt-jy0q3xxc-EIYmlEXqvqbRRxYQkvdRpw"
									target="#"
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										Slack
									</Typography>
								</a>
							</div>
							<div className={classes.headerDiv}>
								<a
									href="https://www.facebook.com/Chaos-Carnival-108128454412853"
									target="#"
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										Facebook
									</Typography>
								</a>
							</div>
							<div className={classes.headerDiv}>
								<a
									href="https://medium.com/@chaoscarnival"
									target="#"
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										Medium
									</Typography>
								</a>
							</div>
							<div className={classes.headerDiv}>
								<a
									href="https://twitter.com/chaoscarnivalio"
									target="#"
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										Twitter
									</Typography>
								</a>
							</div>
							<div className={classes.headerDiv}>
								<a
									href="https://www.linkedin.com/company/chaos-carnival"
									target="#"
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										Linkedin
									</Typography>
								</a>
							</div>
							<div className={classes.headerDiv}>
								<a
									href="https://www.youtube.com/channel/UCDoH57pQWHU0MCm6Y5Y3LhA"
									target="#"
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										YouTube
									</Typography>
								</a>
							</div>
							<div className={classes.headerDiv}>
								<a
									href="/team"
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										Team
									</Typography>
								</a>
							</div>
						</Hidden>
						<Hidden mdUp>
							<div className={classes.headerDiv}>
								<a
									href="https://join.slack.com/t/chaoscarnival/shared_invite/zt-jy0q3xxc-EIYmlEXqvqbRRxYQkvdRpw"
									target="#"
									style={{ textDecoration: "none" }}
								>
									<Typography
										className={classes.headerFont}
										display="inline"
									>
										Slack
									</Typography>
								</a>
								<a
									href="https://www.facebook.com/Chaos-Carnival-108128454412853"
									target="#"
									style={{ textDecoration: "none" }}
								>
									<Typography
										className={classes.headerFont}
										display="inline"
									>
										Facebook
									</Typography>
								</a>
								<a
									href="https://medium.com/@chaoscarnival"
									target="#"
									style={{ textDecoration: "none" }}
								>
									<Typography
										className={classes.headerFont}
										display="inline"
									>
										Medium
									</Typography>
								</a>
								<a
									href="https://twitter.com/chaoscarnivalio"
									target="#"
									style={{ textDecoration: "none" }}
								>
									<Typography
										className={classes.headerFont}
										display="inline"
									>
										Twitter
									</Typography>
								</a>
							</div>
							<div className={classes.headerDiv}>
								<a
									href="https://www.linkedin.com/company/chaos-carnival"
									target="#"
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										Linkedin
									</Typography>
								</a>
								<a
									href="https://www.youtube.com/channel/UCDoH57pQWHU0MCm6Y5Y3LhA"
									target="#"
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										YouTube
									</Typography>
								</a>
								<a
									href="https://chaoscarnival.io/team"
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										Team
									</Typography>
								</a>
							</div>
						</Hidden>
					</div>
				</Toolbar>
				<Typography className={classes.copyRightFont}>
					All trademarks and logos are property of their respective
					owners.
				</Typography>
			</AppBar>
		</div>
	);
};

export default Footer;
