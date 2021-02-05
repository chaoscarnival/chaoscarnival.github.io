import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
	},
	cardSection: {
		display: "flex",
		marginTop: theme.spacing(8.75),
	},
	speakerCard: {
		padding: theme.spacing(3.75, 2.5),
		background:
			"linear-gradient(82.94deg, rgba(102, 61, 219, 0.144) 17.14%, rgba(169, 61, 219, 0.194) 79.8%)",
		backdropFilter: "blur(10px)",
		borderRadius: "0.625rem",
		maxWidth: "fit-content",
		maxHeight: "fit-content",
		textAlign: "left",
		marginRight: theme.spacing(3.75),

		"& p": {
			maxWidth: "23.0625rem",
			fontWeight: 500,
			fontSize: "1rem",
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
	},
	speakerDetails: {
		display: "flex",
		"& #info": {
			marginLeft: theme.spacing(1.5),
		},
	},
}));
