import { makeStyles } from "@material-ui/core/styles";

// Component styles
export const useStyles = makeStyles((theme) => ({
	// Card design
	sponsorBoothCard: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		marginTop: theme.spacing(6.25),
		padding: theme.spacing(13, 13.75),
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(2),
		},
		background:
			"linear-gradient(82.94deg, rgba(102, 61, 219, 0.144) 17.14%, rgba(169, 61, 219, 0.194) 79.8%)",
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
		"& img": {
			marginBottom: theme.spacing(4),
		},

		"& p": {
			marginBottom: theme.spacing(4),
		},

		"& a, svg": {
			color: "#488FDF",
		},

		[theme.breakpoints.down("md")]: {
			"& img": {
				marginBottom: theme.spacing(3),
				width: "13.4375rem",
			},
		},

		[theme.breakpoints.up("md")]: {
			"& p": {
				width: "75%",
			},
		},

		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	action: {
		"& #Booth": {
			background: "#FE1C65",
			color: "#fff",
			fontWeight: "bold",
			marginBottom: theme.spacing(3),
			padding: theme.spacing(2.25, 4),
		},
		"& p:nth-child(3)": {
			marginBottom: theme.spacing(3),
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

		[theme.breakpoints.down("md")]: {
			"& #Booth": {
				marginTop: theme.spacing(3),
			},
		},
	},
}));
