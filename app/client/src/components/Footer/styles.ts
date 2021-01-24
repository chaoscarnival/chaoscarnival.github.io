import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	appBar: {
		width: "100vw",
		margin: "auto",
		height: "fit-content",
		background: "#070E23",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	toolbarDiv: {
		width: "100vw",
		margin: "auto",
		marginTop: theme.spacing(1),
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: "2vw",
		paddingRight: "2vw",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	},
	mainLogo: {
		width: 155,
		paddingTop: "1.4rem",
		paddingBottom: "1.4rem",
		marginRight: 60,
		cursor: "pointer",
		[theme.breakpoints.up("xl")]: {
			marginLeft: 0,
			marginRight: 30,
		},
		[theme.breakpoints.down("sm")]: {
			marginLeft: 10,
			marginRight: 30,
			width: 185,
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
	},
	copyRightFont: {
		marginTop: "1rem",
		paddingBottom: "34px",
		fontSize: "0.7rem",
		color: "rgba(255, 255, 255, 0.6)",
		textAlign: "center",
		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(8),
			paddingBottom: theme.spacing(3),
			marginLeft: "15vw",
			marginRight: "15vw",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: theme.spacing(8),
			paddingBottom: theme.spacing(3),
			marginLeft: "15vw",
			marginRight: "15vw",
		},
	},
	timeFont: {
		color: theme.palette.common.white,
		marginLeft: theme.spacing(3),
		marginTop: theme.spacing(0.5),
		fontSize: "1.5rem",
		fontWeight: 500,
		[theme.breakpoints.down("sm")]: {
			marginLeft: theme.spacing(-3),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.85rem",
			marginLeft: theme.spacing(-3),
		},
	},
}));

export default useStyles;
