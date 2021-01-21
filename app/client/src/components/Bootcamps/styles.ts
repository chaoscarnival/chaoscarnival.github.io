import { makeStyles } from "@material-ui/core/styles";

// Component styles
export const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: "fit-content",
		height: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		background: "#070E23",
	},
	heading: {
		display: "flex",
		position: "relative",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
		},
	},
	bootcamps: {
		width: "80vw",
		minHeight: "fit-content",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: theme.spacing(10),
		[theme.breakpoints.down("xs")]: {
			paddingTop: 0,
			height: "100vh",
			marginTop: "3vh",
			flexDirection: "column-reverse",
		},
	},
	text: {
		width: "50%",
		[theme.breakpoints.down("xs")]: {
			width: "100%",
		},
	},

	image: {
		width: "50%",
		[theme.breakpoints.down("xs")]: {
			width: "100%",
		},
	},

	bootcampImg: {
		margin: "0 auto",
		width: "500px",
		[theme.breakpoints.up("xl")]: {
			width: "500px",
		},
		[theme.breakpoints.down("lg")]: {
			width: "500px",
		},
		[theme.breakpoints.down("md")]: {
			width: "400px",
		},
		[theme.breakpoints.down("sm")]: {
			width: "300px",
		},
		[theme.breakpoints.down("xs")]: {
			width: "100%",
		},
	},

	chaosEngineeringText: {
		fontWeight: 700,
		textAlign: "left",
		fontSize: 55,
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "45px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "40px",
			marginLeft: "-3vw",
		},
	},
	bootcampsText: {
		fontWeight: 700,
		fontSize: 55,
		textAlign: "left",
		background: "linear-gradient(89.85deg, #BCA1F7 0.13%, #EE759C 98.01%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "50px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "40px",
			marginLeft: "-3vw",
		},
	},
	info: {
		marginTop: "5vh",
		width: "50vw",
		marginRight: "8vw",
		[theme.breakpoints.down("xs")]: {
			marginLeft: "-3vw",
			marginRight: 0,
			width: "100vw",
		},
	},
	infoText: {
		fontSize: "1.6rem",
		textAlign: "left",
		fontWeight: "bold",
		[theme.breakpoints.down("md")]: {
			fontSize: "1.4rem",
			marginRight: theme.spacing(15),
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.2rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1rem",
			marginRight: theme.spacing(10),
		},
	},
	detailedInfoText: {
		fontSize: "1.2rem",
		textAlign: "left",
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(5),
		marginRight: "30%",
		[theme.breakpoints.down("lg")]: {
			marginRight: "30%",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "1rem",
			marginRight: "25%",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.05rem",
			marginRight: "15%",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.75rem",
		},
	},
}));
