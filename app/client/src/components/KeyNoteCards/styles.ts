import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	card: {
		background: "#070E23",
	},

	// CARD CONTENT
	cardContent: {
		color: theme.palette.text.primary,
		background: "#070E23",
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		textAlign: "center",
		cursor: "pointer",
	},

	topMargin: {
		paddingTop: theme.spacing(10),
		[theme.breakpoints.down("sm")]: {
			paddingTop: 0,
		},
		[theme.breakpoints.down("xs")]: {
			paddingTop: 0,
		},
	},

	imgMedia: {
		width: "100%",
		height: "100%",
		objectFit: "scale-down",
		borderRadius: "10px",
	},

	imgIcon: {
		width: "100px",
		height: "60px",
		marginTop: theme.spacing(-1),
		objectFit: "fill",
		[theme.breakpoints.down("md")]: {
			width: "80px",
			height: "50px",
		},
		[theme.breakpoints.down("xs")]: {
			paddingTop: theme.spacing(1),
			width: "70px",
			height: "40px",
		},
	},

	//Default properties

	mainCard: {
		width: "200px",
		height: "460px",
		borderRadius: 3,
		overflow: "hidden",
		background: "#070E23",
		fontSize: 16,
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(2),
		[theme.breakpoints.down("md")]: {
			width: "200px",
			height: "460px",
		},
		[theme.breakpoints.down("sm")]: {
			width: "200px",
			height: "460px",
			marginBottom: theme.spacing(-5),
		},
		[theme.breakpoints.down("xs")]: {
			width: "40vw",
			height: "410px",
			marginLeft: 0,
			marginBottom: theme.spacing(2),
		},
	},
	mainTitle: {
		fontSize: 22,
		display: "flex",
		flexDirection: "column",
		marginTop: theme.spacing(4),
		color: theme.palette.common.black,
		[theme.breakpoints.down("md")]: {
			fontSize: 20,
			marginTop: theme.spacing(3),
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: 20,
			marginTop: theme.spacing(3),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: 14,
			marginTop: theme.spacing(3),
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
		fontSize: "1.2rem",
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
		color: "#FFFFFF",
		textAlign: "left",
		marginTop: theme.spacing(-1),
		textDecoration: "none",
		fontSize: "0.9rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "0.75rem",
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
