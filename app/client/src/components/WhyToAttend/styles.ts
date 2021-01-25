import { makeStyles } from "@material-ui/core/styles";

// Component styles
export const useStyles = makeStyles((theme) => ({
	root: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		marginTop: "-4px",
		background: "#070E23",
		[theme.breakpoints.down("sm")]: {
			height: "fit-content",
		},
	},
	heading: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		width: "85vw",
		margin: "0 auto",
		[theme.breakpoints.up("xl")]: {
			marginTop: "15vh",
		},
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			flexDirection: "column",
			marginLeft: "5vw",
		},
	},
	whyToAttend: {
		marginTop: "20vh",
		[theme.breakpoints.up("xl")]: {
			width: "44vw !important",
		},
		[theme.breakpoints.down("xl")]: {
			width: "60vw",
		},
		[theme.breakpoints.down("sm")]: {
			width: "100vw",
			marginTop: "20vh",
		},
		[theme.breakpoints.down("xs")]: {
			width: "100vw",
			marginTop: "50vh",
		},
	},

	whyToAttendText: {
		fontWeight: 700,
		marginTop: "-40vh",
		textAlign: "left",
		fontSize: "60px",
		marginLeft: "10vw",
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
			marginLeft: "8vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "45px",
			marginLeft: "3vw",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "40px",
			marginLeft: "3vw",
		},
	},
	chaosCarnivalText: {
		fontWeight: 700,
		width: "fit-content",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background: "linear-gradient(to right, #B4F59E 0%, #71BCF6 55%)",
		fontSize: "60px",
		textAlign: "left",
		marginLeft: "10vw",
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
			marginLeft: "8vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "45px",
			marginLeft: "3vw",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "40px",
			marginLeft: "3vw",
		},
	},
	info: {
		marginTop: "-15vh",
		textAlign: "left",
		width: "30vw",
		marginRight: "8vw",
		[theme.breakpoints.down("md")]: {
			marginLeft: "3vw",
			paddingRight: "3vw",
			width: "50vw",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "-12vh",
			marginLeft: "3vw",
			paddingRight: "3vw",
			width: "90vw",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "-18vh",
			paddingRight: "5vw",
			width: "95vw",
		},
		[theme.breakpoints.down(285)]: {
			marginTop: "-5vh",
			paddingRight: "5vw",
			width: "95vw",
		},
	},
	infoText: {
		fontSize: "18px",
		textAlign: "left",
		color: "#FFFFFF",
		[theme.breakpoints.down("sm")]: {
			fontSize: "15px",
		},
	},
	advantages: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "left",
		width: "65vw",
		margin: "0 auto",
		paddingBottom: theme.spacing(8),
		marginTop: theme.spacing(-10),
		[theme.breakpoints.up("xl")]: {
			marginTop: "-20vh",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "5vh",
			flexDirection: "column",
		},
		[theme.breakpoints.down("xs")]: {
			width: "85%",
			marginTop: "5vh",
			flexDirection: "column",
			paddingBottom: theme.spacing(3),
		},
	},
	advantageElements: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "left",
		[theme.breakpoints.down("sm")]: {
			marginTop: "5vh",
			marginLeft: "-5vw",
			marginRight: "3vw",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "5vh",
			marginLeft: 0,
			marginRight: "3vw",
		},
	},
	advantageNumber: {
		color: "#71BCF6",
		fontSize: "1rem",
		fontWeight: 500,
		paddingRight: theme.spacing(1),
		[theme.breakpoints.down("md")]: {
			fontSize: "0.9rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.9rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.9rem",
		},
	},
	advantageHead: {
		fontSize: "1.8rem",
		fontWeight: 500,
		textAlign: "left",
		[theme.breakpoints.down("md")]: {
			fontSize: "1.5rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.4rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.4rem",
		},
	},
	advantageInfo: {
		color: "#8193B2",
		fontSize: "1.2rem",
		textAlign: "left",
		[theme.breakpoints.down("xl")]: {
			fontSize: "1.2rem",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "1.15rem",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "1.05rem",
		},
	},
}));
