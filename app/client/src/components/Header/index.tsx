import {
	AppBar,
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
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import history from "../../history";
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
							<a href="https://chaoscarnival.io">
								<img
									src="/icons/chaoscarnival-header-min.png"
									alt=" header"
									className={classes.mainLogo}
								/>
							</a>
						</div>
						<div className={classes.flexLinks}>
							<Hidden smDown>
								<div>
									<Link
										to="/2021/#home"
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
										to="/2021/agenda"
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
										to="/2021/#speakers"
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
										to="/2021/bootcamps"
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
										to="/2021/sponsorbooths"
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
							{/* <Hidden smDown>
								<div className={classes.headerDivCount}>
									<CountDown
										timeTillDate="02 10 2021, 8:00 am"
										timeFormat="MM DD YYYY, h:mm a"
									/>
								</div>
							</Hidden> */}
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
												to="/2021/#home"
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
												to="/2021/agenda"
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
												to="/2021/#speakers"
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
												to="/2021/bootcamps"
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
										style={{ paddingBottom: "2.5rem" }}
									>
										<Typography
											className={classes.contributeBtn}
											onClick={handleClose}
										>
											<Link
												to="/2021/sponsorbooths"
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
