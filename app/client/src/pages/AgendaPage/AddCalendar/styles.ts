import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	rootContainer: {
		border: "1px solid #FE1C65",
		width: 180,
		height: 50,
	},
	root: {
		display: "flex",
		textTransform: "none",
		color: "#FFFFFF",
	},
	text: {
		fontSize: "14px",
		marginRight: 5,
		fontWeight: 700,
	},
}));
