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
		background:
			"linear-gradient(160.34deg, #042C69 0%, #041739 21.78%, #040D21 50.11%, #1B132F 82.45%, #471F48 99.57%)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
		height: "101vh",
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.down("sm")]: {
			background:
				"linear-gradient(160.34deg, #042C69 0%, #041739 21.78%, #040D21 50.11%, #1B132F 82.45%, #471F48 99.57%)",
			backgroundSize: "cover",
			height: "115vh",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: 0,
			height: "115vh",
		},
		[theme.breakpoints.down(350)]: {
			marginTop: 0,
			height: "125vh",
		},
	},
	headerDiv: {
		display: "flex",
		flexDirection: "column",
	},
	thanksForText: {
		color: theme.palette.common.white,
		marginBottom: 20,
		fontWeight: 700,
		marginTop: "-40vh",
		textAlign: "left",
		fontSize: "70px",
		marginLeft: "10vw",
		paddingRight: theme.spacing(3),
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
			marginLeft: "8vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "40px",
			marginLeft: "3vw",
			paddingRight: theme.spacing(2),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "35px",
			marginLeft: "3vw",
			paddingRight: theme.spacing(1),
		},
	},
	registeringText: {
		textAlign: "left",
		marginBottom: 20,
		fontWeight: 700,
		width: "fit-content",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background: "linear-gradient(89deg, #901BF3 0%, #FF0052 99.41%)",
		fontSize: "70px",
		marginLeft: "10vw",
		marginTop: theme.spacing(-2),
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
			marginLeft: "8vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "40px",
			marginLeft: "3vw",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "35px",
			marginLeft: "3vw",
		},
	},
	registerButtonOutline: {
		height: "3.5rem",
		width: "12.5rem",
		marginTop: theme.spacing(5),
		borderColor: "#8B17A0",
		"&:hover": {
			backgroundColor: "#5B44BA",
		},
		[theme.breakpoints.down("xl")]: {
			height: "3.5rem",
			width: "12.5rem",
		},
		[theme.breakpoints.down("lg")]: {
			height: "3rem",
			width: "10.5rem",
		},
		[theme.breakpoints.down("md")]: {
			height: "2.5rem",
			width: "8.5rem",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "20vh",
			height: "2rem",
			width: "7.5rem",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "20vh",
			height: "2rem",
			width: "7rem",
		},
	},
	timerText: {
		fontSize: "14px",
		color: "#FFFFFF",
		[theme.breakpoints.down("xl")]: {
			fontSize: "14px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "14px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "10px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "10px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "10px",
		},
	},
	mainHeaderCaption: {
		fontSize: "24px",
		fontWeight: 500,
		color: theme.palette.common.white,
		textAlign: "left",
		marginBottom: 20,
		paddingTop: theme.spacing(3),
		lineHeight: "130%",
		paddingLeft: "25%",
		paddingRight: "25%",
		[theme.breakpoints.down("xl")]: {
			fontSize: "24px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "20px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "16px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "16px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "12px",
			paddingLeft: "10%",
			paddingRight: "10%",
		},
	},
	mainFooterCaption: {
		fontSize: "24px",
		fontWeight: 500,
		color: theme.palette.common.white,
		textAlign: "left",
		marginBottom: 20,
		paddingTop: theme.spacing(15),
		lineHeight: "130%",
		[theme.breakpoints.down("xl")]: {
			fontSize: "24px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "20px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "16px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "16px",
			paddingTop: theme.spacing(7.5),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "16px",
			paddingTop: theme.spacing(5),
		},
	},
	slack: {
		marginTop: theme.spacing(1),
		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(2),
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: theme.spacing(1),
			width: "20px",
			height: "20px",
		},
	},
	footerIcons: {
		paddingTop: theme.spacing(3),
	},
	footerIconImages: {
		width: "20px",
		height: "20px",
	},
	buttons: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "45vw",
		marginTop: theme.spacing(2),
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
			width: "130vw",
			marginLeft: "-15vw",
		},
	},
	registerButton: {
		height: "3.5rem",
		width: "12.5rem",
		marginTop: theme.spacing(5),
		background: "#8B17A0",
		"&:hover": {
			backgroundColor: "#5B44BA",
		},
		display: "flex",
		flexDirection: "row",
		[theme.breakpoints.down("xl")]: {
			height: "3.5rem",
			width: "12.5rem",
		},
		[theme.breakpoints.down("lg")]: {
			height: "3rem",
			width: "10.5rem",
		},
		[theme.breakpoints.down("md")]: {
			height: "2.5rem",
			width: "8.5rem",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "20vh",
			height: "2rem",
			width: "7.5rem",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "20vh",
			height: "2rem",
			width: "7rem",
		},
	},
	registerText: {
		fontSize: "14px",
		[theme.breakpoints.down("xl")]: {
			fontSize: "14px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "14px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "10px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "10px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "10px",
		},
	},
	logoImg: {
		marginTop: "15vh",
		padding: "1rem",
		width: "25vh",
		[theme.breakpoints.down("xl")]: {
			width: "25vh",
		},
		[theme.breakpoints.down("lg")]: {
			width: "20vh",
		},
		[theme.breakpoints.down("md")]: {
			width: "20vh",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "25vh",
			width: "20vh",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "20vh",
			width: "27.5vw",
		},
	},
}));
