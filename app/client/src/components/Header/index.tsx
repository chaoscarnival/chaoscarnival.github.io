import {
	AppBar,
	Button,
	Fade,
	Hidden,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import history from "../../history";
import CountDown from "../CountDown";
import useStyles from "./styles";

interface MainHeaderProps {
	inHomePage: boolean;
	linksActive: boolean;
}

const MainHeader: React.FC<MainHeaderProps> = ({ inHomePage, linksActive }) => {
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
						<Hidden smDown>
							<div className={classes.headerHomeDiv}>
								<a
									href={
										inHomePage && linksActive
											? "#home"
											: "https://chaoscarnival.io/#home"
									}
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
									href={
										inHomePage && linksActive
											? "#speakers"
											: "https://chaoscarnival.io/#speakers"
									}
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
									href={
										inHomePage && linksActive
											? "#bootcamps"
											: "https://chaoscarnival.io/#bootcamps"
									}
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										Bootcamps
									</Typography>
								</a>
							</div>
						</Hidden>
						<Hidden smDown>
							<div className={classes.headerDiv}>
								<a
									href={
										inHomePage && linksActive
											? "#sponsors"
											: "https://chaoscarnival.io/#sponsors"
									}
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.headerFont}>
										Sponsors
									</Typography>
								</a>
							</div>
						</Hidden>
						<Hidden smDown>
							<div className={classes.headerDivCount}>
								<CountDown
									timeTillDate="02 10 2021, 8:00 am"
									timeFormat="MM DD YYYY, h:mm a"
									inHomePage={inHomePage}
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
								<img
									src={
										inHomePage
											? "/icons/menu.svg"
											: "/icons/menud.svg"
									}
									alt="menu"
								/>
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
										src={
											inHomePage
												? "/icons/chaoscarnival-header.png"
												: "/icons/chaoscarnival-header.png"
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
											href={
												inHomePage && linksActive
													? "#speakers"
													: "https://chaoscarnival.io/#home"
											}
											style={{
												textDecoration: "none",
												color: "#fff",
												fontWeight: "bold",
											}}
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
											href={
												inHomePage && linksActive
													? "#speakers"
													: "https://chaoscarnival.io/#speakers"
											}
											style={{
												textDecoration: "none",
												color: "#fff",
												fontWeight: "bold",
											}}
										>
											Speakers
										</a>
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
										<a
											href={
												inHomePage && linksActive
													? "#bootcamps"
													: "https://chaoscarnival.io/#bootcamps"
											}
											style={{
												textDecoration: "none",
												color: "#fff",
												fontWeight: "bold",
											}}
										>
											Bootcamps
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
											href={
												inHomePage && linksActive
													? "#sponsors"
													: "https://chaoscarnival.io/#sponsors"
											}
											style={{
												textDecoration: "none",
												color: "#fff",
												fontWeight: "bold",
											}}
										>
											Sponsors
										</a>
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
								</MenuItem>
							</Menu>
						</div>
					</Hidden>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default MainHeader;
