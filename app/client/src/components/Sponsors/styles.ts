import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	headerText: {
		fontWeight: 700,
		fontSize: 60,
		textAlign: "left",
		background: "linear-gradient(to right, #C94CA8 0%, #2C84F9 100%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
	},
	mainDiv: {
		display: "flex",
		flexDirection: "row",
		[theme.breakpoints.up("xl")]: {
			maxWidth: 1420,
			margin: "0 auto",
		},
	},
}));
