import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	card: {
		background: "#070E23",
	},
	// CARD MEDIA
	cardMedia: {
		width: "220px",
		height: "280px",
		borderRadius: "10px",
		background: "#070E23",
		[theme.breakpoints.down("sm")]: {
			width: "180px",
			height: "240px",
			borderRadius: "5px",
		},
		[theme.breakpoints.down("xs")]: {
			width: "40vw",
			height: "200px",
			borderRadius: "5px",
		},
		margin: "0 auto",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},

	// CARD CONTENT
	cardContent: {
		color: theme.palette.text.primary,
		background: "#070E23",
	},

	imgMedia: {
		width: "100%",
		height: "100%",
		background: "#070E23",
		objectFit: "scale-down",
		borderRadius: "10px",
		[theme.breakpoints.down("sm")]: {
			borderRadius: "5px",
		},
		[theme.breakpoints.down("xs")]: {
			borderRadius: "5px",
		},
	},

	//Default properties

	mainCard: {
		width: "220px",
		height: "380px",
		borderRadius: 3,
		overflow: "hidden",
		fontSize: 16,
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		textAlign: "center",
		cursor: "pointer",
		background: "#070E23",
		// Above tablet size
		[theme.breakpoints.down("sm")]: {
			width: "180px",
			height: "300px",
		},
		[theme.breakpoints.down("xs")]: {
			width: "40vw",
			height: "260px",
			marginTop: 0,
			marginBottom: 0,
		},
	},
	mainTitle: {
		fontSize: 18,
		margin: "8px 0",
		display: "flex",
		flexDirection: "column",
		color: theme.palette.common.black,
		[theme.breakpoints.down("sm")]: {
			margin: 0,
		},
	},

	speakerName: {
		background:
			"linear-gradient(89.08deg, #3BF0E4 4.54%, #9867F0 25.3%, #C2A0FD 41.12%, #EA5DAD 57.44%, #FF7571 75.24%, #FFE580 99.46%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		fontWeight: 700,
		textAlign: "left",
		marginTop: theme.spacing(1),
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		overflow: "hidden",
		textDecoration: "none",
		fontSize: "1.2rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "0.9rem",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(1),
			fontSize: "0.85rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.75rem",
		},
	},

	speaker2Name: {
		background: "linear-gradient(89.85deg, #BCA1F7 0.13%, #EE759C 98.01%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		fontWeight: 700,
		textAlign: "left",
		marginTop: theme.spacing(1),
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		overflow: "hidden",
		textDecoration: "none",
		fontSize: "1.2rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "0.9rem",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(1),
			fontSize: "0.85rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.75rem",
		},
	},

	speakerTitle: {
		color: "#FFFFFF",
		textAlign: "left",
		marginTop: theme.spacing(1),
		textDecoration: "none",
		fontSize: "1rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "0.8rem",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(0.5),
			fontSize: "0.7rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.7rem",
		},
	},
}));