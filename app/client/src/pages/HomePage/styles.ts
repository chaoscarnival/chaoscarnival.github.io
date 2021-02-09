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
			paddingTop: theme.spacing(15),
		},
		[theme.breakpoints.down("sm")]: {
			height: "fit-content",
			paddingTop: 0,
		},
		[theme.breakpoints.down("xs")]: {
			height: "47.5rem",
			paddingTop: theme.spacing(3),
		},
	},

	headerDesc: {
		fontSize: "26px",
		marginBottom: 20,
		textAlign: "left",
		color: "#FAFF53",
		maxWidth: 500,
		marginTop: "2vh",
		marginLeft: 30,
		fontWeight: 700,
		[theme.breakpoints.down("xl")]: {
			fontSize: "26px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "24px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "22px",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "20vh",
			fontSize: "20px",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "20vh",
			fontSize: "20px",
			marginLeft: "3vw",
		},
	},

	registerButton: {
		height: "3.65rem",
		width: "18.5rem",
		[theme.breakpoints.down("xl")]: {
			height: "3.65rem",
			width: "18.5rem",
		},
		[theme.breakpoints.down("lg")]: {
			height: "3.15rem",
			width: "16.5rem",
		},
		[theme.breakpoints.down("md")]: {
			height: "3.15rem",
			width: "14.5rem",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: 0,
			height: "3.15rem",
			width: "9.75rem",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: 0,
			height: "3.15rem",
			width: "90vw",
		},
	},
	registerText: {
		fontSize: "16px",
		[theme.breakpoints.down("xl")]: {
			fontSize: "16px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "16px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "14px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "12px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "16px",
		},
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
		margin: "0 auto",
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
