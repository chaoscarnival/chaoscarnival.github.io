import {
	Button,
	FormControl,
	Hidden,
	MenuItem,
	Select,
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
import history from '../../history';
import CountDown from '../CountDown';

export default function MainHeader() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleContribute = () => {
		window.open(
			"https://github.com/litmuschaos/chaos-charts/blob/master/CONTRIBUTING.md"
		);
	};

	const handleGetStarted = () => {
		window.open("https://docs.litmuschaos.io/docs/getstarted/");
	};

	const handleStars = () => {
		window.open("https://github.com/litmuschaos/litmus");
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
				<Hidden smDown>
					<img
						src="/icons/chaoscarnival-header.svg"
						alt="Litmus Logo"
						className={classes.mainLogo}
						onClick={() => history.push("/")}
					/>
</Hidden>
					<Hidden smDown>
						<div className={classes.headerHomeDiv}>
							<a
								href="https://github.com/litmuschaos/chaos-charts/blob/master/CONTRIBUTING.md"
								target="#"
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
								href="https://github.com/litmuschaos/chaos-charts/blob/master/CONTRIBUTING.md"
								target="#"
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
								href="https://github.com/litmuschaos/chaos-charts/blob/master/CONTRIBUTING.md"
								target="#"
								style={{ textDecoration: "none" }}
							>
								<Typography className={classes.headerFont}>
									Agenda
								</Typography>
							</a>
						</div>
					</Hidden>
					<Hidden smDown>
						<div className={classes.headerDiv}>
							<a
								href="https://github.com/litmuschaos/chaos-charts/blob/master/CONTRIBUTING.md"
								target="#"
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
						/>
						</div>
					<Hidden mdUp>
						<div className={classes.headerDiv}>
							<IconButton onClick={handleClick} className={classes.menu}>
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
									key="contribute"
								>
									<Typography
										className={classes.contributeBtn}
										onClick={handleContribute}
									>
										Speakers
									</Typography>
								</MenuItem>
								<MenuItem
								className={classes.menuItem}
								button={false}
								key="contribute"
							>
								<Typography
									className={classes.contributeBtn}
									onClick={handleContribute}
								>
									Agenda
								</Typography>
							</MenuItem>
							<MenuItem
									className={classes.menuItem}
									button={false}
									key="contribute"
								>
									<Typography
										className={classes.contributeBtn}
										onClick={handleContribute}
									>
										Sponsors
									</Typography>
								</MenuItem>
							</Menu>
						</div>
					</Hidden>
				</Toolbar>
			</AppBar>
		</div>
	);
}
