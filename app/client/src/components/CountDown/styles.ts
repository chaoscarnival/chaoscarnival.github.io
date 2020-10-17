import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	timerBtn: {
		width: '13rem',
		height: 46,
		color: theme.palette.common.white,
		marginLeft: 20,
		borderWidth: '0.2rem',
		borderColor: theme.palette.primary.main,
		textTransform: "none",
		fontSize: '1.25rem',
		fontWeight: 700,
	},
}));

export default useStyles;
