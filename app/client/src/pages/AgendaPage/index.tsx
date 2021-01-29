import * as React from "react";
import "../../scrollbar.css";
import data from "./data";
import { useStyles } from "./styles";

function AgendaPage() {
	const classes = useStyles();

	return (
		<>
			{/* <MainHeader inHomePage={true} linksActive={true} /> */}
			{/* Agenda Page Content */}
			<div className={classes.root}>
				{/* Header */}
				<h1 className={classes.title}>Agenda</h1>
				{/* Day wise schedule */}
				<div>
					<div className={classes.header}>
						<h1 style={{ marginLeft: "7%", lineHeight: "5rem" }}>
							Wednesday, Feb 10
						</h1>
					</div>
				</div>
				{/* Agenda Table */}
				<span className={classes.details}>
					{data.map((d) => {
						return (
							<span id="block">
								<div
									id="time"
									style={{ background: "red" }}
								></div>
								<div
									id="speaker1details"
									style={{ background: "green" }}
								></div>
								<div
									id="speaker2details"
									style={{ background: "blue" }}
								></div>
							</span>
						);
					})}
				</span>
			</div>
			<br />
			{/* Footer */}
			{/* <Footer /> */}
		</>
	);
}

export default AgendaPage;
