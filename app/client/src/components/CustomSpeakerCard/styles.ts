import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	card: {
		background: "#070E23",
		transition: "all .2s ease-in-out",
		"&:hover": {
			transform: "scale(1.1)",
		},
		"&:focus": {
			transform: "scale(1.1)",
		},
	},
	// CARD MEDIA
	cardMedia: {
		width: "220px",
		height: "280px",
		background: "#070E23",
		[theme.breakpoints.down("sm")]: {
			width: "180px",
			height: "240px",
			borderRadius: "5px",
		},
		[theme.breakpoints.down("xs")]: {
			width: "38vw",
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
		borderRadius: "25px",
		[theme.breakpoints.down("sm")]: {
			borderRadius: "7.5px",
		},
		[theme.breakpoints.down("xs")]: {
			borderRadius: "7.5px",
		},
	},

	//Default properties

	mainCard: {
		width: "220px",
		height: "380px",
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
			height: "310px",
		},
		[theme.breakpoints.down("xs")]: {
			width: "38vw",
			height: "265px",
			marginTop: 0,
			marginBottom: 0,
		},
	},
	mainTitle: {
		fontSize: 18,
		margin: "8px 0",
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.down("sm")]: {
			margin: 0,
		},
		[theme.breakpoints.down(550)]: {
			marginLeft: theme.spacing(2.5),
		},
		[theme.breakpoints.down(500)]: {
			margin: 0,
		},
	},

	speakerName: {
		width: "fit-content",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background:
			"linear-gradient(89.08deg, #3BF0E4 4.54%, #9867F0 25.3%, #C2A0FD 41.12%, #EA5DAD 57.44%, #FF7571 75.24%, #FFE580 99.46%)",
		fontWeight: 700,
		textAlign: "left",
		marginTop: theme.spacing(1),
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		overflow: "hidden",
		textDecoration: "none",
		fontSize: "1.15rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "0.9rem",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(1),
			fontSize: "0.85rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.8rem",
		},
	},

	speaker2Name: {
		width: "fit-content",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		color: "transparent",
		backgroundClip: "text",
		background: "linear-gradient(89.85deg, #BCA1F7 0.13%, #EE759C 98.01%)",
		fontWeight: 700,
		textAlign: "left",
		marginTop: theme.spacing(1),
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		overflow: "hidden",
		textDecoration: "none",
		fontSize: "1.15rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "0.9rem",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(1),
			fontSize: "0.85rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.8rem",
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
			fontSize: "0.8rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.75rem",
		},
	},
}));
