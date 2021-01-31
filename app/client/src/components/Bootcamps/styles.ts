import { makeStyles } from "@material-ui/core/styles";

// Component styles
export const useStyles = makeStyles((theme) => ({
	root: {
		width: "85%",
		margin: "0 auto",
		[theme.breakpoints.down("sm")]: {
			width: "90%",
		},
	},
	// Title text
	title: {
		fontWeight: 700,
		width: "fit-content",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		marginBottom: theme.spacing(2),
		background:
			"linear-gradient(270.88deg, #71BCF6 3.66%, #B4F59E 100.95%)",

		[theme.breakpoints.down("md")]: {
			fontSize: 50,
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: 45,
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: 40,
		},
	},
	// Card design
	bootcampCard: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		padding: theme.spacing(6, 8),
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

		[theme.breakpoints.down("sm")]: {
			width: "auto",
			"& h4": {
				marginBottom: theme.spacing(3),
			},
			"& p": {
				marginBottom: theme.spacing(4),
			},
		},
	},
	action: {
		"& button": {
			background: "#FE1C65",
			color: "#fff",
			fontWeight: "bold",
			marginBottom: theme.spacing(3),

			"& svg": {
				marginLeft: theme.spacing(1),
			},
		},
	},
}));
