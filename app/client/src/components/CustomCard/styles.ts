import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	card: {
		background: theme.palette.common.white,
	},
	// CARD MEDIA
	cardMedia: {
		borderRadius: '10px',
		[theme.breakpoints.down("sm")]: {
			borderRadius: '5px',
		},
		[theme.breakpoints.down("xs")]: {
			borderRadius: '5px',
		},
		margin: "0 auto",
		backgroundColor: "#FFFFFF",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},


	// CARD CONTENT
	cardContent: {
		color: theme.palette.text.primary,
	},

	imgMedia: {
		width: "100%",
		height: '100%',
		objectFit: "scale-down",
		borderRadius: '10px',
		[theme.breakpoints.down("sm")]: {
			borderRadius: '5px',
		},
		[theme.breakpoints.down("xs")]: {
			borderRadius: '5px',
		},
	},

	//Default properties

	mainCard: {
		width: "250px",
		height: "360px",
		borderRadius: 3,
		overflow: "hidden",
		fontSize: 16,
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		textAlign: "center",
		cursor: "pointer",
		// Above tablet size
		[theme.breakpoints.down("sm")]: {
			width: "156px",
		  height: "210px",
		},
		[theme.breakpoints.down("xs")]: {
			width: "125px",
		  height: "210px",
		},
	},
	mainTitle: {
		fontSize: 18,
		margin: "12px 0",
		display: "flex",
		flexDirection: "column",
		color: theme.palette.common.black,
		[theme.breakpoints.down("sm")]: {
			margin: 0,
		},
	},

	speakerName: {
color: '#488FDF',
fontWeight: 700,
textAlign: 'left',
marginTop: theme.spacing(2),
[theme.breakpoints.down("md")]: {
	fontSize: '0.9rem',
},
[theme.breakpoints.down("sm")]: {
	fontSize: '0.75rem',
},
[theme.breakpoints.down("xs")]: {
	fontSize: '0.75rem',
},
	},

	speakerTitle: {
color: '#262626',
textAlign: 'left',
marginTop: theme.spacing(1),
[theme.breakpoints.down("md")]: {
	fontSize: '0.9rem',
},
[theme.breakpoints.down("sm")]: {
	fontSize: '0.75rem',
},
[theme.breakpoints.down("xs")]: {
	fontSize: '0.75rem',
},
	},

	dummyName: {
		color: '#8193B2',
		textAlign: 'left',
		marginTop: theme.spacing(2),
		[theme.breakpoints.down("md")]: {
			fontSize: '0.9rem',
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: '0.75rem',
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: '0.75rem',
		},
			},
		
			dummyTitle: {
		color: '#FE1C65',
		textAlign: 'left',
		marginTop: theme.spacing(1),
		[theme.breakpoints.down("md")]: {
			fontSize: '0.9rem',
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: '0.75rem',
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: '0.75rem',
		},
			},
}));
