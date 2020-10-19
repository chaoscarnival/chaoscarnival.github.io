import { makeStyles } from "@material-ui/core/styles";

// Component styles
export const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
    justifyContent: "center",
    background: 'linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.874483) 27.89%, rgba(0, 0, 0, 0) 92.18%), url(/images/callForPapersWide.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '66.66% 100%',
    backgroundPosition: 'right',
    [theme.breakpoints.down("sm")]: {
      backgroundSize: '100% 100%',
    },
    [theme.breakpoints.down("xs")]: {
      backgroundSize: '100% 100%',
    },
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
    },
    
  },
  callForPapers: {
    width: '80vw',
    marginTop: '20vh',
    [theme.breakpoints.down("sm")]: {
      width: '100vw',
      marginTop: '3vh',
    },
    [theme.breakpoints.down("xs")]: {
      width: '100vw',
      marginTop: '3vh',
    },
  },

  callForPapersText: {
    fontWeight: 700, 
    marginTop: '-40vh',
    textAlign: 'left',
    fontSize: '70px',
    marginLeft: '7vw',
    background: 'linear-gradient(to right, #C94CA8 0%, #2C84F9 55%)', 
    WebkitBackgroundClip: 'text',
     WebkitTextFillColor: 'transparent', 
    [theme.breakpoints.down("md")]: {
      fontSize: '50px',
      marginLeft: '5vw',
		},
      [theme.breakpoints.down("sm")]: {
        fontSize: '50px',
        marginLeft: '3vw',
        marginTop: '8vh',
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: '40px',
        marginLeft: '3vw',
        marginTop: '8vh',
      },
  },
  isOpenText: {
    fontWeight: 700, 
    fontSize: '70px',
    textAlign: 'left',
    marginLeft: '7vw',
    [theme.breakpoints.down("md")]: {
      fontSize: '50px',
      marginLeft: '5vw',
		},
    [theme.breakpoints.down("sm")]: {
      fontSize: '50px',
      marginLeft: '3vw',
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '40px',
      marginLeft: '3vw',
    },
  },
  info: {
    marginTop: '5vh',
    marginLeft: '7vw',
    width: '34vw',
    marginRight: '8vw',
    [theme.breakpoints.down("md")]: {
      marginLeft: '5vw',
      marginRight: '3vw',
      width: '50vw',
		},
    [theme.breakpoints.down("sm")]: {
      marginTop: '10vh',
      marginLeft: '3vw',
      marginRight: '3vw',
      width: '90vw',
		},
		[theme.breakpoints.down("xs")]: {
      marginTop: '10vh',
      marginLeft: '3vw',
      marginRight: '3vw',
      width: '90vw',
    },
  },
  infoButton: {
    marginLeft: '-4.5vw',
    width: '34vw',
    marginRight: '8vw',
    [theme.breakpoints.down("sm")]: {
      marginRight: '3vw',
      marginLeft: '-5vw',
		},
		[theme.breakpoints.down("xs")]: {
      marginRight: '3vw',
      marginLeft: '-5vw',
    },
  },
  infoText: {
    fontSize: '1rem',
    textAlign: 'left',
    color: '#8193B2',
  },
  dateText: {
    fontSize: '1rem',
    textAlign: 'left',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  cfpButton: {
		height: '2.5rem',
		width: '12rem',
		[theme.breakpoints.down("xl")]: {
			height: '3rem',
		width: '15rem',
		},
		[theme.breakpoints.down("lg")]: {
			height: '2.5rem',
		width: '12rem',
		},
		[theme.breakpoints.down("md")]: {
			height: '2rem',
		width: '10rem',
		},
		[theme.breakpoints.down("sm")]: {
			height: '1.25rem',
		width: '8.5rem',
		},
		[theme.breakpoints.down("xs")]: {
			height: '1rem',
		width: '6.5rem',
		},
	},
	cfpText:{
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
}));
