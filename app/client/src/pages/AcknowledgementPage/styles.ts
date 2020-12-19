import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	rootContainer: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
	},
	root: {
		textAlign: "center",
	},
	mainDiv: {
		marginTop: theme.spacing(-10),

		// backgroundColor: "#070e23",
		background:
			"linear-gradient(160.34deg, #042C69 0%, #041739 21.78%, #040D21 50.11%, #1B132F 82.45%, #471F48 99.57%)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
		height: "101vh",
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.down("sm")]: {
			background:
				"linear-gradient(160.34deg, #042C69 0%, #041739 21.78%, #040D21 50.11%, #1B132F 82.45%, #471F48 99.57%)",
			backgroundSize: "cover",
			height: "115vh",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: 0,
			height: "115vh",
		},
		[theme.breakpoints.down(350)]: {
			marginTop: 0,
			height: "125vh",
		},
	},
	headerDiv: {
		display: "flex",
		flexDirection: "column",
	},
	thanksForText: {
		color: theme.palette.common.white,
		marginBottom: 20,
		fontWeight: 700,
		marginTop: "-40vh",
		textAlign: "left",
		fontSize: "70px",
		marginLeft: "10vw",
		paddingRight: theme.spacing(3),
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
			marginLeft: "8vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "40px",
			marginLeft: "3vw",
			paddingRight: theme.spacing(2),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "35px",
			marginLeft: "3vw",
			paddingRight: theme.spacing(1),
		},
	},
	registeringText: {
		textAlign: "left",
		marginBottom: 20,
		fontWeight: 700,
		background: "linear-gradient(89deg, #901BF3 0%, #FF0052 99.41%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		fontSize: "70px",
		marginLeft: "10vw",
		marginTop: theme.spacing(-2),
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
			marginLeft: "8vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "40px",
			marginLeft: "3vw",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "35px",
			marginLeft: "3vw",
		},
	},
	registerButtonOutline: {
		height: "3.5rem",
		width: "12.5rem",
		marginTop: theme.spacing(5),
		borderColor: "#8B17A0",
		"&:hover": {
			backgroundColor: "#5B44BA",
		},
		[theme.breakpoints.down("xl")]: {
			height: "3.5rem",
			width: "12.5rem",
		},
		[theme.breakpoints.down("lg")]: {
			height: "3rem",
			width: "10.5rem",
		},
		[theme.breakpoints.down("md")]: {
			height: "2.5rem",
			width: "8.5rem",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "20vh",
			height: "2rem",
			width: "7.5rem",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "20vh",
			height: "2rem",
			width: "7rem",
		},
	},
	timerText: {
		fontSize: "14px",
		color: "#FFFFFF",
		[theme.breakpoints.down("xl")]: {
			fontSize: "14px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "14px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "10px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "10px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "10px",
		},
	},
	mainHeaderCaption: {
		fontSize: "24px",
		fontWeight: 500,
		color: theme.palette.common.white,
		textAlign: "left",
		marginBottom: 20,
		paddingTop: theme.spacing(3),
		lineHeight: "130%",
		paddingLeft: "25%",
		paddingRight: "25%",
		[theme.breakpoints.down("xl")]: {
			fontSize: "24px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "20px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "16px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "16px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "12px",
			paddingLeft: "10%",
			paddingRight: "10%",
		},
	},
	mainFooterCaption: {
		fontSize: "24px",
		fontWeight: 500,
		color: theme.palette.common.white,
		textAlign: "left",
		marginBottom: 20,
		paddingTop: theme.spacing(15),
		lineHeight: "130%",
		[theme.breakpoints.down("xl")]: {
			fontSize: "24px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "20px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "16px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "16px",
			paddingTop: theme.spacing(7.5),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "16px",
			paddingTop: theme.spacing(5),
		},
	},
	headerDesc: {
		fontSize: "40px",
		marginBottom: 20,
		textAlign: "left",
		fontWeight: 600,
		color: "#FAFF53",
		maxWidth: 500,
		marginTop: "2vh",
		[theme.breakpoints.down("xl")]: {
			fontSize: "45px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "35px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "25px",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "20vh",
			fontSize: "20px",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "20vh",
			fontSize: "16px",
		},
	},
	slack: {
		marginTop: theme.spacing(1),
		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(2),
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: theme.spacing(1),
			width: "20px",
			height: "20px",
		},
	},
	footerIcons: {
		paddingTop: theme.spacing(3),
	},
	footerIconImages: {
		width: "20px",
		height: "20px",
	},
	register: {
		width: "40vw",
		height: "7vh",
		marginLeft: "31vw",
		marginTop: "3vw",
	},
	buttons: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "45vw",
		marginTop: theme.spacing(2),
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
			width: "130vw",
			marginLeft: "-15vw",
		},
	},
	registerButton: {
		height: "3.5rem",
		width: "12.5rem",
		marginTop: theme.spacing(5),
		background: "#8B17A0",
		"&:hover": {
			backgroundColor: "#5B44BA",
		},
		display: "flex",
		flexDirection: "row",
		[theme.breakpoints.down("xl")]: {
			height: "3.5rem",
			width: "12.5rem",
		},
		[theme.breakpoints.down("lg")]: {
			height: "3rem",
			width: "10.5rem",
		},
		[theme.breakpoints.down("md")]: {
			height: "2.5rem",
			width: "8.5rem",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "20vh",
			height: "2rem",
			width: "7.5rem",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "20vh",
			height: "2rem",
			width: "7rem",
		},
	},
	registerText: {
		fontSize: "14px",
		[theme.breakpoints.down("xl")]: {
			fontSize: "14px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "14px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "10px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "10px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "10px",
		},
	},
	errorText: {
		fontSize: "16px",
		marginRight: "40%",
		marginTop: theme.spacing(5),
		textAlign: "left",
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
	logoImg: {
		marginTop: "15vh",
		// height: '35vh',
		padding: "1rem",
		width: "25vh",
		[theme.breakpoints.down("xl")]: {
			// height: '35vh',
			width: "25vh",
		},
		[theme.breakpoints.down("lg")]: {
			// height: '35vh',
			width: "20vh",
		},
		[theme.breakpoints.down("md")]: {
			// height: '30vh',
			width: "20vh",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "25vh",
			// height: '27.5vh',
			width: "20vh",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "20vh",
			// height: '22.5vh',
			width: "27.5vw",
		},
	},
	speakersDiv: {
		backgroundColor: theme.palette.common.white,
	},
	formArea: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	formDescription: {
		display: "flex",
		width: "45%",
		flexDirection: "column",
		marginTop: "37.5%",
	},
	formFields: {
		display: "flex",
		flexDirection: "column",
		width: "50%",
		marginTop: "15%",
		marginRight: "-12.5%",
	},
	inputField: {
		width: "60%",
		marginBottom: theme.spacing(6),
		fontSize: "22.8211px",
		lineHeight: "150%",
		letterSpacing: "0.01em",
		color: "rgba(255, 255, 255, 0.6)",
	},
	checkboxLabel: {
		width: "60%",
	},
	checkbox: {
		marginTop: "-3.5%",
	},
	registerForText: {
		fontWeight: 700,
		marginTop: "-40vh",
		textAlign: "left",
		fontSize: "70px",
		marginLeft: "10vw",
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
			marginLeft: "8vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "50px",
			marginLeft: "3vw",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "40px",
			marginLeft: "3vw",
		},
	},
	chaosCarnivalText: {
		fontWeight: 700,
		background: "linear-gradient(to right, #B4F59E 0%, #71BCF6 55%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		fontSize: "70px",
		textAlign: "left",
		marginLeft: "10vw",
		marginTop: theme.spacing(-2),
		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
			marginLeft: "8vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "50px",
			marginLeft: "3vw",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "40px",
			marginLeft: "3vw",
		},
	},
	infoText: {
		fontSize: "24px",
		textAlign: "left",
		color: "#FFFFFF",
		marginLeft: "10vw",
		marginTop: theme.spacing(4),
		[theme.breakpoints.down("sm")]: {
			fontSize: "15px",
		},
	},
}));

