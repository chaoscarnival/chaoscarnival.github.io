import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		background: '#070E23',
		paddingTop: '10rem',
		paddingLeft: '7%'
	},
	title: {
		fontSize: '3rem',
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		background: '-webkit-linear-gradient(89.85deg, #BCA1F7 0%, #EE759C 98.01%)'
	},
	header: {
		background: 'linear-gradient(82.94deg, rgba(102, 61, 219, 0.144) 17.14%, rgba(169, 61, 219, 0.194) 79.8%)',
		width: '107%',
		height: '5rem',
		marginLeft: '-7%'
	},
	details: {
		height: '20rem',
	}
}));
