import { Typography } from "@material-ui/core";
import * as React from "react";
import "../../scrollbar.css";
import data from "./data";
import { useStyles } from "./styles";

// interface SpeakerProps {
// 	name: string;
// 	role: string
// 	speakerImage: string;
// 	companyLogo: string;
// }

// interface SessionProps {
// 	sessionName: string;
// 	speaker: SpeakerProps;
// 	time: string;
// 	description: string;
// 	tags: Array<String>
// }

// interface TotalSession {
// 	session: Array<SessionProps>;
// }

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

	const Keynote = (title?: string, speaker?: Array<Object>) => {
		return (
			<>
				<div
					className={classes.keynoteLeftDetail}
					style={{ background: "green" }}
				>
					<h1>{title}</h1>
					{speaker?.map((s) => (
						<>
							{Speaker(
								Object.values(s)[2],
								Object.values(s)[0],
								Object.values(s)[1]
							)}
						</>
					))}
				</div>
				<div
					className={classes.keynoteRightDetail}
					style={{ background: "blue" }}
				>
					{speaker?.map((s) => (
						<img
							src={Object.values(s)[3]}
							style={{
								position: "absolute",
								bottom: "30%",
								right: 0,
								width: "8rem",
							}}
							alt="company logo"
						/>
					))}
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
									{d.speaker1?.time}
								</div>
								{i === 0 ? (
									// For Keynote speaker
									<>{Keynote(d.sessionName, d.speaker)}</>
								) : (
									// For Regular speakers
									<>
										<div
											className={classes.speaker1details}
											style={{ background: "green" }}
										>
											<h1>{d.speaker1?.sessionName}</h1>
											{/* Tags */}
											{d.speaker1?.speaker.map((s) => {
												return (
													<>
														{Speaker(
															Object.values(s)[2],
															Object.values(s)[0],
															Object.values(s)[1]
														)}
													</>
												);
											})}
										</div>

										<div
											className={classes.speaker2details}
											style={{ background: "blue" }}
										>
											<h1>{d.speaker2?.sessionName}</h1>
											{/* Tags */}
											{d.speaker2?.speaker.map((s) => {
												return (
													<>
														{Speaker(
															Object.values(s)[2],
															Object.values(s)[0],
															Object.values(s)[1]
														)}
													</>
												);
											})}
										</div>
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
