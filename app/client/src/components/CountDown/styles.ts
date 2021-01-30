import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	timerBtn: {
		width: "13.25rem",
		border: `3px solid ${theme.palette.primary.main}`,
		color: theme.palette.common.white,
		textTransform: "none",
		display: "flex",
		justifyContent: "center",
		borderRadius: "0.3125rem",
		fontSize: "1.25rem",
		fontWeight: 700,
		marginTop: theme.spacing(0.5),
	},
}));

export default useStyles;
