import { makeStyles } from "@material-ui/core/styles";

// Component styles
export const useStyles = makeStyles((theme) => ({
	root: {
    minHeight: 'fit-content',
		height: "60rem",
		display: "flex",
		flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    alignContent:"center",
    background: 'linear-gradient(180deg,rgba(255, 136, 0, 0.65),rgba(229, 46, 113, 0.65))',
    backgroundImage: 'url(/images/cfpbg.jpg)',
    backgroundColor: '#000',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    backgroundSize: 'cover',
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "#000",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: "60%",
      height: "120vh",
      background: 'linear-gradient(90deg, #101010eb 0%, rgb(26 26 26 / 83%) 37.89%, #080808db 133.18%), url(/images/callForPapers.png)',
      // background: 'url(/images/cfpbg.jpg)',
    },
  },
  heading: {
    display: "flex",
    position:"relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
		[theme.breakpoints.down("sm")]: {
      flexDirection: "column",
		},
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
    },
    
  },
  callForPapers: {
    width: '80vw',
    minHeight: 'fit-content',
    // position:"absolute",
    // marginTop: '22vh',
    // marginLeft: '-4vw',
    [theme.breakpoints.down("lg")]: {
      height: "70vh",
      width: '100vw',
      marginTop: '3vh',
      padding: '3vw',
    },
    [theme.breakpoints.down("md")]: {
      height: "60vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "80vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "100vh",
      marginTop: '3vh',
    },
  },

  callForPapersText: {
    fontWeight: 700, 
    textAlign: 'left',
    fontSize: '70px',
    marginLeft: '7vw',
    background: 'linear-gradient(to right, #C94CA8 0%, #2C84F9 35%)', 
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
    marginLeft: '-5vw',
    width: '34vw',
    float: 'left',
    marginRight: '8vw',
    [theme.breakpoints.down("sm")]: {
      marginRight: '3vw',
      marginLeft: '-2vw',
		},
		[theme.breakpoints.down("xs")]: {
      marginRight: '3vw',
      marginLeft: '-2vw',
    },
  },
  infoText: {
    fontSize: '1.25rem',
    textAlign: 'left',
    color: '#8193B2',
  },
  dateText: {
    fontSize: '1.25rem',
    textAlign: 'left',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
 	cfpButton: {
		height: '3.5rem',
		width: "fit-content",
    minWidth: '18.5rem',
		[theme.breakpoints.down("xl")]: {
      height: '3.5rem',
		},
		[theme.breakpoints.down("lg")]: {
      // width: "70%",
			height: '3rem',
		// width: '16.5rem',
		},
		[theme.breakpoints.down("md")]: {
			height: '2.5rem',
		// width: '14.5rem',
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "20vh",
			height: '2rem',
		// width: '9.75rem',
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "20vh",
			height: '2rem',
		// width: '7.5rem',
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
