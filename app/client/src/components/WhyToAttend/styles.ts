import { makeStyles } from "@material-ui/core/styles";

// Component styles
export const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
    justifyContent: "center",
    background: 'linear-gradient(180deg, #070E23 56.2%, #000000 100%)',
    [theme.breakpoints.down("sm")]: {
      height: "123vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "123vh",
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
  whyToAttend: {
    width: '60vw',
    marginTop: '20vh',
    [theme.breakpoints.down("sm")]: {
      width: '100vw',
      marginTop: '20vh',
    },
    [theme.breakpoints.down("xs")]: {
      width: '100vw',
      marginTop: '20vh',
    },
  },

  whyToAttendText: {
    fontWeight: 700, 
    marginTop: '-40vh',
    textAlign: 'left',
    fontSize: '70px',
    marginLeft: '10vw',
    [theme.breakpoints.down("md")]: {
      fontSize: '50px',
      marginLeft: '8vw',
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
  chaosCarnivalText: {
    fontWeight: 700, 
    background: 'linear-gradient(to right, #B4F59E 0%, #71BCF6 55%)', 
    WebkitBackgroundClip: 'text',
     WebkitTextFillColor: 'transparent', 
    fontSize: '70px',
    textAlign: 'left',
    marginLeft: '10vw',
    [theme.breakpoints.down("md")]: {
      fontSize: '50px',
      marginLeft: '8vw',
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
    marginTop: '-15vh',
    textAlign: 'left',
    width: '30vw',
    marginRight: '8vw',
    [theme.breakpoints.down("md")]: {
      marginLeft: '3vw',
      marginRight: '3vw',
      width: '50vw',
		},
    [theme.breakpoints.down("sm")]: {
      marginTop: '-12vh',
      marginLeft: '3vw',
      marginRight: '3vw',
      width: '90vw',
		},
		[theme.breakpoints.down("xs")]: {
      marginTop: '-12vh',
      marginLeft: '3vw',
      marginRight: '3vw',
      width: '90vw',
    },
  },
  infoText: {
    fontSize: '1rem',
    textAlign: 'left',
  },
  advantages: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    marginLeft: '10vw',
    marginRight: '9vw',
    [theme.breakpoints.down("md")]: {
      marginLeft: '8vw',
      marginRight: '6vw',
		},
    [theme.breakpoints.down("sm")]: {
      marginTop: '5vh',
      flexDirection: "column",
		},
		[theme.breakpoints.down("xs")]: {
      marginTop: '5vh',
      flexDirection: "column",
    },
  },
  advantageElements: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    [theme.breakpoints.down("sm")]: {
      marginTop: '5vh',
      marginLeft: '-5vw',
      marginRight: '3vw',
		},
		[theme.breakpoints.down("xs")]: {
      marginTop: '5vh',
      marginLeft: '-5vw',
      marginRight: '3vw',
    },
  },
  advantageNumber: {
    color: '#71BCF6',
    fontSize: '1rem',
    fontWeight: 500,
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      fontSize: '0.8rem',
		},
    [theme.breakpoints.down("sm")]: {
      fontSize: '0.8rem',
		},
		[theme.breakpoints.down("xs")]: {
      fontSize: '0.8rem',
    },
  },
  advantageHead: {
    fontSize: '2rem',
    fontWeight: 500,
    textAlign: 'left',
    [theme.breakpoints.down("md")]: {
      fontSize: '1.5rem',
		},
    [theme.breakpoints.down("sm")]: {
      fontSize: '1.5rem',
		},
		[theme.breakpoints.down("xs")]: {
      fontSize: '1.5rem',
    },
  },
  advantageInfo: {
    color: '#8193B2',
    fontSize: '2rem',
    textAlign: 'left',
    [theme.breakpoints.down("xl")]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: '1rem',
		},
    [theme.breakpoints.down("md")]: {
      fontSize: '0.8rem',
		},
    [theme.breakpoints.down("sm")]: {
      fontSize: '0.8rem',
		},
		[theme.breakpoints.down("xs")]: {
      fontSize: '0.8rem',
    },
  },
}));