import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
}));
