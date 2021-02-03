import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	rootContainer: {
		height: "100vh",
	},
	root: {
		background: "#070E23",
		paddingTop: theme.spacing(17.5),
	},
	title: {
		fontSize: "3rem",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		background:
			"-webkit-linear-gradient(89.85deg, #BCA1F7 0%, #EE759C 98.01%)",
		marginLeft: "10%",
	},
	note: {
		fontStyle: "italic",
		fontWeight: "normal",
		fontSize: 18,
		lineHeight: "140%",
		letterSpacing: "0.02em",
		color: "#A887CC",
		marginLeft: "10%",
		marginBottom: theme.spacing(2),
	},
	header: {
		background: "linear-gradient(89deg, #5291CA 0%, #B086CC 99.41%)",
	},
	duration: {
		marginLeft: "10%",
		fontSize: 18,
		paddingBottom: "1rem",
	},
	details: {
		width: "80%",
		margin: "0 auto",
	},

	block: {
		display: "flex",
		minHeight: "10rem",
	},
	time: {
		width: "10%",
		height: "5rem",
		fontSize: "1rem",
		paddingTop: "1.5%",
		borderTop: "1px solid rgba(255, 255, 255, 0.4)",

		[theme.breakpoints.down("sm")]: {
			width: "auto",
			marginRight: theme.spacing(1),
		},
	},
	detailsBlock: {
		paddingBottom: "1rem",
	},

	// Break
	breakTimes: {
		width: "10%",
		borderTop: "1px solid rgba(255, 255, 255, 0.4)",
		[theme.breakpoints.down("sm")]: {
			width: "auto",
			marginRight: theme.spacing(1),
		},
	},

	breakTime: {
		height: "5rem",
		fontSize: "1rem",
		paddingTop: "1.5%",

		"& span": {
			fontSize: "0.8rem",
			color: "rgba(255, 255, 255, 0.6)",
		},
	},
	breakEvents: {
		display: "flex",
		width: "90%",
		textAlign: "center",

		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	},

	breakItem: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",

		[theme.breakpoints.down("sm")]: {
			width: "100% !important",
		},
	},
	breakItem1: {
		width: "27.5%",
		background: "#3168DA",
	},
	breakItem2: {
		width: "45%",
		textAlign: "left",
		alignItems: "center",
		background: "rgba(49, 104, 218, 0.8)",
	},
	breakItem3: {
		width: "27.5%",
		background: "rgba(82, 145, 202, 0.4)",
	},

	events: {
		display: "flex",
		width: "90%",

		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	},
	// For Keynote Speaker
	keynoteLeftDetail: {
		cursor: "pointer",
		display: "flex",
		width: "40%",
	},

	// For regular Speaker
	speaker1details: {
		width: "50%",
		padding: "0 1rem",
		display: "flex",
		border: "1px solid rgba(255, 255, 255, 0.4)",
		flexDirection: "column",
		justifyContent: "space-between",

		"&:hover": {
			cursor: "pointer",
			background:
				"linear-gradient(268.48deg, #2979E4 2.61%, #134B95 100%)",
		},

		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},

	speaker2details: {
		width: "50%",
		padding: "0 1rem",
		display: "flex",
		border: "1px solid rgba(255, 255, 255, 0.4)",
		flexDirection: "column",
		justifyContent: "space-between",

		"&:hover": {
			cursor: "pointer",
			background:
				"linear-gradient(268.48deg, #2979E4 2.61%, #134B95 100%)",
		},

		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},

	// Speaker Block
	speaker: {
		display: "flex",
		flexWrap: "wrap",
		paddingBottom: "1rem",
		justifyContent: "space-between",
		marginTop: "auto",
		"& #image": {
			width: "3rem",
			height: "3rem",
		},
		"& #subtitle": {
			marginLeft: "1rem",
			fontSize: "0.8rem",
			color: "rgba(255, 255, 255, 0.8)",
			[theme.breakpoints.down("sm")]: {
				marginLeft: "0",
			},
		},
	},

	speakerValue: {
		borderRadius: "50%",
		display: "inline-block",
		width: 30,
		height: 30,
		backgroundColor: "rgba(255, 255, 255, 0.4)",
		color: "white",
		margin: "auto",
		marginLeft: 10,
	},
	//Tags styles
	tagsField: {
		marginTop: 5,
		marginBottom: 30,
		display: "flex",
		flexWrap: "wrap",
	},

	//Modal Styles
	modal: {
		position: "absolute",
		padding: 50,
		backgroundColor: "#161A1D",
		border: "1px solid rgba(255, 255, 255, 0.2)",
		top: "50%",
		left: "50%",
		transform: `translate(-50%, -50%)`,
		outline: 0,
		height: "90%",
		overflowY: "scroll",
		width: 900,
		[theme.breakpoints.down("md")]: {
			width: "70%",
		},
		[theme.breakpoints.down("xs")]: {
			top: "0%",
			left: "0%",
			padding: 10,
			transform: `translate(0%, 0%)`,
			height: "100%",
			width: "100%",
			overflowY: "scroll",
		},
		"&::-webkit-scrollbar": {
			width: "0.5em",
			scrollbarColor:
				"linear-gradient(180deg, #ff8a00, #e52e71) transparent",
			backgroundColor: "transparent",
		},
		"&::-webkit-scrollbar-track": {
			width: "0.5em",
			webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
			backgroundColor: "transparent",
			background:
				"linear-gradient(90deg, #201c29, #201c29 1px, #100e17 0, #100e17)",
		},
		"&::-webkit-scrollbar-thumb": {
			outline: "1px solid slategrey",
			borderRadius: "5px",
			webkitBoxShadow: "inset 0 0 4px rgba(0, 0, 0, 0.1)",
			boxShadow:
				"inset 2px 2px 2px hsla(0, 0%, 100%, 0.25), inset -2px -2px 2px rgba(0, 0, 0, 0.25)",
			background:
				"-webkit-gradient(linear,left top, left bottom, from(#ff8a00), to(#e52e71))",
			backgroundColor: "linear-gradient(180deg, #ff8a00, #e52e71)",
		},
	},
	modalOutline: {
		"&:focus": {
			outline: "none",
		},
	},
	sessionDataDiv: {
		height: "fit-content",
	},
	modalCloseBtn: {
		display: "block",
		marginLeft: "auto",
		border: "1px solid #777777",
		minWidth: "50px",
		minHeight: "36px",
		"&:hover": {
			backgroundColor: "transparent !important",
			border: "1px solid #777777 !important",
		},
	},
	modalContent: {
		margin: "0 auto",
		marginTop: 20,
		marginLeft: 40,

		justifyContent: "center",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
			overflowY: "auto",
			marginLeft: 10,
		},
	},
	sessionDetails: {
		marginTop: 20,
		[theme.breakpoints.down("xs")]: {
			marginLeft: 0,
		},
	},

	//Speaker details in modal
	speakerDiv: {
		display: "flex",
		flexDirection: "row",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
		},
	},
	speakerData: {
		marginLeft: 30,
		marginTop: 50,
		[theme.breakpoints.down("xs")]: {
			marginLeft: 10,
			marginTop: 20,
		},
	},
	modalTitle: {
		fontSize: "18px",
		fontWeight: 700,
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		background:
			"-webkit-linear-gradient(89.85deg, #BCA1F7 0%, #EE759C 98.01%)",
		[theme.breakpoints.down("xs")]: {
			maxWidth: "100%",
		},
	},
	modalRole: {
		fontSize: "16px",
		color: "#FFFFFF",
		maxWidth: 200,
	},
	modalSpeakerData: {
		display: "flex",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "row",
		},
	},
	modalSessionName: {
		fontSize: "26px",
		fontWeight: "bold",
		letterSpacing: "0.02em",
		marginBottom: 10,
		color: "#FFFFFF",
		lineHeight: "36.4px",
		[theme.breakpoints.down("xs")]: {
			fontSize: "20px",
			lineHeight: "33.6px",
		},
	},
	modalDescription: {
		color: "white",
		fontSize: "16px",
		marginTop: 10,
		marginBottom: 20,
		whiteSpace: "pre-line",
		[theme.breakpoints.down("xs")]: {
			marginRight: 20,
		},
	},
	modalBtnDiv: {
		display: "flex",
		justifyContent: "space-between",
		maxWidth: 380,
		marginTop: 30,
		marginBottom: 30,
		[theme.breakpoints.down(1450)]: {
			display: "flex",
			flexDirection: "column",
			height: 110,
		},
		[theme.breakpoints.down("xs")]: {
			display: "flex",
			flexDirection: "column",
			height: 110,
		},
	},
	modalSpeakerLogo: {
		height: "200px",
		width: "172px",
		borderRadius: 5,
		[theme.breakpoints.down("xs")]: {
			height: "130px",
			width: "112px",
		},
	},
	sliderBtnLeft: {
		top: theme.spacing(0),
	},
	sliderBtnRight: {
		top: theme.spacing(0),
	},
}));
