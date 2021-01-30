import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		background: "#070E23",
		paddingTop: "10rem",
		paddingLeft: "7%",
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
		width: "107%",
		height: "5rem",
		marginLeft: "-7%",
	},
	details: {
		width: "100%",
	},

	block: {
		display: "flex",
		margin: "0.1rem 0",
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
	},

	keynoteRightDetail: {
		position: "relative",
		width: "35%",
	},

	// For regular Speaker
	speaker1details: {
		width: "35%",
		padding: "0 1rem",
	},

	speaker2details: {
		width: "35%",
		padding: "0 1rem",
	},

	// Speaker Block
	speaker: {
		display: "flex",
		paddingBottom: "1rem",
		justifyContent: "space-between",

		"& #image": {
			width: "3rem",
			height: "3rem",
		},
		"& #subtitle": {
			marginLeft: "1rem",
			fontSize: "0.8rem",
			color: "rgba(255, 255, 255, 0.8)",
		},
		"&:hover": {
			cursor: "pointer",
		},
	},
	//Tags styles
	tagsDiv: {
		display: "flex",
		flexDirection: "row",
		marginRight: 10,
	},
	tagsText: {
		color: "#FFFFFF",
		marginLeft: 5,
		fontSize: 12,
	},
	tagsField: {
		marginTop: 5,
		marginBottom: 30,
	},
	//Modal Styles
	modal: {
		margin: "auto",
		padding: 50,
		height: "80%",
		width: "65%",
		backgroundColor: "#161A1D",
		border: "2px solid rgba(255, 255, 255, 0.2)",
	},
	modalCloseBtn: {
		display: "block",
		marginLeft: "auto",
		border: "1px solid #777777",
		minWidth: "36px",
		minHeight: "36px",
		"&:hover": {
			backgroundColor: "transparent !important",
			border: "1px solid #777777 !important",
		},
	},
	modalContent: {
		display: "flex",
		flexDirection: "row",
		margin: "auto",
		marginTop: 40,
		marginLeft: 40,
	},
	modalTitle: {
		fontSize: "18px",
		fontWeight: 700,
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		background:
			"-webkit-linear-gradient(89.85deg, #BCA1F7 0%, #EE759C 98.01%)",
	},
	modalRole: {
		fontSize: "16px",
		color: "#FFFFFF",
	},
	modalSessionName: {
		fontSize: "26px",
		fontWeight: 500,
		width: "500px",
		color: "#FFFFFF",
		lineHeight: "36.4px",
	},
}));
