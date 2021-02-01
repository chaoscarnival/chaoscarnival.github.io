import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		paddingTop: 70,
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
		width: "fit-content",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background: "linear-gradient(to right, #C94CA8 0%, #F39242 50%)",
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
		textAlign: "center",
		width: "100%",
		margin: "0 auto",
		paddingTop: 20,
		[theme.breakpoints.down("xs")]: {
			paddingBottom: 30,
		},
		[theme.breakpoints.down(350)]: {
			paddingTop: 70,
		},
	},
	sponsorImgMainDiv: {
		width: "92.5%",
		display: "flex",
		flexDirection: "column",
		paddingLeft: "3%",
		paddingTop: theme.spacing(4),
		[theme.breakpoints.down("xs")]: {
			width: "100vw",
			paddingTop: 0,
			marginLeft: "10vw",
			paddingLeft: 0,
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
	sponsorImgDiamond: {
		maxWidth: 520,
		maxHeight: 160,
		padding: 20,
		marginTop: 25,
		marginBottom: 25,
		[theme.breakpoints.up("sm")]: {
			minWidth: 300,
			maxWidth: 300,
		},
		[theme.breakpoints.up("md")]: {
			minWidth: 350,
			maxWidth: 350,
		},
		[theme.breakpoints.up("lg")]: {
			minWidth: 380,
			maxWidth: 520,
		},
		[theme.breakpoints.up("xl")]: {
			minWidth: 450,
			maxHeight: 180,
		},
		[theme.breakpoints.down("xs")]: {
			maxWidth: "68vw",
			maxHeight: 165,
			marginRight: 0,
			marginTop: 5,
			marginBottom: 5,
		},
	},
	sponsorImgPlatinum: {
		maxWidth: 350,
		maxHeight: 135,
		padding: 20,
		marginTop: 25,
		marginBottom: 25,
		[theme.breakpoints.up("sm")]: {
			minWidth: 200,
			maxWidth: 200,
		},
		[theme.breakpoints.up("md")]: {
			minWidth: 250,
			maxWidth: 250,
		},
		[theme.breakpoints.up("lg")]: {
			minWidth: 280,
			maxWidth: 350,
		},
		[theme.breakpoints.up("xl")]: {
			minWidth: 340,
			maxHeight: 155,
		},
		[theme.breakpoints.down("xs")]: {
			maxWidth: "50vw",
			maxHeight: 150,
			marginRight: 0,
			marginTop: 5,
			marginBottom: 5,
		},
	},
	sponsorImgGold: {
		maxWidth: 270,
		maxHeight: 110,
		padding: 20,
		marginTop: 25,
		marginBottom: 25,
		[theme.breakpoints.up("sm")]: {
			minWidth: 120,
			maxWidth: 120,
		},
		[theme.breakpoints.up("md")]: {
			minWidth: 180,
			maxWidth: 180,
		},
		[theme.breakpoints.up("lg")]: {
			minWidth: 200,
			maxWidth: 270,
		},
		[theme.breakpoints.up("xl")]: {
			minWidth: 250,
			maxHeight: 125,
		},
		[theme.breakpoints.down("xs")]: {
			maxWidth: "40vw",
			maxHeight: 85,
			marginRight: 0,
			marginTop: 5,
			marginBottom: 5,
		},
	},
	footerText: {
		color: "#8193B2",
		paddingTop: theme.spacing(5),
		fontSize: "1.4rem",
		paddingLeft: "4%",
		textAlign: "center",
		margin: "0 auto",
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.25rem",
			marginLeft: 0,
			paddingLeft: 0,
		},
		[theme.breakpoints.down(400)]: {
			fontSize: "1.2rem",
			marginLeft: "-3vw",
		},
		[theme.breakpoints.down(340)]: {
			fontSize: "1rem",
			marginLeft: "-2vw",
		},
		[theme.breakpoints.down(300)]: {
			fontSize: "0.9rem",
		},
	},
	link: {
		color: "#488FDF",
	},
	sponsorTierHeading: {
		width: "100%",
		margin: "0 auto",
		paddingTop: 20,
		fontSize: "2.25rem",
		LetterSpacing: "0.2px",
		paddingLeft: "4%",
		textAlign: "center",
		fontStyle: "medium",
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.4rem",
			paddingLeft: 0,
			marginLeft: "29.5vw",
		},
	},
	diamond: {
		width: "fit-content",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background:
			"linear-gradient(90deg, #CFB0F5 -27.59%, rgba(207, 176, 245, 0.49) 7.17%, #A37CF8 47.32%, rgba(207, 176, 245, 0.5) 120.69%)",
	},
	platinum: {
		width: "fit-content",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background:
			"linear-gradient(90deg, rgba(105, 201, 183, 0.5464) 0%, #7DB7AF 50.52%, rgba(105, 201, 183, 0.5368) 100%)",
	},
	gold: {
		width: "fit-content",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background:
			"linear-gradient(90deg, rgba(201, 146, 47, 0.5464) 0%, #EBAD34 50.52%, rgba(201, 146, 47, 0.5368) 100%)",
		[theme.breakpoints.down("xs")]: {
			paddingLeft: "3.5vw",
		},
	},
}));
