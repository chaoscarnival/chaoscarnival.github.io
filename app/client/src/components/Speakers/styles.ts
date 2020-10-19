import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	root: {
		marginTop: '10vh',
		marginBottom: '15vh',
		display: "flex",
		flexDirection: "column",
    justifyContent: "center",
	},
	speakerRoot: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		marginTop: '-10vh',
		marginLeft: "7vw",
    marginRight: "7vw",
    [theme.breakpoints.down("sm")]: {
			marginLeft: "2vw",
    marginRight: "2vw",
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: "2vw",
    marginRight: "2vw",
    },
	},
	heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
    },
    
  },
  speakers: {
    width: '40vw',
    marginTop: '40vh',
    marginLeft: '-52vw',
    [theme.breakpoints.down("md")]: {
      marginLeft: '-52vw',
		},
    [theme.breakpoints.down("sm")]: {
      width: '100vw',
      marginTop: '25vh',
      marginLeft: '3vw',
    },
    [theme.breakpoints.down("xs")]: {
      width: '100vw',
      marginTop: '25vh',
      marginLeft: '3vw',
    },
  },
  ourExcitingText: {
    fontWeight: 700, 
    marginTop: '-40vh',
    textAlign: 'left',
    fontSize: '70px',
		marginLeft: '10vw',
		color: '#262626',
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
	speakersBackground: {
    width: '32vw',
    [theme.breakpoints.down("md")]: {
      width: '32vw',
		},
      [theme.breakpoints.down("sm")]: {
        width: '38vw',
      },
      [theme.breakpoints.down("xs")]: {
        width: '45vw',
      },
	},
  speakersText: {
		fontWeight: 700, 
		background: 'linear-gradient(270.88deg, #FFDC7E 3.66%, #FF7C71 100.95%)', 
		borderRadius: '1rem',
    fontSize: '70px',
    textAlign: 'center',
		marginLeft: '10vw',
    color: '#000000',
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
}));
