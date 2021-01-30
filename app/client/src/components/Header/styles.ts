import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	appBar: {
		width: "100vw",
		margin: "auto",
		position: "absolute",
		background: (props) => (props ? "#070E23" : "white"),
	},
	divider: {
		borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
		width: "85%",
		margin: "0 auto",
		paddingTop: theme.spacing(1),
		background: (props) => (props ? "#070E23" : "white"),
	},
	toolbarDiv: {
		margin: "auto",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "70vw",
		background: (props) => (props ? "#070E23" : "white"),
		[theme.breakpoints.down("md")]: {
			position: "sticky",
			width: "100vw",
		},
		[theme.breakpoints.down("sm")]: {
			position: "sticky",
			width: "85vw",
		},
		[theme.breakpoints.down("xs")]: {
			position: "sticky",
			width: "90vw",
			marginLeft: 0,
		},
	},
	flexLinks: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	menu: {
		marginTop: theme.spacing(2),
	},
	mainLogo: {
		width: 165,
		marginLeft: 0,
		padding: "0.5rem",
		cursor: "pointer",
		[theme.breakpoints.down(1050)]: {
			marginLeft: 0,
			marginTop: 12,
		},
		[theme.breakpoints.down("sm")]: {
			marginLeft: "-3vw",
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: "3vw",
			marginTop: 25,
		},
	},
	registerButton: {
		height: "3.5rem",
		width: "18.5rem",
		[theme.breakpoints.down("xl")]: {
			height: "3.5rem",
			width: "18.5rem",
		},
		[theme.breakpoints.down("lg")]: {
			height: "3rem",
			width: "16.5rem",
		},
		[theme.breakpoints.down("md")]: {
			height: "2.5rem",
			width: "14.5rem",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "20vh",
			height: "2rem",
			width: "9.75rem",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "20vh",
			height: "2rem",
			width: "7.5rem",
		},
	},
	registerButtonSmall: {
		height: "2.15rem",
		width: "10rem",
		[theme.breakpoints.up("lg")]: {
			marginTop: (props) =>
				props ? theme.spacing(-7) : theme.spacing(-10),
			marginLeft: theme.spacing(15),
			paddingLeft: theme.spacing(10),
			paddingRight: theme.spacing(10),
		},
		[theme.breakpoints.down("lg")]: {
			marginTop: (props) =>
				props ? theme.spacing(-8) : theme.spacing(-11),
			marginLeft: theme.spacing(20),
			paddingLeft: theme.spacing(10),
			paddingRight: theme.spacing(10),
		},
		[theme.breakpoints.down(1800)]: {
			marginTop: (props) =>
				props ? theme.spacing(-10) : theme.spacing(-12),
			marginLeft: theme.spacing(25),
			paddingLeft: theme.spacing(10),
			paddingRight: theme.spacing(10),
		},
		[theme.breakpoints.down(1050)]: {
			paddingLeft: theme.spacing(6.5),
			paddingRight: theme.spacing(6.5),
			width: "5rem",
			marginLeft: theme.spacing(22.5),
			marginTop: (props) =>
				props ? theme.spacing(-12) : theme.spacing(-14),
		},
	},
	registerText: {
		fontSize: "16px",
		[theme.breakpoints.down("xl")]: {
			fontSize: "16px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "16px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "14px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "12px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "8px",
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
		[theme.breakpoints.down("sm")]: {
			justifyContent: "flex-end",
			width: "100vw",
		},
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
	backdrop: {
		background:
			"linear-gradient(180deg,rgba(255, 136, 0, 0.65),rgba(229, 46, 113, 0.65))",
		backdropFilter: "blur(20px)",
	},
	menuItem: {
		outline: "none",
		padding: "16px",
		color: "#fff",
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
