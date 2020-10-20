import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		[theme.breakpoints.up("lg")]: {
			width: 1400,
			margin: "0 auto",
		},
	},
	speakerRoot: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		width: 1400,
		margin: "0 auto",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			flexDirection: "cloumn",
		},
	},
	heading: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		position: "relative",
		marginBottom: theme.spacing(3),
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	},
	speakers: {
		width: "40vw",
		marginTop: "40vh",
	},
	ourExcitingText: {
		fontWeight: 700,
		textAlign: "left",
		fontSize: "70px",
		marginLeft: 200,
		marginTop: 50,
		color: "#262626",
		[theme.breakpoints.up("lg")]: {
			marginLeft: 140,
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: 50,
			marginLeft: 100,
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: 50,
		},
	},
	speakersText: {
		fontWeight: 700,
		width: 300,
		marginBottom: 50,
		background:
			"linear-gradient(270.88deg, #FFDC7E 3.66%, #FF7C71 100.95%)",
		borderRadius: "1rem",
		fontSize: "60px",
		textAlign: "center",
		marginLeft: 200,
		color: "#000000",
		[theme.breakpoints.up("lg")]: {
			marginLeft: 140,
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "50px",
			marginLeft: 100,
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "40px",
			marginLeft: 50,
		},
	},
}));
