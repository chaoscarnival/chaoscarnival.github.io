import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "100%",
		zIndex: 1,
	},
	appFrame: {
		position: "relative",
		display: "flex",
		width: "100%",
		height: "100%",
		color: theme.palette.primary.contrastText,
	},
	content: {
		background: "#070E23",
		width: "100%",
	},
	routeBody: {
		width: "100%",
	},
}));
