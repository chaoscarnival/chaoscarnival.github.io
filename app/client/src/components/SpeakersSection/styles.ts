import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: "100%",
		paddingBottom: "6.5rem",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start",
		background: "#070E23",
		[theme.breakpoints.down("xs")]: {
			paddingTop: 0,
			paddingBottom: 0,
		},
	},
	speakerRoot: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		marginTop: "7vh",
		width: "80%",
		[theme.breakpoints.down("xl")]: {
			maxWidth: "1200px",
			width: "90%",
		},
		[theme.breakpoints.down("lg")]: {
			width: "75%",
		},
		[theme.breakpoints.down("md")]: {
			width: "95%",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: 0,
			width: "100%",
		},
	},
	keyNoteSection: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		width: "80%",
		marginLeft: "7.5vw",
		margin: "0 auto",
		paddingBottom: theme.spacing(2),
		[theme.breakpoints.up("xl")]: {
			marginLeft: "20vw",
		},
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column-reverse",
			width: "95%",
			marginLeft: "5vw",
		},
	},

	infoText: {
		fontSize: "1rem",
		textAlign: "left",
		color: "#8193B2",
		marginTop: theme.spacing(-2),
		marginBottom: theme.spacing(5),
		marginRight: "50%",
		[theme.breakpoints.down("lg")]: {
			marginRight: "50%",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "0.8rem",
			marginRight: "40%",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.8rem",
			marginRight: "30%",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.75rem",
		},
	},

	ourKeyNoteText: {
		fontWeight: 700,
		textAlign: "left",
		fontSize: 55,
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "45px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "40px",
			marginLeft: "-3vw",
		},
	},
	speakerHeadText: {
		fontWeight: 700,
		fontSize: 55,
		textAlign: "left",
		background: "linear-gradient(to right, #B4F59E 0%, #71BCF6 55%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "50px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "40px",
			marginLeft: "-3vw",
		},
	},
	info: {
		marginTop: "5vh",
		width: "50vw",
		marginRight: "8vw",
		[theme.breakpoints.down("xs")]: {
			marginLeft: "-3vw",
			marginRight: 0,
			width: "100vw",
		},
	},

	keyNoteTextSection: {
		width: "39%",
		marginTop: "11rem",
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			marginLeft: "5vw",
		},
	},
	keyNoteSpeakerRoot: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "left",
		marginTop: "7vh",
		width: "61%",
		[theme.breakpoints.down("xl")]: {
			maxWidth: "1200px",
		},
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: 0,
			width: "100%",
			flexDirection: "row",
		},
	},
	headingspeaker: {
		display: "flex",
		flexDirection: "row",
		position: "relative",
		width: "70%",
		padding: "0 3vw",
		paddingTop: "5rem",
		alignSelf: "center",
		justifyContent: "space-between",
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		[theme.breakpoints.down("md")]: {
			width: "80%",
		},
		[theme.breakpoints.down("sm")]: {
			paddingTop: 0,
		},
		[theme.breakpoints.down("xs")]: {
			paddingTop: "4rem",
			flexDirection: "column",
			marginTop: "-11rem",
		},
	},
	speakersInfoText: {
		color: "#8193B2",
		fontSize: "1rem",
		textAlign: "left",
		width: "40%",
		marginTop: "2rem",
		[theme.breakpoints.down("xl")]: {
			fontSize: "1rem",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "1rem",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "0.8rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.8rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.75rem",
			width: "85vw",
			marginLeft: "-5vw",
		},
	},
	ourExcitingText: {
		fontWeight: 700,
		textAlign: "left",
		fontSize: "55px",
		color: "#FFFFFF",
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "50px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "37.5px",
			marginLeft: "-5vw",
		},
	},
	speakersText: {
		fontWeight: 700,
		background: "linear-gradient(89deg, #901BF3 0%, #FF0052 99.41%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		borderRadius: "1rem",
		fontSize: "55px",
		textAlign: "left",
		color: "#000000",
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "50px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "37.5px",
			marginLeft: "-5vw",
		},
	},
	agendaSection: {
		paddingTop: "5rem",
		margin: "0 auto",
		[theme.breakpoints.down("xs")]: {
			marginLeft: "8vw",
		},
	},
	detailText: {
		fontSize: "1.8rem",
		fontWeight: 500,
		textAlign: "left",
		[theme.breakpoints.down("md")]: {
			fontSize: "1.5rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.4rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.4rem",
		},
	},
	agendaText: {
		fontSize: "1.8rem",
		fontWeight: 700,
		textAlign: "left",
		background: "linear-gradient(89.85deg, #BCA1F7 0.13%, #EE759C 98.01%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1),
		[theme.breakpoints.down("md")]: {
			fontSize: "1.5rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.4rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.4rem",
		},
	},
}));