export const CustomInputField = withStyles({
	root: {
		fontSize: "22.8211px",
		lineHeight: "150%",
		letterSpacing: "0.01em",
		color: "rgba(255, 255, 255, 0.6)",
		"& label.Mui-focused": {
			color: "#FE1C65",
		},
		"& .MuiInputBase-root": {
			color: "rgba(255, 255, 255, 0.6)",
			fontSize: "22.8211px",
			lineHeight: "150%",
			letterSpacing: "0.01em",
		},
		"& .MuiFormLabel-root": {
			color: "rgba(255, 255, 255, 0.6)",
			fontSize: "22.8211px",
			lineHeight: "150%",
			letterSpacing: "0.01em",
		},
		"& .MuiInput-underline:before": {
			borderBottomColor: "rgba(255, 255, 255, 0.6)",
		},
	},
	input: {
		"&:-webkit-autofill": {
			WebkitTextFillColor: "#042C69",
			WebkitBoxShadow: `0 0 0 1000px #471F48 inset`,
		},
	},
})(TextField);

export const CustomCheckbox = withStyles({
	root: {
		fontSize: "16px",
		lineHeight: "150%",
		color: "rgba(255, 255, 255, 0.6)",
	},
})(Checkbox);

export const CustomFormControlLabel = withStyles({
	root: {
		fontSize: "16px",
		lineHeight: "150%",
		color: "#FFFFFF",
		textAlign: "left",
	},
})(FormControlLabel);
