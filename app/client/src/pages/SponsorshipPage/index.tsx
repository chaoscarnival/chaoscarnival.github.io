import { Divider, Typography } from "@material-ui/core";
import * as React from "react";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import SponsorBenefits from "../../components/SponsorBenefits";
import Sponsors from "../../components/Sponsors";
import "../../scrollbar.css";
import { useStyles } from "./styles";
import CustomizedTables from "./TableContent";

function SponsorshipPage() {
	const classes = useStyles();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className="scrollbar scrollbar-primary">
			<div className={classes.rootContainer}>
				<MainHeader inHomePage={false} linksActive={true} />
				<div>
					{/* Header component */}
					<div className={classes.headerDiv}>
						<div className={classes.headerText}>
							<Typography className={classes.mainHeader}>
								Chaos Carnival <br></br> Sponsorship Details &
								Benefits
							</Typography>
							<Typography className={classes.headerDesc}>
								Check below about the different types of
								sponsorships and their benefits
							</Typography>
						</div>
						<div className={classes.imgDiv}>
							<img
								src="icons/chaos-carnival-logo.png"
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
						<a id="sponsors" href="sponsors"></a>
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
	);
}

export default SponsorshipPage;
