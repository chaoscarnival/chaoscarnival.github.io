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
		height: '100%',
		objectFit: "scale-down",
		marginLeft: theme.spacing(-15),
		marginTop: theme.spacing(5),
		borderRadius: '10px',
		[theme.breakpoints.down("md")]: {
			width: "40%",
		  height: "90%",
		},
		[theme.breakpoints.down("sm")]: {
			width: "40%",
		  height: "90%",
		},
		[theme.breakpoints.down("xs")]: {
			width: "30%",
		  height: "80%",
		},
	},

	imgIcon: {
		width: "40px",
		height: '40px',
		marginTop: theme.spacing(-0.5),
		objectFit: "scale-down",
		[theme.breakpoints.down("md")]: {
			width: "25px",
			height: '25px',
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: 0,
			paddingTop: theme.spacing(0.5),
			width: "20px",
			height: '20px',
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
			width: "400px",
		  height: "150px",
		},
		[theme.breakpoints.down("sm")]: {
			width: "350px",
		  height: "150px",
		},
		[theme.breakpoints.down("xs")]: {
			width: "400px",
		  height: "150px",
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
			marginLeft: theme.spacing(-20),
			marginTop: theme.spacing(8.5),
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: 12,
			marginLeft: theme.spacing(-20),
			marginTop: theme.spacing(8.5),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: 8,
			marginLeft: theme.spacing(-20),
			marginTop: theme.spacing(8),
		},
	},

	speakerName: {
		color: '#488FDF',
		fontWeight: 700,
		textAlign: 'left',
		marginTop: theme.spacing(-2),
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		overflow: "hidden",
		textDecoration:"none",
		[theme.breakpoints.down("md")]: {
			fontSize: '0.7rem',
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: '0.7rem',
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: '0.6rem',
		},
	},

	speakerTitle: {
		color: '#262626',
		textAlign: 'left',
		marginTop: theme.spacing(-1),
		textDecoration: "none",
		fontSize: '1rem',
		[theme.breakpoints.down("md")]: {
			fontSize: '0.7rem',
			marginTop: theme.spacing(-1),
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: '0.7rem',
			marginTop: theme.spacing(-1),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: '0.45rem',
			marginTop: theme.spacing(-1),
			marginBottom: theme.spacing(0.5),
		},
	},
}));
