import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	card: {
		background: theme.palette.common.white,
	},
	
	// CARD CONTENT
	cardContent: {
		color: theme.palette.text.primary,
	},

	imgMedia: {
		width: "450px",
		height: '120px',
		borderRadius: '10px',
		[theme.breakpoints.down("md")]: {
			width: "250px",
		  height: '70px',
		},
		[theme.breakpoints.down("sm")]: {
			width: "250px",
		  height: '70px',
		},
		[theme.breakpoints.down("xs")]: {
		  width: "200px",
		  height: '60px',
		},
	},

	//Default properties

	mainCard: {
		width: "500px",
		height: "200px",
		borderRadius: 3,
		overflow: "hidden",
		fontSize: 16,
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.down("md")]: {
			width: "300px",
		  height: "150px",
		},
		[theme.breakpoints.down("sm")]: {
			width: "300px",
		  height: "150px",
		},
		[theme.breakpoints.down("xs")]: {
		  width: "250px",
			height: "100px",
			marginLeft: theme.spacing(10),
		},
	},
}));
