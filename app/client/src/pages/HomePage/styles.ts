import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	rootContainer: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
	},
	root: {
		textAlign: "center",
	},
	mainDiv: {
		marginTop: 0,
		background: "#070E23",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.down(1200)]: {
			height: "fit-content",
		},
		[theme.breakpoints.down("xs")]: {
			paddingTop: theme.spacing(3),
		},
	},
	headerDesc: {
		fontSize: "32.5px",
		marginBottom: 20,
		textAlign: "center",
		color: "#FAFF53",
		fontWeight: 700,
	},
	slackIcon: {
		width: 22,
		height: 22,
		marginRight: 5,
	},
	carnivalLiveText: {
		fontSize: "110px",
		fontWeight: 700,
		width: 700,
		lineHeight: "125px",
	},
	heroButtonSection: {
		display: "flex",
		justifyContent: "space-between",
		width: "27rem",
		margin: "auto",
		marginTop: 20,
	},
	joinButton: {
		height: "3.5rem",
		width: "12.5rem",
		textTransform: "none",
		fontSize: 16,
	},
	slackButton: {
		height: "3.5rem",
		width: "12.5rem",
		backgroundColor: "#FFFFFF",
		textTransform: "none",
		fontSize: 16,
	},
	happeningText: {
		fontSize: 72,
		fontWeight: 700,
		marginTop: -20,
		width: "fit-content",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background: "linear-gradient(to right, #B4F59E 0%, #71BCF6 55%)",
	},
	carnivalDesc: {
		width: 500,
		fontSize: 20,
		color: " #8193B2",
		marginTop: 20,
	},
	twitterBtn: {
		backgroundColor: "#1D9CEA",
		height: "3rem",
		width: "8.5rem",
		borderRadius: 30,
		color: "#FFFFFF",
		marginTop: 40,
		textTransform: "none",
		fontSize: 16,
	},
	speakersDiv: {
		background: "#070E23",
		paddingBottom: "12.5rem",
		[theme.breakpoints.down("xs")]: {
			paddingBottom: 0,
		},
	},

	flexContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "70vw",
		margin: "auto",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
			width: "95vw",
		},
	},
	flexItemText: {
		width: "40vw",
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.down("xs")]: {
			width: "95vw",
		},
	},
	flexItemImage: {
		width: "40vw",
		marginTop: "20rem",
		[theme.breakpoints.up("xl")]: {
			marginTop: "30rem",
		},
		[theme.breakpoints.down("xs")]: {
			width: "100vw",
			marginTop: "5vh",
		},
	},
	letsTalkAboutText: {
		fontWeight: 700,
		textAlign: "left",
		fontSize: 55,
		marginLeft: 30,
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "45px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "36px",
			marginLeft: "3vw",
		},
	},

	chaosEngineeringText: {
		fontWeight: 700,
		fontSize: 55,
		textAlign: "left",
		marginLeft: 30,
		marginRight: "-5vw",
		width: "fit-content",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background:
			"linear-gradient(89.08deg, #3BF0E4 4.54%, #9867F0 25.3%, #C2A0FD 41.12%, #EA5DAD 57.44%, #FF7571 75.24%, #FFE580 99.46%)",
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "50px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "36px",
			marginLeft: "3vw",
		},
	},

	descText: {
		color: "#FFFFFF",
		textAlign: "left",
		marginLeft: 30,
		fontSize: "1.1rem",
		paddingTop: theme.spacing(5),
		marginBottom: theme.spacing(7.5),
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.9rem",
			paddingTop: theme.spacing(3),
			marginBottom: theme.spacing(3),
			marginLeft: "3vw",
			marginRight: "3vw",
		},
	},
	closesText: {
		color: "#FFFFFF",
		textAlign: "left",
		fontSize: "0.95rem",
		fontWeight: 700,
		marginTop: theme.spacing(-0.5),
		marginBottom: theme.spacing(-1.5),
		[theme.breakpoints.down("md")]: {
			fontSize: "0.85rem",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: theme.spacing(3),
			marginBottom: theme.spacing(-1),
			fontSize: "0.9rem",
		},
	},

	regNow: {
		display: "flex",
		flexDirection: "row",
		marginTop: 30,
		marginLeft: 30,
		[theme.breakpoints.down("xs")]: {
			display: "flex",
			flexDirection: "column",
			marginTop: 0,
			marginLeft: "3vw",
		},
	},
	homeBackgroundImg: {
		margin: "0 auto",
		width: "52.5vw",
		marginRight: "-15rem",
		[theme.breakpoints.up("lg")]: {
			width: "55vw",
			marginRight: "-17.5rem",
		},
		[theme.breakpoints.down("lg")]: {
			width: "49vw",
			marginRight: "-17.5rem",
		},
		[theme.breakpoints.down("md")]: {
			width: "45vw",
			marginRight: "-10rem",
		},
		[theme.breakpoints.down(1100)]: {
			width: "41.5vw",
			marginRight: "-15rem",
		},
		[theme.breakpoints.down("sm")]: {
			width: "41.5vw",
			marginRight: "-10rem",
		},
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			marginRight: 0,
			marginBottom: "-7.5rem",
		},
	},
}));
