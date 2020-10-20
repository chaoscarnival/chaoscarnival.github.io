import {
	Hidden,
	MenuItem,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Menu,
	Fade,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import CloseIcon from "@material-ui/icons/Close";
import history from "../../history";
import CountDown from "../CountDown";

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
										? "/icons/chaoscarnival-header.svg"
										: "/icons/chaoscarnival-header-dark.svg"
								}
								alt=" header"
								className={classes.mainLogo}
								onClick={() => history.push("/")}
							/>
						</Hidden>
						<Hidden smDown>
							<div className={classes.headerHomeDiv}>
								<a
									href={inHomePage? "#home" : "https://chaoscarnival.io"}
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
								  href={inHomePage? "#speakers" : "https://chaoscarnival.io/#speakers"}
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
								  href={inHomePage? "#cfp" : "https://chaoscarnival.io/#cfp"}
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
								  href={inHomePage? "#sponsors" : "https://chaoscarnival.io/#sponsors"}
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
										backgroundColor: "#FFFFFF",
										borderRadius: 4,
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
									key="speakers"
								>
									<Typography
										className={classes.contributeBtn}
										onClick={handleClose}
									>
									<a
								  href={inHomePage? "#speakers" : "https://chaoscarnival.io/#speakers"}
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
									href={inHomePage? "#cfp" : "https://chaoscarnival.io/#cfp"}
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
									href={inHomePage? "#sponsors" : "https://chaoscarnival.io/#sponsors"}
									style={{ textDecoration: "none" }}
								>
										Sponsors
										</a>
									</Typography>
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
