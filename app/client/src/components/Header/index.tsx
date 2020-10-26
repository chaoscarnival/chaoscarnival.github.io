import {
	Hidden,
	MenuItem,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Menu,
	Fade,
	Button,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import CloseIcon from "@material-ui/icons/Close";
import history from "../../history";
import CountDown from "../CountDown";
import LazyLoad from 'react-lazy-load';

interface MainHeaderProps {
	inHomePage: boolean;
}

const MainHeader: React.FC<MainHeaderProps> = ({ inHomePage }) => {
	const classes = useStyles(inHomePage);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div>
			<AppBar
				position="relative"
				className={classes.appBar}
				elevation={0}
			>
				<Toolbar className={classes.toolbarDiv}>
					<div className={classes.toolbarDiv}>
						<Hidden smDown>
							<img
								src={
									inHomePage
										? "/icons/chaoscarnival-header.png"
										: "/icons/chaoscarnival-header-dark.png"
								}
								alt=" header"
								className={classes.mainLogo}
								onClick={() => history.push("/")}
							/>
						</Hidden>
						<Hidden smDown>
							<div className={classes.headerHomeDiv}>
								<a
									href={inHomePage ? "#home" : "https://chaoscarnival.io"}
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										Home
									</Typography>
								</a>
							</div>
						</Hidden>
						<Hidden smDown>
							<div className={classes.headerDiv}>
								<a
									href={inHomePage ? "#speakers" : "https://chaoscarnival.io/#speakers"}
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										Speakers
									</Typography>
								</a>
							</div>
						</Hidden>
						<Hidden smDown>
							<div className={classes.headerDiv}>
								<a
									href={inHomePage ? "#cfp" : "https://chaoscarnival.io/#cfp"}
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										CFP
									</Typography>
								</a>
							</div>
						</Hidden>
						<Hidden smDown>
							<div className={classes.headerDiv}>
								<a
									href={inHomePage ? "#sponsors" : "https://chaoscarnival.io/#sponsors"}
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										Sponsors
									</Typography>
								</a>
							</div>
						</Hidden>
						<div className={classes.headerDivCount}>
							<CountDown
								timeTillDate="01 08 2021, 6:00 am"
								timeFormat="MM DD YYYY, h:mm a"
								inHomePage={inHomePage}
							/>
						</div>
					</div>
					<Hidden mdUp>
						<div className={classes.headerDiv}>
							<IconButton
								onClick={handleClick}
								className={classes.menu}
							>
								<img src={inHomePage ? "/icons/menu.svg" : "/icons/menud.svg"} alt="menu" />
							</IconButton>
							<LazyLoad offsetTop={100}>
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
											backgroundColor: "#FFFFFF",
											borderRadius: 4,
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
											src={
												inHomePage
													? "/icons/chaoscarnival-header-dark.png"
													: "/icons/chaoscarnival-header-dark.png"
											}
											style={{ margin: 0 }}
											alt="logo"
											className={classes.mainLogo}
											onClick={() => history.push("/")}
										/>
									</MenuItem>
									<MenuItem
										className={classes.menuItem}
										button={false}
										key="home"
									>
										<Typography
											className={classes.contributeBtn}
											onClick={handleClose}
										>
											<a
												href={inHomePage ? "#speakers" : "https://chaoscarnival.io/#home"}
												style={{ textDecoration: "none" }}
											>
												Home
										</a>
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
											<a
												href={inHomePage ? "#speakers" : "https://chaoscarnival.io/#speakers"}
												style={{ textDecoration: "none" }}
											>
												Speakers
										</a>
										</Typography>
									</MenuItem>
									<MenuItem
										className={classes.menuItem}
										button={false}
										key="cfp"
									>
										<Typography
											className={classes.contributeBtn}
											onClick={handleClose}
										>
											<a
												href={inHomePage ? "#cfp" : "https://chaoscarnival.io/#cfp"}
												style={{ textDecoration: "none" }}
											>
												CFP
										</a>
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
											<a
												href={inHomePage ? "#sponsors" : "https://chaoscarnival.io/#sponsors"}
												style={{ textDecoration: "none" }}
											>
												Sponsors
										</a>
										</Typography>
									</MenuItem>
									<MenuItem
										className={classes.menuItem}
										button={false}
										key="timer"
										style={{ justifyContent: "center", color: "#000", margin: 0 }}
									>
										<div style={{ margin: "auto" }}>
											<Button
												className={classes.registerButton}
												color="primary"
												variant="contained"
												style={{ margin: "auto", padding: "2rem", marginTop: "2rem", width: "100%" }}
												onClick={() => {
													window.open(
														"https://join.slack.com/t/chaoscarnival/shared_invite/zt-ic63h58h-C_G5IwZ1EwhCtDcSpEEd0w"
													);
												}}
											>
												<Typography
													className={classes.registerText}
													style={{ textTransform: "none", fontSize: "1.15rem" }}
												>
													<b>Register&nbsp;Now&nbsp;for&nbsp;Free</b>
												</Typography>
											</Button>
										</div>
									</MenuItem>
								</Menu>
							</LazyLoad>
						</div>
					</Hidden>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default MainHeader;
