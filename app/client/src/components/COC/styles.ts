import { makeStyles } from "@material-ui/core/styles";

// Component styles
export const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			marginTop: 0,
			marginBottom: 0,
		},
	},
	info: {
		width: "100%",
		"& h4": {
			fontWeight: "bold",
			marginTop: theme.spacing(12),
			marginBottom: theme.spacing(6),
			width: "fit-content",
			WebkitBackgroundClip: "text",
			WebkitTextFillColor: "transparent",
			background:
				"linear-gradient(89.85deg, #BCA1F7 0.13%, #EE759C 98.01%)",
		},
		"& h5": {
			fontWeight: "bold",
			marginTop: theme.spacing(4),
			marginBottom: theme.spacing(2.5),
		},

		[theme.breakpoints.down("md")]: {
			width: "auto",
			"& h4": {
				marginTop: theme.spacing(10),
				marginBottom: theme.spacing(6),
				width: "fit-content",
				WebkitBackgroundClip: "text",
				WebkitTextFillColor: "transparent",
				background:
					"linear-gradient(89.85deg, #BCA1F7 0.13%, #EE759C 98.01%)",
			},
			"& h5": {
				marginTop: theme.spacing(4),
				marginBottom: theme.spacing(2),
			},
			"& p": {
				whiteSpace: "pre-line",
				fontSize: "0.8rem",
			},
		},

		[theme.breakpoints.up("md")]: {
			"& p": {
				width: "100%",
				whiteSpace: "pre-line",
				fontSize: "0.95rem",
			},
		},
	},
	link: {
		fontSize: "1.1rem",
		color: "#488FDF",
		cursor: "pointer",
		textDecoration: "none",
	},
	linkIcon: {
		marginLeft: "0.5rem",
		marginTop: "1rem",
		marginBottom: "-0.25rem",
		[theme.breakpoints.down("md")]: {
			marginTop: theme.spacing(1.5),
		},
	},
	image: {
		marginTop: theme.spacing(4),
		height: "100%",
		width: "100%",
	},
}));
