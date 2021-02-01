import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	rootContainer: {
		height: "100vh",
	},
	root: {
		background: "#070E23",
		paddingLeft: "15%",
		paddingTop: theme.spacing(17.5),
	},
	title: {
		fontSize: "3rem",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		background:
			"-webkit-linear-gradient(89.85deg, #BCA1F7 0%, #EE759C 98.01%)",
	},
	header: {
		background:
			"linear-gradient(82.94deg, rgba(102, 61, 219, 0.144) 17.14%, rgba(169, 61, 219, 0.194) 79.8%)",
		height: "5rem",
		marginLeft: "-20%",
	},
	details: {
		width: "100%",
	},

	block: {
		display: "flex",
		minHeight: "10rem",
	},
	time: {
		width: "10%",
		height: "5rem",
		fontSize: "1rem",
		marginLeft: "0.5rem",
		paddingTop: "1.5%",
	},
	detailsBlock: {
		paddingBottom: "1rem",
	},

	// Break
	breakTime: {
		height: "5rem",
		fontSize: "1rem",
		marginLeft: "0.5rem",
		paddingTop: "1.5%",
	},

	// For Keynote Speaker
	keynoteLeftDetail: {
		float: "left",
		paddingLeft: "1rem",
		width: "35%",
		cursor: "pointer",
	},

	keynoteRightDetail: {
		position: "relative",
		width: "35%",
	},

	// For regular Speaker
	speaker1details: {
		width: "35%",
		padding: "0 1rem",
		"&:hover": {
			cursor: "pointer",
		},
	},

	speaker2details: {
		width: "35%",
		padding: "0 1rem",
		"&:hover": {
			cursor: "pointer",
		},
	},

	// Speaker Block
	speaker: {
		display: "flex",
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
	},
	//Modal Styles
	modal: {
		position: "absolute",
		padding: 50,
		backgroundColor: "#161A1D",
		border: "1px solid rgba(255, 255, 255, 0.2)",
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
	},
	modalTitle: {
		fontSize: "18px",
		fontWeight: 700,
		maxWidth: 150,
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		background:
			"-webkit-linear-gradient(89.85deg, #BCA1F7 0%, #EE759C 98.01%)",
	},
	modalRole: {
		fontSize: "16px",
		color: "#FFFFFF",
		maxWidth: 200,
	},
	modalSessionName: {
		fontSize: "26px",
		fontWeight: "bold",
		letterSpacing: "0.02em",
		marginBottom: 10,
		maxWidth: "500px",
		color: "#FFFFFF",
		lineHeight: "36.4px",
	},
	modalBtnDiv: {
		display: "flex",
		justifyContent: "space-between",
		maxWidth: 380,
		marginTop: 30,
		marginBottom: 30,
	},
	sliderBtnLeft: {
		top: theme.spacing(0),
	},
	sliderBtnRight: {
		top: theme.spacing(0),
	},
}));
