import { Button, IconButton, Modal, Typography } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import * as React from "react";
import { useState } from "react";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import Sponsors from "../../components/Sponsors";
import "../../scrollbar.css";
import AddCalendar from "./AddCalendar";
import Break from "./Break";
import day1 from "./day1";
import day2 from "./day2";
import JoinSession from "./JoinSession";
import { useStyles } from "./styles";

interface PopOverModal {
	modalState: boolean;
	speakerData: any;
	sessionName: string;
	sessionTime: string;
	sessionDescription: string;
	sessionTags: string[];
}

const AgendaPage: React.FC = () => {
	const classes = useStyles();
	const [modalStatus, setModalStatus] = useState<PopOverModal>({
		modalState: false,
		speakerData: "",
		sessionName: "",
		sessionTime: "",
		sessionDescription: "",
		sessionTags: [""],
	});

	console.log(modalStatus);

	const Speaker = (
		data: any,
		s: any,
		companyLogo: string | undefined,
		d: any
	) => {
		return (
			<>
				{d.id === 13 || d.id === 28 ? (
					<></>
				) : (
					<div
						className={classes.speaker}
						onClick={() => {
							setModalStatus({
								modalState: true,
								speakerData: s,
								sessionName: d.sessionName,
								sessionTime: data.time,
								sessionDescription: d.description,
								sessionTags: d.tags,
							});
						}}
					>
						<div style={{ display: "flex" }}>
							<img
								src={s.speakerImage}
								id="image"
								alt="speakerImg"
							/>
							<div style={{ marginTop: "0.5rem" }}>
								<Typography id="subtitle">{s.name}</Typography>
								<Typography id="subtitle">{s.role}</Typography>
							</div>
						</div>
						{companyLogo !== undefined ? (
							<img
								style={{
									marginTop: "0.5rem",
									height: "2rem",
									width: "10rem",
									objectFit: "contain",
								}}
								src={companyLogo}
								alt="companyLogo"
							/>
						) : null}
					</div>
				)}
			</>
		);
	};

	const Closing = (time: string, duration: string, text: string) => {
		return (
			<div className={classes.block}>
				<div className={classes.time}>
					{time}
					<br />
					<span
						style={{
							fontSize: "0.8rem",
							color: "rgba(255, 255, 255, 0.6)",
						}}
					>
						{duration}
					</span>
				</div>
				<div
					style={{
						background: "rgba(255, 255, 255, 0.05)",
						width: "70%",
						height: "5rem",
						lineHeight: "3rem",
					}}
				>
					<span>
						<h2 style={{ paddingLeft: "1rem" }}>{text}</h2>
					</span>
				</div>
			</div>
		);
	};

	const Tags = (tags: string[] | undefined) => {
		return (
			<div style={{ display: "flex", flexDirection: "row" }}>
				{tags?.map((tag) => (
					<div className={classes.tagsDiv}>
						<div
							style={{
								height: 10,
								width: 10,
								marginTop: 4.2,
								backgroundColor:
									tag === "Chaos Engineering"
										? "#10B180"
										: tag === "Observability"
										? "#3168DA"
										: "#FF0858",
								borderRadius: "50%",
								display: "inline-block",
							}}
						/>
						<Typography className={classes.tagsText}>
							{tag}
						</Typography>
					</div>
				))}
			</div>
		);
	};

	const handleClose = () => {
		setModalStatus({
			modalState: false,
			speakerData: "",
			sessionName: "",
			sessionTime: "",
			sessionDescription: "",
			sessionTags: [""],
		});
	};
	const Keynote = (keynote: any) => {
		return (
			<>
				<div className={classes.keynoteLeftDetail}>
					<h1>{keynote.sessionName}</h1>
					{keynote.speaker?.map((s) => (
						<>{Speaker(keynote, s, undefined, keynote)}</>
					))}
				</div>
				<div className={classes.keynoteRightDetail}>
					{keynote.speaker?.map((s) => (
						<img
							src={s.companyLogo}
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
		<div className="scrollbar scrollbar-primary">
			<div className={classes.rootContainer}>
				<MainHeader />
				{/* Agenda Page Content */}
				<div className={classes.root}>
					{/* Header */}
					<h1 className={classes.title}>Agenda</h1>
					{/* Day 1 Agenda Table */}

					<div className={classes.header}>
						<h1 style={{ marginLeft: "17%", lineHeight: "5rem" }}>
							Wednesday, Feb 10
						</h1>
					</div>

					{/* Agenda Table */}
					<div className={classes.details}>
						{day1.map((d, i) => {
							return (
								<>
									{d.content === "break" ? (
										<Break />
									) : (
										<div className={classes.block}>
											<div className={classes.time}>
												{d.time}
												<br />
												<span
													style={{
														fontSize: "0.8rem",
														color:
															"rgba(255, 255, 255, 0.6)",
													}}
												>
													{d.duration}
												</span>
											</div>
											{i === 0 ? (
												// For Keynote speaker
												<>{Keynote(d)}</>
											) : (
												// For Regular speakers
												<>
													<div
														className={
															classes.speaker1details
														}
														style={{
															background: `${d.speaker1?.background}`,
														}}
													>
														<Typography
															style={{
																fontWeight:
																	"bold",
																fontSize: 18,
																paddingTop: 10,
															}}
														>
															{
																d.speaker1
																	?.sessionName
															}
														</Typography>

														{/* Tags */}
														<div
															className={
																classes.tagsField
															}
														>
															{Tags(
																d.speaker1?.tags
															)}
														</div>

														{d.speaker1?.speaker.map(
															(s) => {
																return (
																	<>
																		{Speaker(
																			d,
																			s,
																			s.companyLogo,
																			d.speaker1
																		)}
																	</>
																);
															}
														)}
													</div>

													<div
														className={
															classes.speaker2details
														}
														style={{
															background: `${d.speaker2?.background}`,
														}}
													>
														<Typography
															style={{
																fontWeight:
																	"bold",
																fontSize: 18,
																paddingTop: 10,
															}}
														>
															{
																d.speaker2
																	?.sessionName
															}
														</Typography>

														{/* Tags */}
														<div
															className={
																classes.tagsField
															}
														>
															{Tags(
																d.speaker2?.tags
															)}
														</div>

														{d.speaker2?.speaker.map(
															(s) => {
																return (
																	<>
																		{Speaker(
																			d,
																			s,
																			s.companyLogo,
																			d.speaker2
																		)}
																	</>
																);
															}
														)}
													</div>
												</>
											)}
										</div>
									)}
								</>
							);
						})}
						{Closing("3:00 PM", "(10min)", "Day 1 Closing Remarks")}
					</div>

					<br />
					<br />
					{/* Day 2 */}
					<div className={classes.header}>
						<h1 style={{ marginLeft: "17%", lineHeight: "5rem" }}>
							Thursday, Feb 11
						</h1>
					</div>

					{/* Day 2 Table */}
					<div className={classes.details}>
						{day2.map((d, i) => {
							return (
								<>
									{d.content === "break" ? (
										<Break />
									) : (
										<div className={classes.block}>
											<div className={classes.time}>
												{d.time}
												<br />
												<span
													style={{
														fontSize: "0.8rem",
														color:
															"rgba(255, 255, 255, 0.6)",
													}}
												>
													{d.duration}
												</span>
											</div>
											{i === 0 ? (
												// For Keynote speaker
												<>{Keynote(d)}</>
											) : (
												// For Regular speakers
												<>
													<div
														className={
															classes.speaker1details
														}
														style={{
															background: `${d.speaker1?.background}`,
														}}
													>
														<Typography
															style={{
																fontWeight:
																	"bold",
																fontSize: 18,
																paddingTop: 10,
															}}
														>
															{
																d.speaker1
																	?.sessionName
															}
														</Typography>

														{/* Tags */}
														<div
															className={
																classes.tagsField
															}
														>
															{Tags(
																d.speaker1?.tags
															)}
														</div>

														{d.speaker1?.speaker.map(
															(s) => {
																return (
																	<>
																		{Speaker(
																			d,
																			s,
																			s.companyLogo,
																			d.speaker1
																		)}
																	</>
																);
															}
														)}
													</div>

													<div
														className={
															classes.speaker2details
														}
														style={{
															background: `${d.speaker2?.background}`,
														}}
													>
														<Typography
															style={{
																fontWeight:
																	"bold",
																fontSize: 18,
																paddingTop: 10,
															}}
														>
															{
																d.speaker2
																	?.sessionName
															}
														</Typography>

														{/* Tags */}
														<div
															className={
																classes.tagsField
															}
														>
															{Tags(
																d.speaker2?.tags
															)}
														</div>

														{d.speaker2?.speaker.map(
															(s) => {
																return (
																	<>
																		{Speaker(
																			d,
																			s,
																			s.companyLogo,
																			d.speaker2
																		)}
																	</>
																);
															}
														)}
													</div>
												</>
											)}
										</div>
									)}
								</>
							);
						})}
						{Closing("3:00 PM", "(10min)", "Day 2 Closing Remarks")}
					</div>
					<Modal
						open={modalStatus.modalState}
						onClose={handleClose}
						className={classes.modal}
					>
						<>
							<div style={{ width: "100%" }}>
								<Button
									onClick={handleClose}
									className={classes.modalCloseBtn}
								>
									<ClearIcon style={{ color: "#777777" }} />
								</Button>
							</div>
							<div className={classes.modalContent}>
								<div>
									<img
										src={modalStatus.speakerData.modalLogo}
										alt="Speakers"
										style={{
											height: "200px",
											width: "172px",
											borderRadius: 5,
										}}
									/>
									<Typography className={classes.modalTitle}>
										{modalStatus.speakerData.name}
									</Typography>
									<Typography className={classes.modalRole}>
										{modalStatus.speakerData.role}
									</Typography>
									<div
										style={{
											display: "flex",
											marginTop: 10,
											marginLeft: -10,
											width: 60,
											justifyContent: "space-between",
										}}
									>
										<IconButton>
											<img
												src="./icons/speaker-linkedin.svg"
												alt="Linkedin"
											/>
										</IconButton>
										<IconButton>
											<img
												src="./icons/speaker-twitter.svg"
												alt="Twitter"
											/>
										</IconButton>
									</div>
								</div>
								<div
									style={{
										marginLeft: 40,
									}}
								>
									<Typography
										className={classes.modalSessionName}
									>
										{modalStatus.sessionName}
									</Typography>
									<Typography
										style={{
											color: "#FFFFFF",
											fontSize: 16,
										}}
									>
										{modalStatus.sessionTime}
									</Typography>
									<Typography
										style={{
											color: "white",
											maxWidth: "500px",
											fontSize: "16px",
											marginTop: 10,
											marginBottom: 20,
										}}
									>
										Join the pre-show before the Google
										Keynote starts which will bring two AI
										Experiments to life: NSynth, a
										synthesizer that generates new sounds
										using neural networks and World Draw, a
										live interactive experience to draw the
										world together using the same technology
										behind QuickDraw and AutoDraw.
									</Typography>
									{Tags(modalStatus.sessionTags)}
									<div className={classes.modalBtnDiv}>
										<JoinSession handleClick={() => {}} />
										<AddCalendar handleClick={() => {}} />
									</div>
									<div style={{ display: "flex" }}>
										<Typography
											style={{
												fontSize: 14,
												color: "white",
											}}
										>
											Share the session on{" "}
										</Typography>
										<img
											src="./icons/twitter-blue.svg"
											style={{
												marginTop: -5,
												marginLeft: 2,
											}}
											alt="twitter-blue"
										/>
										<Typography
											style={{
												fontSize: 14,
												color: "#488FDF",
											}}
										>
											{" "}
											#chaoscarnival
										</Typography>
									</div>
								</div>
							</div>
						</>
					</Modal>
				</div>

				<Sponsors />
				<JoinCarnival />
				<Footer />
			</div>
		</div>
	);
};

export default AgendaPage;
