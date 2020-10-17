import { Typography, Hidden } from "@material-ui/core";
import * as React from "react";
import { Charts } from "../../components";
import Footer from "../../components/Footer";
import { useStyles } from "./styles";
import MainHeader from "../../components/Header";
import "../../scrollbar.css";

function SponsorshipPage() {
	const classes = useStyles();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	});

	const [searchToken, setsearchToken] = React.useState("");

	return (
		<div className="scrollbar scrollbar-primary">
			<div className={classes.rootContainer}>
				<MainHeader />
				<div className={classes.root}>
					<div className={classes.mainDiv}>
						{/* Header component */}
						<div className={classes.headerDiv}>
							<div className={classes.headerText}>
								<Typography className={classes.mainHeader}>
									Chaos Experiments for Kubernetes
								</Typography>
								<Typography className={classes.headerDesc}>
									Litmus ChaosHub hosts chaos experiments for
									Kubernetes. The experiments are declarative
									and tunable. Use the hub interface to tune
									them to your needs, deploy them and take
									that step towards resilience.
								</Typography>
							</div>
							<Hidden smDown>
								<div style={{ marginLeft: "auto" }}>
									<img
										src="icons/chaos-bird.png"
										alt="Chaos Bird Experiment"
										className={classes.headerImg}
									/>
								</div>
							</Hidden>
						</div>
						{/* SearchBar and Stats */}
						<div className={classes.searchDiv}>
							<div className={classes.searchBar}>
							</div>
							<div className={classes.statsDiv}>
							</div>
						</div>
					</div>
					{/* Charts Div */}
					<div className={classes.chartsDiv}>
					</div>
				</div>
				{/* Footer */}
				<div style={{ marginTop: "auto" }}>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default SponsorshipPage;
