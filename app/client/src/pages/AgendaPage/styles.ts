import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
	header: {
		background:
			"linear-gradient(82.94deg, rgba(102, 61, 219, 0.144) 17.14%, rgba(169, 61, 219, 0.194) 79.8%)",
		height: "5rem",
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
		background: "rgba(82, 145, 202, 0.4)",
	},
	breakItem2: {
		width: "45%",
		textAlign: "left",
		alignItems: "center",
		background: "rgba(100, 10, 146, 0.5)",
	},
	breakItem3: {
		width: "27.5%",
		background: "rgba(255, 255, 255, 0.2)",
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
		paddingLeft: "1rem",
		cursor: "pointer",
	},

	// For regular Speaker
	speaker1details: {
		width: "50%",
		padding: "0 1rem",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",

		"&:hover": {
			cursor: "pointer",
		},

		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},

	speaker2details: {
		width: "50%",
		padding: "0 1rem",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",

		"&:hover": {
			cursor: "pointer",
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
		[theme.breakpoints.down("xs")]: {
			top: "0%",
			left: "0%",
			padding: 10,
			transform: `translate(0%, 0%)`,
			height: "100%",
			width: "100%",
			overflowY: "scroll",
		},
	},
	modalOutline: {
		"&:focus": {
			outline: "none",
		},
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
		display: "flex",
		flexDirection: "row",
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
		marginLeft: 40,
		[theme.breakpoints.down("xs")]: {
			marginLeft: 0,
		},
	},
	modalTitle: {
		fontSize: "18px",
		fontWeight: 700,
		maxWidth: 150,
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
		maxWidth: "500px",
		color: "#FFFFFF",
		lineHeight: "36.4px",
		[theme.breakpoints.down("xs")]: {
			fontSize: "20px",
			lineHeight: "33.6px",
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
