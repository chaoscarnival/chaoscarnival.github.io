import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		paddingTop: 60,
		paddingBottom: 60,
		backgroundColor: "#FFFFFF",
		[theme.breakpoints.down("sm")]: {
			paddingTop: 10,
		},
	},
	headerText: {
		fontWeight: 700,
		fontSize: 60,
		textAlign: "left",
		background: "linear-gradient(to right, #C94CA8 0%, #2C84F9 100%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		[theme.breakpoints.down("xs")]: {
			fontSize: 40,
		},
	},
	sponsorText: {
		color: "#000000",
		fontWeight: 700,
		fontSize: 60,
		textAlign: "left",
		[theme.breakpoints.down("xs")]: {
			fontSize: 40,
		},
	},
	mainDiv: {
		display: "flex",
		flexDirection: "row",
		[theme.breakpoints.up("xl")]: {
			maxWidth: 1420,
			margin: "0 auto",
		},
		[theme.breakpoints.down("xs")]: {
			display: "flex",
			flexDirection: "column",
		},
	},
	sponsorDiv: {
		width: "50%",
		paddingLeft: "20%",
		paddingTop: 20,
		[theme.breakpoints.down("sm")]: {
			marginLeft: "10%",
			paddingLeft: 0,
		},
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			marginLeft: 20,
		},
	},
	sponsorImgMainDiv: {
		width: "50%",
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.down("xs")]: {
			width: "100%",
		},
	},
	sponsorImgDiv: {
		width: "50%",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		alignItems: "left",
		marginLeft: "10%",
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			marginLeft: 10,
			flexDirection: "column",
			justifyContent: "left",
		},
	},
	sponsorImg: {
		maxWidth: 300,
		maxHeight: 100,
		padding: 20,
		[theme.breakpoints.down("xs")]: {
			maxWidth: 200,
			maxHeight: 80,
			marginRight: 0,
		},
	},
	footerText: {
		color: "#8193B2",
		marginTop: 20,
		fontSize: "1.2rem",
		textAlign: "left",
		marginLeft: "12%",
		[theme.breakpoints.down("xs")]: {
			marginLeft: 30,
		},
	},
}));
