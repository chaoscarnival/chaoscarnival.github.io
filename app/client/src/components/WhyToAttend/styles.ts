import { makeStyles } from "@material-ui/core/styles";

// Component styles
export const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
    justifyContent: "center",
    background: 'linear-gradient(180deg, #070E23 56.2%, #000000 100%)',
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
    width: '60vw'
  },

  whyToAttendText: {
    fontWeight: 700, 
    marginTop: '-40vh',
    marginLeft: '4vw',
      fontSize: '70px',
      [theme.breakpoints.down("sm")]: {
        fontSize: '45px',
        marginLeft: '2vw',
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: '30px',
        marginLeft: '2vw',
      },
  },
  chaosCarnivalText: {
    fontWeight: 700, 
    background: 'linear-gradient(to right, #B4F59E 0%, #71BCF6 100%)', 
    WebkitBackgroundClip: 'text',
     WebkitTextFillColor: 'transparent', 
    fontSize: '70px',
    marginLeft: '7vw',
    [theme.breakpoints.down("sm")]: {
      fontSize: '45px',
      marginLeft: '5vw',
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '30px',
      marginLeft: '5vw',
    },
  },
  info: {
    marginTop: '-35vh',
    marginLeft: '-6vw',
    width: '30vw',
    [theme.breakpoints.down("sm")]: {
      marginTop: '5vh',
      marginLeft: '5vw',
      width: '90vw',
		},
		[theme.breakpoints.down("xs")]: {
      marginTop: '5vh',
      marginLeft: '5vw',
      width: '90vw',
    },
  },
  infoText: {
    fontSize: '1rem'
  },
  advantages: {
    flexDirection: "row",
    justifyContent: "center",
  },
}));
