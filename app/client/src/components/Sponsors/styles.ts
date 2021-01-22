import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		paddingTop: 100,
		paddingBottom: 60,
		backgroundColor: "#070E23",
		[theme.breakpoints.down("sm")]: {
			paddingTop: 10,
		},
	},
	headerText: {
		fontWeight: 700,
		fontSize: 60,
		textAlign: "left",
		background: "linear-gradient(to right, #C94CA8 0%, #F39242 50%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		marginLeft: theme.spacing(2.5),
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "45px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: 40,
			marginLeft: theme.spacing(2),
		},
	},
	sponsorText: {
		color: "#FFFFFF",
		fontWeight: 700,
		fontSize: 60,
		textAlign: "left",
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "45px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "40px",
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
		margin: "0 auto",
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
			marginLeft: "-10vw",
		},
		[theme.breakpoints.down(285)]: {
			width: "100%",
			marginLeft: 0,
		},
	},
	sponsorImgMainDiv: {
		width: "85%",
		display: "flex",
		flexDirection: "column",
		paddingLeft: "12%",
		paddingTop: theme.spacing(4),
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
			marginLeft: "-10vw",
			alignItems: "center",
			flexDirection: "row",
			justifyContent: "space-around",
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
			maxWidth: "44vw",
			maxHeight: 100,
			marginRight: 0,
		},
	},
	footerText: {
		color: "#8193B2",
		paddingTop: theme.spacing(5),
		fontSize: "1.4rem",
		paddingLeft: "5%",
		textAlign: "center",
		margin: "0 auto",
		[theme.breakpoints.down("xs")]: {
			textAlign: "left",
			marginLeft: "-8vw",
			fontSize: "1rem",
		},
	},
	link: {
		color: "#488FDF",
	},
}));
