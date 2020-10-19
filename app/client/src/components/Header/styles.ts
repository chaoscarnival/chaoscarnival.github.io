import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	appBar: {
		width: "100vw",
		margin: "auto",
		background: "rgba(0,0,0,0.001)",
	},
	toolbarDiv: {
		width: "100vw",
		margin: "auto",
		paddingLeft: "5vw",
	},
	menu: {
		paddingLeft: "40vw",
		[theme.breakpoints.down("md")]: {
			paddingLeft: "30vw",
		},
		[theme.breakpoints.down("sm")]: {
			paddingLeft: "25vw",
		},
		[theme.breakpoints.down("xs")]: {
			paddingLeft: "15vw",
		},
	},
	mainLogo: {
		width: 165,
		height: 65,
		marginLeft: 110,
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
	formControl: {
		marginTop: theme.spacing(3),
		marginBottom: 20,
		marginRight: 10,

		fontWeight: 700,
		"& > *": {
			width: "100%",
		},
	},
	headerDiv: {
		display: "flex",
		flexDirection: "row",
		marginLeft: "1vw",
	},
	headerDivCount: {
		display: "flex",
		flexDirection: "row",
		marginLeft: "1.5vw",
		[theme.breakpoints.down("md")]: {
			marginLeft: "3vw",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "1.5vh",
			marginLeft: "2vw",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "3.5vh",
			marginLeft: "1vw",
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
	whiteColor: {
		color: "white",
		paddingLeft: 20,
	},
	whiteColor1: {
		color: "white",
	},
	starImg: {
		width: 20,
		height: 20,
	},
	select: {
		"& ul": {
			backgroundColor: theme.palette.common.white,
		},
		"& li": {
			color: theme.palette.common.black,
			fontSize: 14,
		},
	},
	versionSelect: {
		width: 95,
		height: 40,
		backgroundColor: "rgba(0, 0, 0, 0.1)",
		borderRadius: 3,
	},
	starsBtn: {
		marginTop: 4,
		textTransform: "none",
		width: 95,
		height: 40,
		backgroundColor: "rgba(0, 0, 0, 0.1)",
		borderRadius: 3,
		"&:hover": {
			background: "rgba(0, 0, 0, 0.1)",
		},
	},
	starsText: {
		color: theme.palette.common.white,
		paddingLeft: 7,
	},
	contributeBtn: {
		margin: "auto",
		color: "#000000",
		fontWeight: 500,
		fontSize: "18px",
		cursor: "pointer",
	},
	headerFont: {
		color: (props) =>
			props ? theme.palette.common.white : theme.palette.common.black,
		marginLeft: theme.spacing(3),
		marginTop: theme.spacing(0.5),
		fontSize: "1rem",
		fontWeight: 500,
	},
	timerBtn: {
		width: "12.5rem",
		height: 46,
		color: theme.palette.common.white,
		marginLeft: 20,
		borderWidth: "0.2rem",
		borderColor: theme.palette.primary.main,
		textTransform: "none",
		fontSize: "1.25rem",
		fontWeight: 700,
	},
	getStarted: {
		backgroundColor: "#5B44BA",
		borderRadius: 4,
		width: 230,
		height: 51,
		color: theme.palette.common.white,
		margin: "auto",
		textTransform: "none",
		"&:hover": {
			backgroundColor: "#5B44BA",
		},
	},
	handleStar: {
		borderRadius: 4,
		width: 230,
		height: 51,
		margin: "auto",
		textTransform: "none",
		color: theme.palette.common.black,
		border: "2px solid #000000",
	},
	backdrop: {
		background:
			"linear-gradient(180deg,rgba(255, 136, 0, 0.65),rgba(229, 46, 113, 0.65))",
		backdropFilter: "blur(20px)",
	},
	menuStarBtn: {
		paddingLeft: 10,
		paddingBottom: 5,
	},
	menuItem: {
		outline: "none",
		"&:hover": {
			outline: "none",
		},
		"&:focus": {
			outline: "none",
		},
	},
	menuItemClose: {
		outline: "none",
		"&:hover": {
			outline: "none",
		},
		"&:focus": {
			outline: "none",
		},
		color: theme.palette.common.white,
		top: 0,
		right: 0,
		position: "fixed",
	},
	closeBtn: {
		color: theme.palette.common.white,
	},
}));

export default useStyles;
