import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	rootContainer: {
		margin: "auto",
		width: "fit-content",
		[theme.breakpoints.down("md")]: {
			marginLeft: 40,
		},
		[theme.breakpoints.down("sm")]: {
			width: "70%",
			margin: "auto",
		},
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			marginLeft: 25,
			marginTop: 40,
		},
	},
	upNext: {
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
		marginTop: theme.spacing(8.75),
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			marginTop: theme.spacing(3.75),
		},
	},
	speakerCard: {
		padding: theme.spacing(3.75, 2.5),
		background:
			"linear-gradient(82.94deg, rgba(102, 61, 219, 0.144) 17.14%, rgba(169, 61, 219, 0.194) 79.8%)",
		backdropFilter: "blur(10px)",
		borderRadius: "0.625rem",
		width: "28rem",
		textAlign: "left",
		marginRight: theme.spacing(3.75),
		"& p": {
			fontWeight: 500,
			fontSize: "1rem",
			maxWidth: "23.0625rem",
			[theme.breakpoints.down("md")]: {
				width: "90%",
				marginTop: theme.spacing(0.5),
			},
			[theme.breakpoints.down("sm")]: {
				maxWidth: "90%",
				fontWeight: 500,
				fontSize: "1rem",
			},
		},
		[theme.breakpoints.down("md")]: {
			width: "90%",
			marginTop: theme.spacing(3.75),
		},
		[theme.breakpoints.down("sm")]: {
			width: "100%",
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
		"& #info": {
			marginLeft: theme.spacing(1.5),
		},
		[theme.breakpoints.down("md")]: {
			marginTop: theme.spacing(2),
		},
	},
}));
