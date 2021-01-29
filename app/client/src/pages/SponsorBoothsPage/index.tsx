import * as React from "react";
import Bootcamps from "../../components/Bootcamps/index";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import Sponsors from "../../components/Sponsors";
import "../../scrollbar.css";
import { useStyles } from "./styles";

function SponsorBoothsPage() {
	const classes = useStyles();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className="scrollbar scrollbar-primary">
			<div className={classes.rootContainer}>
				<a id="home" href="home">
					{" "}
				</a>
				<MainHeader inHomePage={true} linksActive={true} />
				<div className={classes.root}>
					<div style={{ marginTop: "auto" }}>
						<a id="bootcamps" href="bootcamps">
							{" "}
						</a>
						<Bootcamps />
					</div>

					<div style={{ marginTop: "auto" }}>
						<a id="sponsors" href="sponsors">
							{" "}
						</a>
						<Sponsors />
					</div>
				</div>

				<div style={{ marginTop: "auto" }}>
					<JoinCarnival />
				</div>

				<div style={{ marginTop: "auto" }}>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default SponsorBoothsPage;
