import { Divider, Typography } from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import SponsorBenefits from "../../components/SponsorBenefits";
import Sponsors from "../../components/Sponsors";
import "../../scrollbar.css";
import { useStyles } from "./styles";
import CustomizedTables from "./TableContent";

function SponsorshipPage() {
	const classes = useStyles();

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Chaos Carnival 2021 | Sponsorship</title>
				<meta
					name="keywords"
					content="Chaos carnival 2021, chaos engineering, chaos conference, chaos conference 2021, chaosconf, sponsor booths, sponsorship benefits, sponsorship, chaos engineering 101, cloud native, MayaData, CNCF, Percona, Wipro, Epsagon, Elastic, Gremlin, Soda Foundation"
				/>
				<link
					rel="canonical"
					href="https://chaoscarvival.io/sponsorship"
				/>
			</Helmet>
			<div className="scrollbar scrollbar-primary">
				<div className={classes.rootContainer}>
					<MainHeader />
					<div>
						{/* Header component */}
						<div className={classes.headerDiv}>
							<div className={classes.headerText}>
								<Typography className={classes.mainHeader}>
									Chaos Carnival <br></br> Sponsorship Details
									& Benefits
								</Typography>
								<Typography className={classes.headerDesc}>
									Check below about the different types of
									sponsorships and their benefits
								</Typography>
							</div>
							<div className={classes.imgDiv}>
								<img
									src="icons/chaos-carnival-logo-min.png"
									alt="Chaos Carnival Logo"
									className={classes.headerImg}
								/>
							</div>
						</div>
						<div className={classes.customizedTable}>
							<CustomizedTables />
						</div>
						<SponsorBenefits />
						<div
							style={{
								marginTop: "auto",
								marginLeft: "auto",
								marginRight: "auto",
							}}
							className={classes.sponsorSectionContainer}
						>
							<a id="sponsors" href="sponsors">
								{" "}
							</a>
							<div className={classes.sponsorSection}>
								<Sponsors />
							</div>
							<Divider className={classes.divider} />
						</div>
					</div>
					<div style={{ marginTop: "auto" }}>
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SponsorshipPage;
