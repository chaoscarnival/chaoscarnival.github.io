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
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		margin: "0 auto",
		marginTop: 50,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundImage: "url(/icons/hero-background-min.png)",
		[theme.breakpoints.up("xl")]: {
			marginTop: "20vh",
		},
		[theme.breakpoints.down(1200)]: {
			height: "fit-content",
			paddingTop: theme.spacing(15),
		},
		[theme.breakpoints.down("sm")]: {
			height: "fit-content",
			paddingTop: 0,
			backgroundSize: "150%",
			marginTop: 10,
		},
		[theme.breakpoints.down("xs")]: {
			paddingTop: theme.spacing(3),
		},
	},
	sessionsDiv: {
		height: "fit-content",
		display: "flex",
		flexDirection: "column",
		width: "90%",
		margin: "0 auto",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	heroSection: {
		textAlign: "center",
		margin: "0 auto",
		paddingTop: "10rem",
		[theme.breakpoints.down("sm")]: {
			paddingTop: 0,
			paddingBottom: "3.5rem",
		},
	},
	sessions1: {
		paddingTop: "2rem",
		margin: "0 auto",
		paddingLeft: "2rem",
		[theme.breakpoints.down("sm")]: {
			paddingTop: "3.5rem",
		},
	},
	sessions2: {
		margin: "0 auto",
		paddingLeft: "2rem",
		paddingTop: "3.5rem",
	},
	headerDesc: {
		fontSize: "32.5px",
		marginBottom: 20,
		textAlign: "center",
		color: "#FAFF53",
		fontWeight: 700,
		[theme.breakpoints.down("md")]: {
			fontSize: "30px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "20px",
			paddingTop: 180,
		},
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
		whiteSpace: "pre-line",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			fontSize: "85px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "54px",
		},
	},
	heroButtonSection: {
		display: "flex",
		justifyContent: "space-between",
		width: "27rem",
		margin: "auto",
		marginTop: 20,
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
			width: "100%",
			alignItems: "center",
		},
	},
	joinButton: {
		height: "3.5rem",
		width: "12.5rem",
		textTransform: "none",
		fontSize: 16,
		[theme.breakpoints.down("sm")]: {
			marginBottom: 20,
		},
	},
	slackButton: {
		height: "3.5rem",
		width: "12.5rem",
		backgroundColor: "#FFFFFF",
		textTransform: "none",
		fontSize: 16,
		marginTop: 40,
	},
	happeningMainText: {
		fontSize: 56,
		fontWeight: 700,
		[theme.breakpoints.down("xs")]: {
			fontSize: 32,
		},
	},
	happeningText: {
		fontSize: 56,
		fontWeight: 700,
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background:
			"linear-gradient(89.08deg, #3BF0E4 4.54%, #9867F0 25.3%, #C2A0FD 41.12%, #EA5DAD 57.44%, #FF7571 75.24%, #FFE580 99.46%)",
		[theme.breakpoints.down("xs")]: {
			fontSize: 32,
		},
	},
	subHeadingText: {
		whiteSpace: "pre-line",
		fontSize: "1.25rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1rem",
		},
	},
	carnivalDesc: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		fontSize: 20,
		color: " #8193B2",
		marginTop: 20,
		"& p:first-child": {
			fontSize: "3.5rem",
			fontWeight: 500,
			textAlign: "center",
			color: theme.palette.common.white,
		},
		[theme.breakpoints.down("xs")]: {
			width: "90%",
			margin: "auto",
			"& p:first-child": {
				fontSize: "2.5rem",
				fontWeight: 300,
			},
		},
	},
	videoBox: {
		minWidth: "27.5vw",
		minHeight: "30vh",
		borderRadius: "1rem",
		[theme.breakpoints.down("sm")]: {
			marginTop: -40,
			minWidth: "80vw",
			minHeight: "25vh",
		},
	},
	twitterDiv: {
		display: "flex",
		[theme.breakpoints.down("sm")]: {
			marginTop: 150,
			flexDirection: "column",
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: 0,
		},
	},
	embeddedTwitterDiv: {
		marginRight: "auto",
		display: "flex",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			marginTop: 30,
			margin: "auto",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: 30,
			paddingRight: 20,
		},
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
		paddingBottom: "2.5rem",
		marginTop: "5rem",
		[theme.breakpoints.down("xs")]: {
			marginTop: "-6rem",
			paddingBottom: 0,
		},
	},

	flexContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "70vw",
		margin: "auto",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			width: "100%",
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
	RecordedSessionCard: {
		width: "fit-content",
		textAlign: "left",
		fontSize: "2.75rem",
		fontWeight: 700,
		marginTop: 20,
		paddingLeft: "2rem",
		[theme.breakpoints.down("md")]: {
			paddingLeft: "4rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "2rem",
			paddingLeft: "2rem",
		},
		[theme.breakpoints.down("xs")]: {
			padding: 0,
		},
	},
	headDay1: {
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background:
			"linear-gradient(89.08deg, #9867F0 6.51%, #EA5DAD 35.68%, #FF7571 70.79%, #FFE580 98.47%)",
	},
	headDay2: {
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background:
			"linear-gradient(270.88deg, #71BCF6 3.66%, #B4F59E 100.95%)",
	},

	speakerCard: {
		padding: theme.spacing(3.75, 2.5),
		background: "inherit",
		backdropFilter: "blur(10px)",
		width: "fit-content",
		textAlign: "left",
		marginLeft: theme.spacing(18),
		"& p": {
			maxWidth: "15rem",
			fontWeight: 500,
			fontSize: "1rem",
			[theme.breakpoints.down("sm")]: {
				maxWidth: "100%",
				fontWeight: 500,
				fontSize: "0.85rem",
			},
		},
		[theme.breakpoints.down("sm")]: {
			margin: "auto",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: theme.spacing(3.75),
			marginLeft: theme.spacing(0.5),
			padding: 0,
		},
	},
	sessionName: {
		width: "23rem",
		marginTop: theme.spacing(1),
		[theme.breakpoints.down("md")]: {
			width: "20rem",
		},
	},
	iframeDiv: {
		border: "none",
		borderRadius: "0.75rem",
		width: "23rem",
		height: `calc(23rem / (16 / 9))`,
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			borderRadius: "0.75rem",
			maxWidth: "20rem",
		},
	},
}));
