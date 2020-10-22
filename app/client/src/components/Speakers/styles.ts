import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
	},
	speakerRoot: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		marginTop: '7vh',
    width: "80%",
    [theme.breakpoints.down("xl")]: {
      width: "90%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "75%",
		},
    [theme.breakpoints.down("md")]: {
      width: "95%",
		},
	},
	headingspeaker: {
    display: "flex",
    flexDirection: "row",
    position:"relative",
    width: "70%",
    padding: "0 1rem",
    alignSelf:"center",
    marginBottom: theme.spacing(3),
		[theme.breakpoints.down("md")]: {
      width: "80%",
		},
  },

  ourExcitingText: {
    fontWeight: 700, 
    textAlign: 'left',
    fontSize: '70px',
		color: '#262626',
    [theme.breakpoints.down("md")]: {
      fontSize: '50px',
		},
      [theme.breakpoints.down("sm")]: {
        fontSize: '50px',
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: '40px',
      },
	},

  speakersText: {
		fontWeight: 700, 
		background: 'linear-gradient(270.88deg, #FFDC7E 3.66%, #FF7C71 100.95%)', 
		borderRadius: '1rem',
    fontSize: '70px',
    textAlign: 'center',
    color: '#000000',
    [theme.breakpoints.down("md")]: {
      fontSize: '50px',
		},
    [theme.breakpoints.down("sm")]: {
      fontSize: '50px',
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '40px',
    },
  },
}));
