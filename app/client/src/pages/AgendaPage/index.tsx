import { Typography } from "@material-ui/core";
import * as React from "react";
import "../../scrollbar.css";
import data from "./data";
import { useStyles } from "./styles";

const AgendaPage: React.FC = () => {
	const classes = useStyles();

	const Speaker = (image: string, name: string, role: string) => {
		return (
			<div className={classes.speaker}>
				<img src={image} id="image" alt="speakerImg" />
				<div style={{ marginTop: "1rem" }}>
					<Typography id="subtitle">{name}</Typography>
					<Typography id="subtitle">{role}</Typography>
				</div>
			</div>
		);
	};

	const Keynote = (title, image, name, role, logo) => {
		return (
			<>
				<div
					className={classes.keynoteLeftDetail}
					style={{ background: "green" }}
				>
					<h1>{title}</h1>
					{Speaker(image, name, role)}
				</div>
				<div
					className={classes.keynoteRightDetail}
					style={{ background: "blue" }}
				>
					<img
						src={logo}
						style={{
							position: "absolute",
							bottom: "30%",
							right: 0,
							width: "8rem",
						}}
						alt="company logo"
					/>
				</div>
			</>
		);
	};

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
					{data.map((d, i) => {
						return (
							<div className={classes.block}>
								<div
									className={classes.time}
									style={{ background: "red" }}
								>
									{d.time}
								</div>
								{i === 0 ? (
									// For Keynote speaker
									<>
										{Keynote(
											d.sessionName,
											d.speakerImage,
											d.speakerName,
											d.role,
											d.companyLogo
										)}
									</>
								) : (
									// For Regular speakers
									<>
										<div
											className={classes.speaker1details}
											style={{ background: "green" }}
										></div>
										<div
											className={classes.speaker2details}
											style={{ background: "blue" }}
										></div>
									</>
								)}
							</div>
						);
					})}
				</span>
			</div>
			<br />
			{/* Footer */}
			{/* <Footer /> */}
		</>
	);
};

export default AgendaPage;
