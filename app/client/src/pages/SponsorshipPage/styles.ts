import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	rootContainer: {
		background: "#fff",
	},
	mainDiv: {
		display: "flex",
		flexDirection: "column",
	},
	headerDiv: {
		display: "flex",
		flexDirection: "row",
		paddingTop: 150,
		marginLeft: "13vw",
		marginRight: 130,
		width: "75vw",
		[theme.breakpoints.up("xl")]: {
			width: 1550,
			margin: "0 auto",
		},
		[theme.breakpoints.down("md")]: {
			marginTop: 20,
		},
		[theme.breakpoints.down("xs")]: {
			display: "flex",
			flexDirection: "column-reverse",
			paddingTop: 20,
			marginLeft: 20,
			marginRight: 20,
		},
	},
	headerText: {
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	mainHeader: {
		fontSize: "50px",
		fontWeight: 700,
		color: theme.palette.common.black,
		textAlign: "left",
		marginLeft: 70,
		[theme.breakpoints.down("sm")]: {
			fontWeight: 700,
			fontSize: "32px",
			margin: "0 auto",
		},
	},
	headerDesc: {
		fontSize: "24px",
		marginBottom: 20,
		marginLeft: 70,
		color: theme.palette.common.black,
		textAlign: "left",
		paddingTop: 20,
		[theme.breakpoints.down("sm")]: {
			fontSize: "16px",
			margin: "0 auto",
		},
	},
	imgDiv: {
		marginLeft: "auto",
		marginTop: -20,
		maxHeight: 215,
		maxWidth: 215,
		marginRight: 50,
		[theme.breakpoints.down("sm")]: {
			marginTop: "6rem",
			marginBottom: 10,
			margin: "0 auto",
		},
	},
	headerImg: {},
	searchBar: {
		flexGrow: 1,
		[theme.breakpoints.down("sm")]: {
			marginRight: 20,
		},
		[theme.breakpoints.down("xs")]: {
			marginRight: 0,
		},
	},
	searchDiv: {
		display: "flex",
		flexDirection: "row",
		marginLeft: 130,
		marginRight: 80,
		marginTop: 10,
		[theme.breakpoints.up("xl")]: {
			width: 1550,
			margin: "0 auto",
		},
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			flexDirection: "column",
			width: "95%",
			marginLeft: 30,
			marginRight: 30,
			marginTop: 35,
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "10%",
			marginLeft: 10,
		},
		[theme.breakpoints.down(465)]: {
			marginTop: 90,
		},
		[theme.breakpoints.down(378)]: {
			marginTop: 135,
			marginLeft: 10,
			marginRight: 10,
		},
	},
	statsDiv: {
		marginTop: -10,
		flexGrow: 1,
		marginLeft: 10,
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			marginLeft: -10,
		},
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			marginLeft: 0,
			marginRight: 0,
		},
	},
	customizedTable: {
		marginLeft: "15vw",
		marginRight: 180,
		marginTop: 30,
		paddingBottom: 50,
		width: "70vw",
		[theme.breakpoints.up("xl")]: {
			maxWidth: 1420,
			margin: "0 auto",
		},
		[theme.breakpoints.down("sm")]: {
			maxWidth: 600,
			marginTop: 30,
			marginLeft: 100,
			marginRight: 100,
			margin: "0 auto",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: 30,
			marginLeft: 10,
			marginRight: 10,
			paddingBottom: 20,
			margin: "0 auto",
		},
	},
	divider: {
		borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
		width: "85%",
		margin: "0 auto",
		paddingTop: 120,
		background: "#070E23",
		[theme.breakpoints.down("xs")]: {
			paddingTop: 0,
		},
	},
	sponsorSectionContainer: {
		background: "#070E23",
	},
	sponsorSection: {
		width: "85vw",
		margin: "0 auto",
		[theme.breakpoints.down("xs")]: {
			width: "95vw",
			marginLeft: 0,
		},
	},
}));
