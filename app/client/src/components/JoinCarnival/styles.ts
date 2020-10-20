import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		background:
			"linear-gradient(180deg, #0B1229 0%, #0B132C 99.43%, #040D21 100%)",
		paddingTop: 50,
		paddingBottom: 50,
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
		fontWeight: 800,
		fontSize: 100,
		fontStyle: "italic",
		marginTop: "2rem",
	},
	joinTextSM: {
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
		textAlign: "left",
		marginLeft: 30,
	},
	logoImg: {
		height: "200px",
		width: "400px",
		[theme.breakpoints.up("xl")]: {
			height: "200px",
			width: "400px",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: -40,
			width: "100%",
		},
	},
	textDay: {
		fontWeight: 400,
		fontSize: 20,
		marginBottom: 6,
		textAlign: "left",
	},
	hrLine: {
		color: "white",
		marginLeft: 50,
		marginRight: 70,
		marginTop: 30,
	},
	textDate: {
		fontWeight: 700,
		fontSize: 30,
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
	timerBtn: {
		height: 46,
		marginTop: 12,
		fontSize: "1.45rem",
		fontWeight: 700,
		[theme.breakpoints.down("xs")]: {
			textAlign: "left",
		},
	},
}));
