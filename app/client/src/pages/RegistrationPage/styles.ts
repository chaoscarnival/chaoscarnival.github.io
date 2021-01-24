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
		background:
			"linear-gradient(160.34deg, #042C69 0%, #041739 21.78%, #040D21 50.11%, #1B132F 82.45%, #471F48 99.57%)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
		height: "105vh",
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
			height: "130vh",
		},
	},
	buttons: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
		},
	},
	registerButtonActive: {
		height: "3.5rem",
		width: "12.5rem",
		marginTop: theme.spacing(5),
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
			marginTop: theme.spacing(3),
			height: "2rem",
			width: "7.5rem",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: theme.spacing(3),
			height: "3rem",
			width: "84%",
		},
	},
	registerButton: {
		height: "3.5rem",
		width: "12.5rem",
		marginTop: theme.spacing(5),
		backgroundColor: "grey",
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
			marginTop: theme.spacing(3),
			height: "2rem",
			width: "7.5rem",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: theme.spacing(3),
			height: "3rem",
			width: "84%",
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
			fontSize: "12px",
		},
	},
	errorText: {
		fontSize: "16px",
		marginRight: "40%",
		marginTop: theme.spacing(4.5),
		marginLeft: theme.spacing(3),
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
			marginTop: theme.spacing(3),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "10px",
			marginTop: theme.spacing(3),
			textAlign: "center",
			marginLeft: "-15%",
			marginRight: 0,
		},
	},
	formArea: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: "-5vh",
		[theme.breakpoints.down(1080)]: {
			marginTop: "15%",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "10%",
		},
		[theme.breakpoints.down(975)]: {
			marginTop: "15%",
		},
		[theme.breakpoints.down(700)]: {
			marginTop: "16.5%",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "10%",
			flexDirection: "column",
		},
	},
	formDescription: {
		display: "flex",
		width: "45%",
		flexDirection: "column",
		marginTop: "65vh",
		[theme.breakpoints.down("xl")]: {
			marginTop: "65vh",
		},
		[theme.breakpoints.down("lg")]: {
			marginTop: "65vh",
		},
		[theme.breakpoints.down("md")]: {
			marginTop: "57.5vh",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "60vh",
		},
		[theme.breakpoints.down("xs")]: {
			width: "93%",
			marginTop: "25rem",
		},
		[theme.breakpoints.down(365)]: {
			marginTop: "22.5rem",
		},
		[theme.breakpoints.down(325)]: {
			marginTop: "17.5rem",
		},
		[theme.breakpoints.down(300)]: {
			marginTop: "22.5rem",
		},
	},
	formFields: {
		display: "flex",
		flexDirection: "column",
		width: "50%",
		marginTop: "15%",
		marginRight: "-12.5%",
		[theme.breakpoints.down(1080)]: {
			marginTop: "25%",
		},
		[theme.breakpoints.down("xs")]: {
			width: "93%",
			marginLeft: "12.5%",
			marginTop: "-8vh",
		},
	},
	inputField: {
		width: "60%",
		marginBottom: theme.spacing(4.5),
		fontSize: "22.8211px",
		lineHeight: "150%",
		letterSpacing: "0.01em",
		color: "rgba(255, 255, 255, 0.6)",
		[theme.breakpoints.down(1600)]: {
			marginBottom: theme.spacing(3),
		},
		[theme.breakpoints.down("md")]: {
			marginBottom: theme.spacing(3),
		},
		[theme.breakpoints.down("sm")]: {
			marginBottom: theme.spacing(2.5),
		},
		[theme.breakpoints.down("xs")]: {
			marginBottom: theme.spacing(2.5),
			width: "83%",
		},
	},
	checkboxLabel: {
		width: "60%",
		[theme.breakpoints.down("xs")]: {
			width: "83%",
		},
	},
	checkbox: {
		marginTop: "-3.5%",
		[theme.breakpoints.down(1600)]: {
			marginTop: "-4.5%",
		},
		[theme.breakpoints.down(1400)]: {
			marginTop: "-8.5%",
		},
		[theme.breakpoints.down(1200)]: {
			marginTop: "-10.5%",
		},
		[theme.breakpoints.down("md")]: {
			marginTop: "-10.5%",
		},
		[theme.breakpoints.down(1100)]: {
			marginTop: "-17.5%",
		},
		[theme.breakpoints.down(900)]: {
			marginTop: "-19.5%",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "-20.5%",
		},
		[theme.breakpoints.down(800)]: {
			marginTop: "-35.5%",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "-13.5%",
		},
		[theme.breakpoints.down(380)]: {
			marginTop: "-22.5%",
		},
	},
	registerForText: {
		fontWeight: 700,
		marginTop: "-40vh",
		textAlign: "left",
		fontSize: "60px",
		marginLeft: "10vw",
		[theme.breakpoints.down(1600)]: {
			fontSize: "47.5px",
			marginLeft: "10vw",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "45px",
			marginLeft: "10vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "40px",
			marginLeft: "10vw",
		},
		[theme.breakpoints.down(975)]: {
			fontSize: "30px",
			marginLeft: "10vw",
		},
		[theme.breakpoints.down(700)]: {
			fontSize: "25px",
			marginLeft: "10vw",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "30px",
			marginLeft: "10vw",
		},
	},
	chaosCarnivalText: {
		fontWeight: 700,
		background: "linear-gradient(to right, #B4F59E 0%, #71BCF6 55%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		fontSize: "60px",
		textAlign: "left",
		marginLeft: "10vw",
		marginTop: theme.spacing(-2),
		[theme.breakpoints.down(1600)]: {
			fontSize: "47.5px",
			marginLeft: "10vw",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "45px",
			marginLeft: "10vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "40px",
			marginLeft: "10vw",
		},
		[theme.breakpoints.down(975)]: {
			fontSize: "30px",
			marginLeft: "10vw",
		},
		[theme.breakpoints.down(700)]: {
			fontSize: "25px",
			marginLeft: "10vw",
			marginTop: theme.spacing(-1),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "30px",
			marginLeft: "10vw",
		},
	},
	infoText: {
		fontSize: "22px",
		textAlign: "left",
		color: "#FFFFFF",
		marginLeft: "10vw",
		marginTop: theme.spacing(4),
		[theme.breakpoints.down(1600)]: {
			fontSize: "20px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "20px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "16px",
		},
		[theme.breakpoints.down(975)]: {
			fontSize: "14px",
		},
		[theme.breakpoints.down(700)]: {
			fontSize: "12px",
			marginTop: theme.spacing(2),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "12px",
		},
	},
	divider: {
		borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
		width: "100%",
		margin: "0 auto",
		paddingTop: 120,
		background: "#070E23",
		[theme.breakpoints.down("xs")]: {
			paddingTop: 0,
		},
	},
	sponsorSectionContainer: {
		background: "#070E23",
	},
	sponsorSection: {
		width: "85vw",
		margin: "0 auto",
		[theme.breakpoints.down("xs")]: {
			width: "95vw",
			marginLeft: "-5vw",
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
