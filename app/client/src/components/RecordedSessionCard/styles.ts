import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	rootContainer: {
		position: "inherit",
		margin: "auto",
		width: "fit-content",
		[theme.breakpoints.down("md")]: {
			marginLeft: 40,
		},
		[theme.breakpoints.down("sm")]: {
			width: "85%",
			margin: "auto",
		},
		[theme.breakpoints.down("xs")]: {
			width: "90%",
		},
		[theme.breakpoints.down(300)]: {
			marginTop: 600,
		},
	},
	RecordedSessionCard: {
		width: "fit-content",
		textAlign: "left",
		fontSize: "2.75rem",
		fontWeight: 700,
		marginTop: 20,
		paddingLeft: "2rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "2rem",
			paddingLeft: 0,
		},
	},
	headDay1: {
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background:
			"linear-gradient(89.08deg, #9867F0 6.51%, #EA5DAD 35.68%, #FF7571 70.79%, #FFE580 98.47%)",
	},
	headDay2: {
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background:
			"linear-gradient(270.88deg, #71BCF6 3.66%, #B4F59E 100.95%)",
	},
	desc: {
		textAlign: "left",
		width: 800,
		fontSize: 20,
		marginTop: 20,
		paddingLeft: "2rem",
		[theme.breakpoints.down("sm")]: {
			width: "85%",
			fontSize: 16,
			paddingLeft: 0,
		},
	},
	cardSection: {
		display: "flex",
		flexWrap: "wrap",
		maxWidth: "100rem",
		marginTop: theme.spacing(8.75),
		alignItems: "flex-start",
		justifyContent: "center",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			maxWidth: "100%",
			marginTop: theme.spacing(3.75),
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: "-12vw",
		},
	},
	companyLogo: {
		marginTop: "0.5rem",
		maxHeight: "2rem",
		maxWidth: "10rem",
		objectFit: "contain",
	},
	iframeDiv: {
		border: "none",
		borderRadius: "0.75rem",
		width: "23rem",
		height: `calc(23rem / (16 / 9))`,
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			borderRadius: "0.75rem",
			maxWidth: "20rem",
		},
	},
	speakerCard: {
		padding: theme.spacing(3.75, 2.5),
		background: "inherit",
		backdropFilter: "blur(10px)",
		width: "fit-content",
		textAlign: "left",
		marginRight: theme.spacing(3.75),
		"& p": {
			maxWidth: "15rem",
			fontWeight: 500,
			fontSize: "1rem",
			[theme.breakpoints.down("sm")]: {
				maxWidth: "100%",
				fontWeight: 500,
				fontSize: "0.85rem",
			},
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(3.75),
		},
	},
	sessionName: {
		width: "23rem",
		marginTop: theme.spacing(1),
		[theme.breakpoints.down("md")]: {
			width: "20rem",
		},
	},
	speakerSection: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		marginTop: theme.spacing(2.5),

		[theme.breakpoints.down("md")]: {
			"& #Logo": {
				marginTop: theme.spacing(2),
			},
		},
	},
	speakerDetails: {
		display: "flex",
		maxWidth: "100%",
	},
}));
