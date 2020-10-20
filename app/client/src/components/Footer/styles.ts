import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	appBar: {
		width: "100vw",
		margin: "auto",
		height: "10rem",
		background: "linear-gradient(159.14deg, #042C69 0%, #041739 22.21%, #040D21 51.09%, #1B132F 84.08%, #471F48 101.53%)",
		boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			height: "15rem",
		},
		[theme.breakpoints.down("xs")]: {
			height: "15rem",
		},
	},
	toolbarDiv: {
		width: "100vw",
		margin: "auto",
		marginTop: theme.spacing(2.75),
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: '2vw',
		paddingRight: '2vw',
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	},
	mainLogo: {
		width: 165,
		height: 65,
		marginLeft: 30,
		marginRight: 30,
		cursor: "pointer",
		[theme.breakpoints.up("xl")]: {
			marginLeft: 0,
			marginRight: 30,
		},
		[theme.breakpoints.down("sm")]: {
			marginLeft: 10,
			marginRight: 30,
		},
	},
	headerDiv: {
		display: "flex",
		flexDirection: "row",
		marginLeft: "1vw",
		[theme.breakpoints.down("sm")]: {
			marginTop: "1.5vh",
			marginLeft: theme.spacing(-6),
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "1.5vh",
			marginLeft: theme.spacing(-6),
		},
	},
	headerHomeDiv: {
		marginLeft: "47vw",
		[theme.breakpoints.down("xl")]: {
			marginLeft: "37vw",
		},
		[theme.breakpoints.down("lg")]: {
			marginLeft: "27vw",
		},
		[theme.breakpoints.down("md")]: {
			marginLeft: "13vw",
		},
	},
	headerFont: {
		color: theme.palette.common.white,
		marginLeft: theme.spacing(3),
		marginTop: theme.spacing(0.5),
		fontSize: "0.9rem",
		fontWeight: 500,
		[theme.breakpoints.down("md")]: {
			fontSize: "0.8rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.7rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.7rem",
		},
	},
	copyRightFont: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(3),
		fontSize: "0.7rem",
		color: 'rgba(255, 255, 255, 0.6)',
		[theme.breakpoints.down("md")]: {
			fontSize: "0.6rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.5rem",
			marginTop: theme.spacing(8),
			marginBottom: theme.spacing(3),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.5rem",
			marginTop: theme.spacing(8),
			marginBottom: theme.spacing(3),
		},
	},
	timeFont: {
		color: theme.palette.common.white,
		marginLeft: theme.spacing(3),
		marginTop: theme.spacing(0.5),
		fontSize: "1.5rem",
		fontWeight: 500,
		[theme.breakpoints.down("md")]: {
			fontSize: "1.2rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1rem",
			marginLeft: theme.spacing(-3),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1rem",
			marginLeft:  theme.spacing(-3),
		},
	},
}));

export default useStyles;
