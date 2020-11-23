import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		background:
			"rgba(248, 249, 253, 0.98)",
		paddingTop: 100,
		paddingBottom: 100,
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
			marginLeft: 10,
			marginRight: 10,
			margin: "0 auto",
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: 10,
			marginRight: 10,
			margin: "0 auto",
		},
	},
	dateDiv: {
		display: "flex",
		flexDirection: "column",
		paddingTop:"4rem",
		[theme.breakpoints.down("sm")]: {
			marginTop: 20,
			marginLeft: 35,
			marginRight: 35,
			paddingTop:"0rem",
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
			marginTop: 15,
			marginLeft: 30,
		},
	},
	joinText: {
		writingMode: "vertical-lr",
		WebkitTransform: "rotate(180deg)",
		color: "#262626",
		fontWeight: 800,
		fontSize: 100,
		fontStyle: "italic",
		marginTop: "2rem",
	},
	joinTextSM: {
		color: "#262626",
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
		paddingTop:"2.3rem",
		[theme.breakpoints.down("xs")]: {
			width: "90%",
			paddingTop:"0rem",
		},
	},
	descText: {
		color: "#262626",
		textAlign: "left",
		marginLeft: 30,
		fontSize: "0.9rem",
		marginTop: theme.spacing(2.75),
		marginBottom: theme.spacing(2.5),
	},
	logoImg: {
		// height: "200px",
		padding: "1rem 2rem",
		width: "400px",
		[theme.breakpoints.up("xl")]: {
			// height: "200px",
			width: "400px",
		},
		[theme.breakpoints.down("xs")]: {
			width: "100%",
		},
	},
	textDay: {
		color: "#262626",
		fontWeight: 400,
		fontSize: 20,
		marginBottom: 6,
		textAlign: "left",
	},
	hrLine: {
		background: "#262626",
		width: '4px',
		marginLeft: 50,
		marginRight: 70,
		marginTop: 30,
	},
	textDate: {
		color: "#262626",
		fontWeight: 700,
		fontSize: 29,
		marginBottom: 10,
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
		color: "#262626",
		fontSize: "16px",
		[theme.breakpoints.down("xl")]: {
			fontSize: "16px",
		},
	},
	timerBtn: {
		color: "#262626",
		height: 46,
		width: "fit-content",
		marginTop: 12,
		fontSize: "1.45rem",
		fontWeight: 700,
		overflow: "hidden",
		textOverflow: "",
		whiteSpace: "nowrap",
		[theme.breakpoints.down("xs")]: {
			textAlign: "left",
		},
	},
}));
