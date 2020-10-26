import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	timerBtn: {
		width: "13rem",
		height: 46,
		color: (props) =>
			props ? theme.palette.common.white : theme.palette.common.black,
		marginLeft: 20,
		borderWidth: "0.2rem",
		borderColor: theme.palette.primary.main,
		textTransform: "none",
		fontSize: "1.25rem",
		fontWeight: 700,
	},
}));

export default useStyles;
