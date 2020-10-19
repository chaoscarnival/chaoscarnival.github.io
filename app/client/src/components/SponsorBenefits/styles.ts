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
		[theme.breakpoints.down("sm")]: {
			maxWidth: "100%",
			marginLeft: 100,
			marginRight: 100,
			margin: "0 auto",
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: 10,
			marginRight: 10,
			margin: "0 auto",
		},
	},
	sponsorDiv: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		alignItems: "left",
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-around",
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
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			paddingLeft: 10,
			textAlign: "center",
		},
	},
	sponsorData: {
		marginTop: 20,
		width: 600,
		height: 130,
		display: "flex",
		flexDirection: "row",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			height: "100%",
			flexDirection: "column",
			marginTop: 30,
			justifyContent: "center",
		},
	},
	sponsorDataImg: {
		marginTop: 5,
		verticalAlign: "center",
		marginLeft: 20,
		width: 60,
		height: 60,
		[theme.breakpoints.down("sm")]: {
			align: "center",
			display: "flex",
			flexDirection: "column",
			margin: "0 auto",
			marginBottom: 10,
		},
	},
	sponsorDataText: {
		width: 600,
		textAlign: "left",
		fontSize: 18,
		marginLeft: 30,
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			display: "flex",
			marginLeft: 0,
			flexDirection: "column",
			textAlign: "center",
		},
	},
}));
