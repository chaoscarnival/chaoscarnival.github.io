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
			width: "100%",
			margin: "auto",
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
			marginLeft: "8vw",
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
			width: "90%",
			fontSize: 16,
			marginLeft: "8vw",
			paddingLeft: 0,
		},
	},
	cardSection: {
		display: "flex",
		flexWrap: "wrap",
		maxWidth: "100rem",
		marginTop: theme.spacing(8.75),
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			marginTop: theme.spacing(3.75),
			alignItems: "center",
		},
	},
	companyLogo: {
		[theme.breakpoints.down("sm")]: {
			height: "35%",
			width: "35%",
			marginTop: theme.spacing(-5),
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
	speakerSection: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		marginTop: theme.spacing(4.5),

		[theme.breakpoints.down("md")]: {
			"& #Logo": {
				marginTop: theme.spacing(2),
			},
		},
		[theme.breakpoints.down("xs")]: {
			// display: "inline",
		},
	},
	speakerDetails: {
		display: "flex",
		maxWidth: "100%",
	},
}));
