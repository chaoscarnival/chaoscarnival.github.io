import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		background: "#070E23",
		paddingTop: 50,
		[theme.breakpoints.down("xs")]: {
			paddingTop: 0,
		},
	},
	mainDiv: {
		marginTop: 40,
		paddingBottom: 60,
		margin: "0 auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		maxWidth: "1000px",
		[theme.breakpoints.up("xl")]: {
			maxWidth: "1100px",
			margin: "0 auto",
		},
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			flexDirection: "column",
			maxWidth: "100%",
			marginLeft: "8vw",
			marginRight: "8vw",
			margin: "0 auto",
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: 0,
			margin: "0 auto",
		},
	},
	divider: {
		borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
		width: "85%",
		margin: "0 auto",
		paddingTop: 120,
		background: "#070E23",
		[theme.breakpoints.down("xs")]: {
			paddingTop: 0,
		},
	},
	dateDiv: {
		display: "flex",
		flexDirection: "column",
		paddingTop: "4rem",
		[theme.breakpoints.down("sm")]: {
			marginTop: 20,
			marginLeft: "2vw",
			marginRight: "2vw",
			paddingTop: "0rem",
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: "8vw",
			marginRight: "8vw",
		},
	},
	regNow: {
		display: "flex",
		flexDirection: "row",
		marginTop: 30,
		marginLeft: 10,
		[theme.breakpoints.down("xs")]: {
			display: "flex",
			flexDirection: "column",
			marginTop: 15,
			marginLeft: 30,
		},
	},
	joinText: {
		writingMode: "vertical-lr",
		WebkitTransform: "rotate(180deg)",
		color: "#FFFFFF",
		fontWeight: 800,
		fontSize: 100,
		fontStyle: "italic",
		marginTop: "2rem",
	},
	joinTextSM: {
		color: "#FFFFFF",
		fontWeight: 800,
		fontSize: 60,
		fontStyle: "italic",
		marginTop: 20,
		marginRight: "auto",
		marginLeft: 30,
		[theme.breakpoints.down("xs")]: {
			fontWeight: 800,
			fontSize: 30,
			marginRight: "auto",
			marginLeft: 25,
		},
	},
	imageDiv: {
		display: "flex",
		flexDirection: "column",
		width: "450px",
		paddingTop: "2.3rem",
		[theme.breakpoints.down("xs")]: {
			width: "92.5vw",
			paddingTop: "0rem",
		},
	},
	descText: {
		color: "#FFFFFF",
		textAlign: "left",
		marginLeft: 30,
		fontSize: "0.9rem",
		marginTop: theme.spacing(2.75),
		marginBottom: theme.spacing(2.5),
		[theme.breakpoints.down("xs")]: {
			fontSize: "1rem",
		},
	},
	logoImg: {
		padding: "1rem 2rem",
		width: "400px",
		[theme.breakpoints.up("xl")]: {
			width: "400px",
		},
		[theme.breakpoints.down("xs")]: {
			width: "100%",
		},
	},
	textDay: {
		color: "#FFFFFF",
		fontWeight: 400,
		fontSize: 20,
		textAlign: "left",
	},
	hrLine: {
		background: "#FFFFFF",
		width: "4px",
		borderRadius: "4px",
		marginLeft: 50,
		marginRight: 70,
		marginTop: 30,
		[theme.breakpoints.down("sm")]: {
			width: "95%",
			height: "5px",
			borderRadius: "5px",
			marginLeft: "2vw",
			marginRight: 0,
		},
		[theme.breakpoints.down("xs")]: {
			width: "85%",
			marginLeft: "8vw",
		},
	},
	textDate: {
		color: "#FFFFFF",
		fontWeight: 700,
		fontSize: 29,
		textAlign: "left",
		[theme.breakpoints.down("xs")]: {
			fontSize: 24,
		},
	},
	registerButton: {
		height: "3.5rem",
		width: "12.5rem",
		[theme.breakpoints.down("xs")]: {
			width: "100%",
		},
	},
	registerButtonOutline: {
		height: "3.5rem",
		width: "12.5rem",
		border: "3px solid #FE1C65",
		color: "#FFFFFF",
		marginTop: 15,
		[theme.breakpoints.down("xl")]: {
			height: "3.5rem",
			width: "12.5rem",
		},

		[theme.breakpoints.down("sm")]: {
			height: "3.5rem",
			width: "12.5rem",
		},
		[theme.breakpoints.down("xs")]: {
			width: "100%",
		},
	},
	registerText: {
		fontSize: "16px",
		[theme.breakpoints.down("xl")]: {
			fontSize: "16px",
		},
	},
	timerText: {
		color: "#FFFFFF",
		fontSize: "16px",
		[theme.breakpoints.down("xl")]: {
			fontSize: "16px",
		},
	},
	timerBtn: {
		color: "#FFFFFF",
		height: 46,
		width: "fit-content",
		marginTop: 12,
		fontSize: "1.7rem",
		fontWeight: 700,
		overflow: "hidden",
		textOverflow: "",
		whiteSpace: "nowrap",
		[theme.breakpoints.down("xs")]: {
			textAlign: "left",
			fontSize: "1.85rem",
		},
	},
}));
