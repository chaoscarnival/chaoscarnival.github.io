import {
	AppBar,
	Button,
	Divider,
	Fade,
	Hidden,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import gtag from "ga-gtag";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import history from "../../history";
import CountDown from "../CountDown";
import useStyles from "./styles";

const MainHeader: React.FC = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

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
		<div>
			<AppBar
				position="relative"
				className={classes.appBar}
				elevation={0}
			>
				<Toolbar className={classes.toolbarDiv}>
					<div className={classes.toolbarDiv}>
						<div>
							<img
								src="/icons/chaoscarnival-header-min.png"
								alt=" header"
								className={classes.mainLogo}
								onClick={() => history.push("/")}
							/>
							<Hidden smDown>
								<Button
									className={classes.registerButtonSmall}
									color="primary"
									variant="contained"
									onClick={() => {
										gtag_report_conversion(
											"https://chaoscarnival.io/register"
										);
										history.push("/register");
									}}
								>
									<Typography
										className={classes.registerText}
										style={{
											textTransform: "none",
										}}
									>
										<b>Register&nbsp;Now</b>
									</Typography>
								</Button>
							</Hidden>
						</div>

						<div className={classes.flexLinks}>
							<Hidden smDown>
								<div>
									<Link
										to="/#home"
										smooth
										style={{ textDecoration: "none" }}
									>
										<Typography
											className={classes.headerFont}
										>
											Home
										</Typography>
									</Link>
								</div>
							</Hidden>
							<Hidden smDown>
								<div className={classes.headerDiv}>
									<Link
										to="/agenda"
										style={{ textDecoration: "none" }}
									>
										<Typography
											className={classes.headerFont}
										>
											Agenda
										</Typography>
									</Link>
								</div>
							</Hidden>
							<Hidden smDown>
								<div className={classes.headerDiv}>
									<Link
										to="/#speakers"
										smooth
										style={{ textDecoration: "none" }}
									>
										<Typography
											className={classes.headerFont}
										>
											Speakers
										</Typography>
									</Link>
								</div>
							</Hidden>

							<Hidden smDown>
								<div className={classes.headerDiv}>
									<Link
										to="/bootcamps"
										style={{ textDecoration: "none" }}
									>
										<Typography
											className={classes.headerFont}
										>
											Bootcamps
										</Typography>
									</Link>
								</div>
							</Hidden>
							<Hidden smDown>
								<div className={classes.headerDiv}>
									<Link
										to="/sponsorbooths"
										smooth
										style={{ textDecoration: "none" }}
									>
										<Typography
											className={classes.headerFont}
										>
											Sponsor Booths
										</Typography>
									</Link>
								</div>
							</Hidden>
							<Hidden smDown>
								<div className={classes.headerDivCount}>
									<CountDown
										timeTillDate="02 10 2021, 8:00 am"
										timeFormat="MM DD YYYY, h:mm a"
									/>
								</div>
							</Hidden>
						</div>
						<Hidden mdUp>
							<div className={classes.headerDiv}>
								<IconButton
									onClick={handleClick}
									className={classes.menu}
								>
									<img src="/icons/menu.svg" alt="menu" />
								</IconButton>

								<Menu
									anchorEl={anchorEl}
									keepMounted
									open={open}
									onClose={handleClose}
									TransitionComponent={Fade}
									className={classes.backdrop}
									PaperProps={{
										style: {
											marginTop: 50,
											width: "100%",
											backgroundColor: "transparent",
											filter: "drop-shadow(0)",
											justifyContent: "center",
										},
									}}
								>
									<MenuItem
										className={classes.menuItemClose}
										button={false}
										key="close"
									>
										<IconButton onClick={handleClose}>
											<CloseIcon
												fontSize="large"
												className={classes.closeBtn}
											/>
										</IconButton>
									</MenuItem>
									<MenuItem
										className={classes.menuItem}
										button={false}
										key="logo"
										style={{ justifyContent: "center" }}
									>
										<img
											src="/icons/chaoscarnival-header-min.png"
											style={{ margin: 0 }}
											alt="logo"
											className={classes.mainLogo}
											onClick={() => history.push("/")}
										/>
									</MenuItem>

									{/* Nav links */}
									<MenuItem
										className={classes.menuItem}
										button={false}
										key="home"
									>
										<Typography
											className={classes.contributeBtn}
											onClick={handleClose}
										>
											<Link
												to="/#home"
												smooth
												style={{
													textDecoration: "none",
													color: "#fff",
													fontWeight: "bold",
												}}
											>
												Home
											</Link>
										</Typography>
									</MenuItem>
									<MenuItem
										className={classes.menuItem}
										button={false}
										key="agenda"
									>
										<Typography
											className={classes.contributeBtn}
											onClick={handleClose}
										>
											<Link
												to="/agenda"
												style={{
													textDecoration: "none",
													color: "#fff",
													fontWeight: "bold",
												}}
											>
												Agenda
											</Link>
										</Typography>
									</MenuItem>
									<MenuItem
										className={classes.menuItem}
										button={false}
										key="speakers"
									>
										<Typography
											className={classes.contributeBtn}
											onClick={handleClose}
										>
											<Link
												to="/#speakers"
												smooth
												style={{
													textDecoration: "none",
													color: "#fff",
													fontWeight: "bold",
												}}
											>
												Speakers
											</Link>
										</Typography>
									</MenuItem>
									<MenuItem
										className={classes.menuItem}
										button={false}
										key="bootcamps"
									>
										<Typography
											className={classes.contributeBtn}
											onClick={handleClose}
										>
											<Link
												to="/bootcamps"
												style={{
													textDecoration: "none",
													color: "#fff",
													fontWeight: "bold",
												}}
											>
												Bootcamps
											</Link>
										</Typography>
									</MenuItem>
									<MenuItem
										className={classes.menuItem}
										button={false}
										key="sponsors"
									>
										<Typography
											className={classes.contributeBtn}
											onClick={handleClose}
										>
											<Link
												to="/sponsorbooths"
												smooth
												style={{
													textDecoration: "none",
													color: "#fff",
													fontWeight: "bold",
												}}
											>
												Sponsor Booths
											</Link>
										</Typography>
									</MenuItem>
									<MenuItem
										className={classes.menuItem}
										button={false}
										key="timer"
										style={{
											justifyContent: "center",
											color: "#000",
											margin: 0,
										}}
									>
										<div style={{ margin: "auto" }}>
											<Button
												className={
													classes.registerButton
												}
												color="primary"
												variant="contained"
												style={{
													margin: "auto",
													padding: "2rem",
													marginTop: "2rem",
													width: "100%",
												}}
												onClick={() =>
													history.push("/register")
												}
											>
												<Typography
													className={
														classes.registerText
													}
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
									</MenuItem>
								</Menu>
							</div>
						</Hidden>
					</div>
				</Toolbar>
				<Divider className={classes.divider} />
			</AppBar>
		</div>
	);
};

export default MainHeader;
