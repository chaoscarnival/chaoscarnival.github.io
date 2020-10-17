import { makeStyles } from "@material-ui/core/styles";

// Component styles
export const useStyles = makeStyles((theme) => ({
	root: {
		height: "100%",
		padding: theme.spacing(2),
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		[theme.breakpoints.down("sm")]: {
			marginTop: "10%",
		},
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
			alignItems: "center",
		},
		[theme.breakpoints.up("lg")]: {
			marginTop: "5%",
		},
	},
	mainText: {
		fontSize: "50px",
		color: "#000000",
		[theme.breakpoints.up("xl")]: {
			fontSize: "60px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "30px",
		},
	},
}));
