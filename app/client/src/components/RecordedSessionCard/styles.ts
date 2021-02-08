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
			width: "70%",
			margin: "auto",
		},
		[theme.breakpoints.down(300)]: {
			marginTop: 600,
		},
	},
	RecordedSessionCard: {
		width: "fit-content",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background: "linear-gradient(to right, #B4F59E 0%, #71BCF6 55%)",
		textAlign: "left",
		fontSize: "2.75rem",
		fontWeight: 700,
		marginTop: 20,
	},
	desc: {
		textAlign: "left",
		width: 500,
		fontSize: 20,
		marginTop: 20,
		[theme.breakpoints.down("sm")]: {
			width: "85%",
		},
	},
	cardSection: {
		display: "flex",
		flexWrap: "wrap",
		maxWidth: "85rem",
		marginTop: theme.spacing(8.75),
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			marginTop: theme.spacing(3.75),
		},
	},
	speakerCard: {
		padding: theme.spacing(3.75, 2.5),
		background: "inherit",
		backdropFilter: "blur(10px)",
		borderRadius: "0.625rem",
		width: "fit-content",
		textAlign: "left",
		marginRight: theme.spacing(3.75),
		"& p": {
			maxWidth: "23.0625rem",
			fontWeight: 500,
			fontSize: "1rem",
			[theme.breakpoints.down("sm")]: {
				maxWidth: "90%",
				fontWeight: 500,
				fontSize: "1rem",
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
			display: "inline",
		},
	},
	speakerDetails: {
		display: "flex",
	},
}));
