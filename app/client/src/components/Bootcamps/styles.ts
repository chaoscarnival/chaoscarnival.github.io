import { makeStyles } from "@material-ui/core/styles";

// Component styles
export const useStyles = makeStyles((theme) => ({
	// Card design
	bootcampCard: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		marginTop: theme.spacing(6.25),
		padding: theme.spacing(13, 13.75),
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(2),
		},
		background: "rgba(255, 255, 255, 0.05)",
		backdropFilter: "blur(10px)",

		// Border
		border: "2.03px solid transparent",
		borderImageSource:
			"linear-gradient(89.08deg, #9867F0 7.01%, #EA5DAD 35.68%, #FF7571 71.78%, #FFE580 99.46%)",
		borderImageSlice: 10,
		borderRadius: 10,
	},
	info: {
		width: "70%",
		"& h4": {
			fontWeight: "bold",
			marginBottom: theme.spacing(4),
		},

		[theme.breakpoints.down("md")]: {
			width: "auto",
			"& h4": {
				marginBottom: theme.spacing(3),
			},
			"& p": {
				marginBottom: theme.spacing(4),
				whiteSpace: "pre-line",
			},
		},

		[theme.breakpoints.up("md")]: {
			"& p": {
				width: "75%",
				whiteSpace: "pre-line",
			},
		},
	},
	action: {
		"& #Booth": {
			background: "#FE1C65",
			color: "#fff",
			fontWeight: "bold",
			marginBottom: theme.spacing(3),
			padding: theme.spacing(2.25, 4),

			"& svg": {
				marginLeft: theme.spacing(1),
			},
		},
		"& #Slack": {
			color: "#fff",
			marginTop: theme.spacing(4),
			padding: theme.spacing(1.5, 4),
			textTransform: "none",
			border: `1px solid #FE1C65`,
		},
		"& img": {
			width: "1.4375rem",
			marginRight: theme.spacing(1),
		},
	},
}));
