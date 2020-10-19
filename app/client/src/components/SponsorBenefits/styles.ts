import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		backgroundColor: "#000000",
		marginTop: 40,
	},
	mainDiv: {
		marginLeft: 140,
		marginRight: 140,
		paddingBottom: 60,
		[theme.breakpoints.up("xl")]: {
			maxWidth: 1420,
			margin: "0 auto",
		},
	},
	headerText: {
		paddingTop: 60,
		paddingLeft: 20,
		paddingBottom: 40,
		fontWeight: 700,
		textAlign: "left",
		background: "linear-gradient(270.8deg, #FFDC7E 8.38%, #FF7C71 96.25%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
	},
	sponsorData: {
		marginTop: 20,
		width: 600,
		height: 130,
		display: "flex",
		flexDirection: "row",
	},
	sponsorDataImg: {
		marginTop: 5,
		verticalAlign: "center",
		marginLeft: 20,
		width: 60,
		height: 60,
	},
	sponsorDataText: {
		width: 600,
		textAlign: "left",
		fontSize: 18,
		marginLeft: 30,
	},
}));
