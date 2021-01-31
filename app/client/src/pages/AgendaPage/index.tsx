import * as React from "react";
import Bootcamps from "../../components/Bootcamps/index";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import Sponsors from "../../components/Sponsors";
import "../../scrollbar.css";
import bootcamps from "../../data/bootcampData";
import { useStyles } from "./styles";

function AgendaPage() {
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
				<MainHeader />
				<div className={classes.root}>
					<div style={{ marginTop: "auto" }}>
						<a id="bootcamps" href="bootcamps">
							{" "}
						</a>
						<Bootcamps bootcamps={bootcamps} />
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

export default AgendaPage;
