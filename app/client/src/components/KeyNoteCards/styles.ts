import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	card: {
		background: theme.palette.common.white,
	},

	// CARD CONTENT
	cardContent: {
		color: theme.palette.text.primary,
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		textAlign: "center",
		cursor: "pointer",
	},

	imgMedia: {
		width: "90%",
		height: "100%",
		objectFit: "scale-down",
		marginLeft: theme.spacing(-15),
		marginTop: theme.spacing(5),
		borderRadius: "10px",
		[theme.breakpoints.down("md")]: {
			width: "60%",
			height: "90%",
		},
		[theme.breakpoints.down("sm")]: {
			width: "50%",
			height: "90%",
		},
		[theme.breakpoints.down("xs")]: {
			width: "40%",
			height: "90%",
		},
	},

	imgIcon: {
		width: "50px",
		height: "50px",
		marginTop: theme.spacing(-0.5),
		objectFit: "scale-down",
		[theme.breakpoints.down("md")]: {
			width: "35px",
			height: "35px",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: 0,
			paddingTop: theme.spacing(1),
			width: "25px",
			height: "25px",
		},
	},

	//Default properties

	mainCard: {
		width: "500px",
		height: "300px",
		borderRadius: 3,
		overflow: "hidden",
		fontSize: 16,
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.down("md")]: {
			width: "450px",
			height: "250px",
		},
		[theme.breakpoints.down("sm")]: {
			width: "450px",
			height: "250px",
		},
		[theme.breakpoints.down("xs")]: {
			width: "450px",
			height: "250px",
		},
	},
	mainTitle: {
		fontSize: 18,
		display: "flex",
		flexDirection: "column",
		marginLeft: theme.spacing(-10),
		marginTop: theme.spacing(12.5),
		color: theme.palette.common.black,
		[theme.breakpoints.down("md")]: {
			fontSize: 12,
			marginLeft: theme.spacing(-16.5),
			marginTop: theme.spacing(8.5),
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: 12,
			marginLeft: theme.spacing(-16.5),
			marginTop: theme.spacing(8.5),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: 8,
			marginLeft: theme.spacing(-20),
			marginTop: theme.spacing(8),
		},
	},

	speakerName: {
		color: "#488FDF",
		fontWeight: 700,
		textAlign: "left",
		marginTop: theme.spacing(-2),
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		overflow: "hidden",
		textDecoration: "none",
		[theme.breakpoints.down("md")]: {
			fontSize: "0.9rem",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(-1),
			fontSize: "0.8rem",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: theme.spacing(-1),
			fontSize: "0.75rem",
		},
	},

	speakerTitle: {
		color: "#262626",
		textAlign: "left",
		marginTop: theme.spacing(-1),
		textDecoration: "none",
		fontSize: "1rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "0.8rem",
			marginTop: theme.spacing(-1),
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.75rem",
			marginTop: theme.spacing(-1),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.65rem",
			marginTop: theme.spacing(-1),
			marginBottom: theme.spacing(0.5),
		},
	},
}));
