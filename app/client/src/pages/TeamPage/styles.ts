import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	rootContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	root: {
		textAlign: "center",
	},
	wrapContainer: {
		alignItems: "flex-start",
		justifyContent: "flex-start",
		width: "70vw",
		display: "flex",
		flexFlow: "column wrap",
		[theme.breakpoints.down("md")]: {
			width: "90vw",
		},
	},
	mainDiv: {
		marginTop: theme.spacing(-10),
		background: "#fff",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.down("xs")]: {
			marginTop: 0,
		},
	},
	headerDiv: {
		display: "flex",
		flexDirection: "column",
	},
	mainHeader: {
		fontSize: "90px",
		color: "#000",
		textAlign: "left",
		fontWeight: "bold",
		padding: 20,
		[theme.breakpoints.down("xl")]: {
			fontSize: "80px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "60px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
			marginTop: "10rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "40px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "30px",
		},
	},
	mainContent: {
		color: "#8193B2",
		textAlign: "left",
		marginTop: "-3.5rem",
		width: "60%",
		marginLeft: "24px",
		fontSize: "18px",
		[theme.breakpoints.down("md")]: {
			fontSize: "16px",
		},
	},
	greatTeam: {
		width: "fit-content",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background:
			"linear-gradient(270.88deg, #2C84F9 70.04%, #C94CA8 100.95%)",
	},
	teamContainer: {
		alignItems: "center",
		justifyContent: "center",
		width: "70vw",
		display: "flex",
		flexFlow: "row wrap",
		margin: "2rem",
		minWidth: "1005px",
		[theme.breakpoints.down("md")]: {
			minWidth: "105px",
			width: "90vw",
			alignItems: "flex-start",
		},
	},
	cardTeam: {
		width: "49%",
		height: "fit-content",
		borderRadius: 3,
		overflow: "hidden",
		fontSize: 16,
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		textAlign: "center",
		flexDirection: "row",
		margin: "10px",
		minWidth: "340px",
		// Above tablet size
		[theme.breakpoints.down("md")]: {
			minWidth: "140px",
			flexFlow: "row wrap",
			justifyContent: "center",
			width: "45%",
		},
		[theme.breakpoints.down("xs")]: {
			minWidth: "0px",
		},
	},
	teamImg: {
		background:
			"linear-gradient(180deg,rgba(255, 136, 0, 0.65),rgba(229, 46, 113, 0.65))",
		margin: "1.2rem 2.6rem 1.2rem 1.2rem",
		borderRadius: "10px",
		width: "300px",
		[theme.breakpoints.up("xl")]: {
			width: "300px !important",
		},
		[theme.breakpoints.down("xl")]: {
			width: "200px",
		},
		[theme.breakpoints.down("md")]: {
			borderRadius: "5px",
		},
		[theme.breakpoints.down("sm")]: {
			width: "90%",
		},
	},
	footerText: {
		color: "#8193B2",
		marginTop: 20,
		fontSize: "1.2rem",
		textAlign: "left",
		[theme.breakpoints.down("xs")]: {
			marginLeft: 30,
		},
	},
	teamDetails: {
		width: "40%",
		minWidth: "226px",
		[theme.breakpoints.down("xs")]: {
			minWidth: "126px",
			width: "90%",
		},
	},
	teamName: {
		color: "#488FDF",
		fontSize: "28px",
		[theme.breakpoints.down("xs")]: {
			fontSize: "18px",
		},
		textAlign: "left",
		fontWeight: 600,
		wordBreak: "break-word",
	},
	teaminfo: {
		color: "#000",
		fontSize: "0.9rem",
		fontWeight: 300,
		width: "100%",
		lineHeight: "1.7rem",
		textAlign: "left",
	},
	teamLinks: {
		alignItems: "flex-start",
		justifyContent: "flex-start",
		width: "100%",
		display: "flex",
		flexFlow: "row wrap",
	},
	teamLink: {
		color: "black",
		fontSize: "16px",
		textAlign: "left",
		margin: "11px 21px 11px 0px",
	},
	teamlinkIcon: {
		borderRadius: "8px",
		padding: "10px",
	},
}));
