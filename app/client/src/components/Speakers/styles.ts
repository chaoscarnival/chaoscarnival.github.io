import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	root: {
    height: "100%",
		marginTop: '10vh',
		marginBottom: '15vh',
		display: "flex",
		flexDirection: "column",
    justifyContent: "center",
    // alignContent: "center",
    alignItems: "flex-start",
    // [theme.breakpoints.down("sm")]: {
    //   marginTop: '40vh',
		// },
		// [theme.breakpoints.down("xs")]: {
    //   marginTop: '40vh',
    // },
	},
	speakerRoot: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		marginTop: '7vh',
		// marginLeft: "12vw",
    // marginRight: "12vw",
    width: "80%",

    // [theme.breakpoints.up("xl")]: {
		// marginLeft: "10vw",
    // marginRight: "9vw",
    // },
    [theme.breakpoints.down("xl")]: {
			// marginLeft: "12vw",
      // marginRight: "12vw",
      width: "90%",
    },
    [theme.breakpoints.down("lg")]: {
			// marginLeft: "12vw",
      // marginRight: "12vw",
      width: "75%",
		},
    [theme.breakpoints.down("md")]: {
			// marginLeft: "0vw",
      // marginRight: "0vw",
      width: "95%",
		},
	},
	headingspeaker: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    position:"relative",
    width: "70%",
    padding: "0 1rem",
    alignSelf:"center",
    marginBottom: theme.spacing(3),
		[theme.breakpoints.down("md")]: {
      // padding: "0 16rem",
      width: "80%",
		},
		[theme.breakpoints.down("sm")]: {
      // padding: "0 5rem",
      // width: "90%",
		},
		[theme.breakpoints.down("xs")]: {
      // padding: "0 4rem",
		},
		// [theme.breakpoints.down("xs")]: {
		// 	flexDirection: "column",
    // },
  },
  speakers: {
    // width: '40vw',
    // position:"absolute",
    // marginTop: '40vh',
    // marginLeft: '-52vw',
    // [theme.breakpoints.down("md")]: {
    //   marginLeft: '-52vw',
		// },
    // [theme.breakpoints.down("sm")]: {
    //   width: '100vw',
    //   marginTop: '25vh',
    //   marginLeft: '3vw',
    // },
    // [theme.breakpoints.down("xs")]: {
    //   width: '100vw',
    //   marginTop: '25vh',
    //   marginLeft: '3vw',
    // },
  },
  ourExcitingText: {
    fontWeight: 700, 
    // marginTop: '-40vh',
    textAlign: 'left',
    fontSize: '70px',
		// marginLeft: '10vw',
		color: '#262626',
    [theme.breakpoints.down("md")]: {
      fontSize: '50px',
      // marginLeft: '8vw',
		},
      [theme.breakpoints.down("sm")]: {
        fontSize: '50px',
        // marginLeft: '3vw',
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: '40px',
        // marginLeft: '3vw',
      },
	},
	// speakersBackground: {
  //   width: '32vw',
  //   [theme.breakpoints.down("md")]: {
  //     width: '32vw',
	// 	},
  //     [theme.breakpoints.down("sm")]: {
  //       width: '45vw',
  //     },
  //     [theme.breakpoints.down("xs")]: {
  //       width: '55vw',
  //     },
	// },
  speakersText: {
		fontWeight: 700, 
		background: 'linear-gradient(270.88deg, #FFDC7E 3.66%, #FF7C71 100.95%)', 
		borderRadius: '1rem',
    fontSize: '70px',
    textAlign: 'center',
		// marginLeft: '10vw',
    color: '#000000',
    [theme.breakpoints.down("md")]: {
      fontSize: '50px',
      // marginLeft: '8vw',
		},
    [theme.breakpoints.down("sm")]: {
      fontSize: '50px',
      // marginLeft: '3vw',
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '40px',
      // marginLeft: '3vw',
    },
  },
}));
