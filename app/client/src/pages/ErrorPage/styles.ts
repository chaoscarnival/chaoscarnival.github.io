import { makeStyles } from "@material-ui/core/styles";

// Component styles
export const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
		width: "100vw",
		padding: theme.spacing(2),
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "center",
		alignContent: "center",
		background:
			"linear-gradient(180deg,rgba(255, 136, 0, 0.65),rgba(229, 46, 113, 0.65))",
		[theme.breakpoints.down("xs")]: {
			flexFlow: "row wrap",
			alignItems: "center",
			justifyContent: "center",
		},
	},
	mainText: {
		fontSize: "50px",
		color: "#000000",
		lineHeight: "10.5rem",
		[theme.breakpoints.up("xl")]: {
			fontSize: "60px",
		},
		[theme.breakpoints.down("sm")]: {
			lineHeight: "6rem",
			fontSize: "30px",
		},
	},
	text404: {
		fontSize: "370px",
		color: "#000",
		[theme.breakpoints.up("xl")]: {
			fontSize: "370px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "190px",
		},
	},
}));
