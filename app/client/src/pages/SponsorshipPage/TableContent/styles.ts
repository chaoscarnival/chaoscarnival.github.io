import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	table: {
		maxWidth: 1600,
		[theme.breakpoints.down("sm")]: {
			maxWidth: 600,
			marginLeft: 10,
			marginRight: 10,
			margin: "0 auto",
		},
	},
}));
