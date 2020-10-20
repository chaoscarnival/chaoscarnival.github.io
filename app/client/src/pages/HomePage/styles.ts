import { makeStyles } from "@material-ui/core/styles";

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
		background: 'linear-gradient(180deg, rgba(26, 0, 52, 0.08) 0%, #080D24 95.75%, #070E23 101.56%), url(/images/home-background.jpg)',
		backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
		height: "107vh",
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.down("xs")]: {
			height: 550,
		},
	},
	headerDiv: {
		display: "flex",
		flexDirection: "column",
	},
	mainHeader: {
		fontSize: "40px",
		fontWeight: 500,
		color: theme.palette.common.white,
		textAlign: "left",
		marginBottom: 20,
		[theme.breakpoints.down("xl")]: {
			fontSize: "45px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "35px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "25px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "20px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "16px",
		},
	},
	headerDesc: {
		fontSize: "40px",
		marginBottom: 20,
		textAlign: "left",
		fontWeight: 600,
		color: '#FAFF53',
		maxWidth: 500,
		marginTop: '2vh',
		[theme.breakpoints.down("xl")]: {
			fontSize: "45px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "35px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "25px",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "20vh",
			fontSize: "20px",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "20vh",
			fontSize: "16px",
		},
	},
	register:{
		width: '40vw',
		height: '7vh',
		marginLeft: '31vw',
		marginTop: '3vw',
	},
	registerButton: {
		height: '3.5rem',
		width: '18.5rem',
		[theme.breakpoints.down("xl")]: {
			height: '3.5rem',
		width: '18.5rem',
		},
		[theme.breakpoints.down("lg")]: {
			height: '3rem',
		width: '16.5rem',
		},
		[theme.breakpoints.down("md")]: {
			height: '2.5rem',
		width: '14.5rem',
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "20vh",
			height: '2rem',
		width: '9.75rem',
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "20vh",
			height: '2rem',
		width: '7.5rem',
		},
	},
	registerText:{
		fontSize: '16px',
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
			fontSize: "8px",
		},
	},
	logoImg: {
		marginTop: '12.5vh',
		height: '35vh',
		width: '65vh',
		[theme.breakpoints.down("xl")]: {
			height: '35vh',
			width: '65vh',
		},
		[theme.breakpoints.down("lg")]: {
			height: '35vh',
			width: '60vh',
		},
		[theme.breakpoints.down("md")]: {
			marginTop: '15vh',
			height: '30vh',
			width: '50vh',
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: '18vh',
			height: '27.5vh',
			width: '47.5vh',
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: '25vh',
			height: '22.5vh',
			width: '42.5vh',
		},
	},
	speakersDiv: {
		backgroundColor: theme.palette.common.white,
	},
}));
