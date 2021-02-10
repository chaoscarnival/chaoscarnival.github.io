import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	rootContainer: {
		width: "70%",
		marginLeft: "15%",
		paddingTop: "5rem",
		[theme.breakpoints.up("xl")]: {
			marginLeft: "28.5%",
		},
		[theme.breakpoints.up(4800)]: {
			marginLeft: "37.5%",
		},
		[theme.breakpoints.down(2400)]: {
			marginLeft: "18%",
		},
		[theme.breakpoints.down("lg")]: {
			marginLeft: "16.5%",
		},
		[theme.breakpoints.down("md")]: {
			marginLeft: 70,
			width: "90%",
		},
		[theme.breakpoints.down("sm")]: {
			width: "90%",
			marginLeft: "8%",
			margin: "auto",
			paddingTop: "2rem",
		},
		[theme.breakpoints.down("xs")]: {
			width: "97.5%",
			marginLeft: 25,
			marginTop: 20,
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
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.35rem",
		},
	},
	desc: {
		textAlign: "left",
		width: 500,
		fontSize: 20,
		marginTop: 20,
		[theme.breakpoints.down("sm")]: {
			width: "90%",
			fontSize: 16,
		},
	},
	cardSection: {
		display: "flex",
		textAlign: "left",
		marginTop: theme.spacing(3.75),
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
	speakerImage: {
		height: 280,
		width: 500,
		transition: "all .2s ease-in-out",
		"&:hover": {
			transform: "scale(1.075)",
		},
		"&:focus": {
			transform: "scale(1.075)",
		},
		borderRadius: 20,
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			height: "auto",
		},
	},
	descText: {
		width: 500,
		fontSize: 26,
		fontWeight: 500,
		marginTop: 10,
		marginBottom: 20,
		[theme.breakpoints.down("sm")]: {
			width: "100%",
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
		"& #info": {
			marginLeft: theme.spacing(1.5),
		},
		[theme.breakpoints.down("md")]: {
			marginTop: theme.spacing(2),
		},
	},
}));
