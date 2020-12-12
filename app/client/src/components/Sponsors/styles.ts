import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		paddingTop: 120,
		paddingBottom: 120,
		backgroundColor: "#FFFFFF",
		[theme.breakpoints.down("sm")]: {
			paddingTop: 10,
		},
	},
	headerText: {
		fontWeight: 700,
		fontSize: 60,
		textAlign: "left",
		background: "linear-gradient(to right, #C94CA8 0%, #2C84F9 50%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		marginLeft: theme.spacing(2.5),
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
		flexDirection: "column",
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
		width: "100%",
		paddingLeft: "20%",
		paddingTop: 20,
		[theme.breakpoints.down("md")]: {
			width: "80%",
		},
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
		width: "85%",
		display: "flex",
		flexDirection: "column",
		paddingLeft: "12%",
		paddingTop: theme.spacing(3),
		[theme.breakpoints.down("md")]: {
			width: "80%",
		},
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			paddingTop: 0,
		},
	},
	sponsorImgDiv: {
		width: "85%",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
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
		marginTop: 25,
		marginBottom: 25,
		[theme.breakpoints.up("sm")]: {
			minWidth: 200,
		},
		[theme.breakpoints.up("md")]: {
			minWidth: 220,
		},
		[theme.breakpoints.up("lg")]: {
			minWidth: 230,
		},
		[theme.breakpoints.up("xl")]: {
			minWidth: 300,
		},
		[theme.breakpoints.down("xs")]: {
			maxWidth: 200,
			maxHeight: 80,
			marginRight: 0,
		},
	},
	footerText: {
		color: "#8193B2",
		paddingTop: theme.spacing(5),
		fontSize: "1.2rem",
		textAlign: "center",
		marginLeft: "10%",
		[theme.breakpoints.down("xs")]: {
			marginLeft: 30,
		},
	},
}));
