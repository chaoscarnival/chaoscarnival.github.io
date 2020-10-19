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
		background: 'linear-gradient(180deg, rgba(26, 0, 52, 0.08) 0%, #080D24 95.75%, #070E23 101.56%), url(/images/home_background.jpg)',
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
	headerText: {
		width: '40vw',
		height: '7vh',
		marginLeft: '35vw',
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	headerTextDescription: {
		width: '40vw',
		height: '7vh',
		marginLeft: '31.5vw',
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	headerTextDate: {
		width: '20vw',
		height: '5vh',
		marginLeft: '41vw',
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
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
			fontSize: "20px",
		},
		[theme.breakpoints.down("xs")]: {
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
			height: '2rem',
		width: '14.5rem',
		},
		[theme.breakpoints.down("sm")]: {
			height: '1.25rem',
		width: '9.75rem',
		},
		[theme.breakpoints.down("xs")]: {
			height: '1rem',
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
	searchBar: {
		flexGrow: 1,
		[theme.breakpoints.down("sm")]: {
			marginRight: 20,
		},
		[theme.breakpoints.down("xs")]: {
			marginRight: 0,
		},
	},
	searchDiv: {
		display: "flex",
		flexDirection: "row",
		marginLeft: 130,
		marginRight: 80,
		marginTop: 10,
		[theme.breakpoints.up("xl")]: {
			width: 1550,
			margin: "0 auto",
		},
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			flexDirection: "column",
			width: "95%",
			marginLeft: 30,
			marginRight: 30,
			marginTop: 35,
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "10%",
			marginLeft: 10,
		},
		[theme.breakpoints.down(465)]: {
			marginTop: 90,
		},
		[theme.breakpoints.down(378)]: {
			marginTop: 135,
			marginLeft: 10,
			marginRight: 10,
		},
	},
	statsDiv: {
		marginTop: -10,
		flexGrow: 1,
		marginLeft: 10,
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			marginLeft: -10,
		},
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			marginLeft: 0,
			marginRight: 0,
		},
	},
	chartsDiv: {
		marginTop: -80,
		marginLeft: "8.55%",
		marginRight: "8.55%",
		backgroundColor: theme.palette.common.white,
		//border: "1px solid rgba(0, 0, 0, 0.05)",
		borderRadius: "3px",
		[theme.breakpoints.up("xl")]: {
			width: 1550,
			margin: "0 auto",
			marginTop: -80,
		},
		[theme.breakpoints.down("md")]: {
			marginTop: -60,
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: -80,
		},
		[theme.breakpoints.down(600)]: {
			marginTop: -90,
		},
		[theme.breakpoints.down(378)]: {
			marginTop: -30,
			marginLeft: "6%",
			marginRight: "6%",
		},
	},

	whyToAttend: {

	},

	callForPapers:{

	},
}));
