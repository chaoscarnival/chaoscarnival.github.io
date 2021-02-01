import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	rootContainer: {
		height: "100vh",
	},
	root: {
		width: "85%",
		maxWidth: "70rem",
		margin: "0 auto",
		paddingTop: theme.spacing(20),
		[theme.breakpoints.down("sm")]: {
			width: "90%",
		},
	},
	// Title text
	title: {
		fontSize: 60,
		fontWeight: 700,
		width: "fit-content",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		background:
			"linear-gradient(270.88deg, #71BCF6 3.66%, #B4F59E 100.95%)",

		[theme.breakpoints.down("md")]: {
			fontSize: 50,
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: 45,
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: 40,
		},
	},
}));
