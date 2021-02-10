import { Hidden, Typography } from "@material-ui/core";
import * as React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import Sponsors from "../../components/Sponsors";
import "../../scrollbar.css";
import { getLocale } from "../../utils/getLocale";
import Break from "./Break";
import day1 from "./day1";
import day2 from "./day2";
import KeynoteModal from "./KeynoteModal";
import SpeakerModal from "./SpeakerModal";
import { useStyles } from "./styles";
import Tags from "./Tags";
interface PopOverModal {
	modalState: boolean;
	speakerData: any;
	sessionData: any;
}

const AgendaPage: React.FC = () => {
	const classes = useStyles();
	const [modalStatus, setModalStatus] = useState<PopOverModal>({
		modalState: false,
		speakerData: "",
		sessionData: "",
	});
	const [keynoteModal, setKeynoteModal] = useState<PopOverModal>({
		modalState: false,
		speakerData: "",
		sessionData: "",
	});

	const { time: day1StartTime, timeZone, date: day1Date } = getLocale(
		"10 Feb 2021 08:00:00 -0800"
	);
	const { time: day1EndTime } = getLocale("10 Feb 2021 16:00:00 -0800");

	// Day 2
	const { time: day2StartTime, date: day2Date } = getLocale(
		"11 Feb 2021 08:00:00 -0800"
	);
	const { time: day2EndTime } = getLocale("11 Feb 2021 16:00:00 -0800");

	const Speaker = (s: any, companyLogo: string | undefined, d: any) => {
		return (
			<>
				<div className={classes.speaker}>
					<div style={{ display: "flex", flexWrap: "wrap" }}>
						<img
							src={s.speakerImage}
							id="image"
							alt="speakerImg"
							style={{ objectFit: "scale-down" }}
						/>
						<div style={{ marginTop: "0.5rem" }}>
							<Typography id="subtitle">{s.name}</Typography>
							<Typography style={{ maxWidth: 250 }} id="subtitle">
								{s.role}
							</Typography>
						</div>
						{d.speaker.length > 1 ? (
							<div className={classes.speakerValue}>
								<Typography
									style={{ marginLeft: 6, marginTop: 5 }}
								>
									+{d.speaker.length - 1}
								</Typography>
							</div>
						) : (
							<></>
						)}
					</div>
					{companyLogo !== undefined && companyLogo !== "N/A" ? (
						<img
							style={{
								marginTop: "0.5rem",
								maxHeight: "2.5rem",
								maxWidth: "10rem",
								objectFit: "contain",
							}}
							src={companyLogo}
							alt="companyLogo"
						/>
					) : null}
				</div>
			</>
		);
	};

	const Closing = (time: string, duration: string, text: string) => {
		return (
			<div className={classes.block}>
				<div className={classes.time}>
					{getLocale(time).time}
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
						width: "90%",
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

	const handleClose = () => {
		setModalStatus({
			modalState: false,
			speakerData: "",
			sessionData: "",
		});
	};
	const handleKeynoteModalClose = () => {
		setKeynoteModal({
			modalState: false,
			speakerData: "",
			sessionData: "",
		});
	};
	const Keynote = (keynote: any) => {
		return (
			<div
				onClick={() => {
					setKeynoteModal({
						modalState: true,
						speakerData: keynote,
						sessionData: "",
					});
				}}
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-between",
					padding: "2rem 2rem",
					background:
						"linear-gradient(268.48deg, #2979E4 2.61%, #134B95 100%)",
					width: "100%",
					cursor: "pointer",
				}}
			>
				<h1 style={{ fontSize: "2rem" }}>{keynote.sessionName}</h1>
				<div className={classes.keynoteLeftDetail}>
					{keynote.speaker?.map((s) => (
						<>
							<img
								src={s.speakerImage}
								id="image"
								alt="speakerImg"
								style={{
									height: "7rem",
									width: "7rem",
								}}
							/>
							<div
								style={{
									width: "100%",
									height: "fit-content",
									marginTop: "0.5rem",
									marginLeft: "1rem",
								}}
							>
								<div>
									<Typography
										style={{
											fontSize: "1rem",
											fontWeight: "bold",
										}}
									>
										{s.name}
									</Typography>
									<Typography
										style={{
											fontSize: "0.8rem",
										}}
									>
										{s.role}
									</Typography>
								</div>
								{s.name.includes("Uma") ? (
									<img
										src={s.companyLogo}
										style={{
											width: "6rem",
											objectFit: "contain",
											margin: "0.5rem 0",
										}}
										alt="company logo"
									/>
								) : (
									<img
										src={s.companyLogo}
										style={{
											width: "3rem",
											objectFit: "contain",
											margin: "0.5rem 0",
										}}
										alt="company logo"
									/>
								)}
							</div>
						</>
					))}
				</div>
			</div>
		);
	};

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Chaos Carnival 2021 Agenda</title>
				<meta
					name="keywords"
					content="chaos carnival 2021, chaos carnival agenda, chaos carnival speakers, adrian cockcroft, chaos engineering speakers, chaos engineering talks, chaos carnival 2021, chaos engineering for applications, evolution of chaos engineering, principles of chaos engineering, what is chaos engineering"
				/>
				<link rel="canonical" href="https://chaoscarvival.io/agenda" />
			</Helmet>
			<div className="scrollbar scrollbar-primary">
				<div className={classes.rootContainer}>
					<MainHeader />
					{/* Agenda Page Content */}
					<div className={classes.root}>
						{/* Header */}
						<h1 className={classes.title}>Agenda</h1>
						<Typography className={classes.note}>
							Note: All times shown below are as per your local
							timezone
						</Typography>
						{/* Day 1 Agenda Table */}

						<div className={classes.header}>
							<Typography
								variant="h4"
								style={{
									marginLeft: "10%",
									paddingTop: "1rem",
								}}
							>
								{day1Date.format("dddd, MMM D")}
							</Typography>
							<Typography className={classes.duration}>
								{day1StartTime} &#8211; {day1EndTime} {timeZone}
							</Typography>
						</div>

						{/* Agenda Table */}
						<div className={classes.details}>
							{day1.map((d, i) => {
								return (
									<>
										{d.content === "break" ? (
											<Break
												title={"BOOT CAMP 1 AWS-KAFKA"}
											/>
										) : (
											<div className={classes.block}>
												<div className={classes.time}>
													{
														getLocale(
															d.startDateTime !==
																undefined
																? d.startDateTime
																: ""
														).time
													}
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
													<span
														style={{
															width: "100%",
															marginLeft: "1rem", //Hacks
														}}
													>
														{Keynote(d)}
														<div
															style={{
																textAlign:
																	"center",
															}}
														>
															<h1>
																Day 1 Sessions
															</h1>
														</div>
														<Hidden smDown>
															<div
																style={{
																	display:
																		"flex",
																	textAlign:
																		"center",
																}}
															>
																<div
																	style={{
																		background:
																			"linear-gradient(278.93deg, #0043F0 10.62%, #0043F0 10.63%, #0035BD 86.42%)",
																		width:
																			"50%",
																		padding:
																			"1rem 0",
																	}}
																>
																	<h2>
																		Track 1
																	</h2>
																</div>
																<div
																	style={{
																		background:
																			"linear-gradient(213.54deg, #00B399 4.68%, #004D42 100%)",
																		width:
																			"50%",
																		padding:
																			"1rem 0",
																	}}
																>
																	<h2>
																		Track 2
																	</h2>
																</div>
															</div>
														</Hidden>
													</span>
												) : (
													// For Regular speakers
													<div
														className={
															classes.events
														}
													>
														<div
															className={
																classes.speaker1details
															}
															onClick={() => {
																return d
																	.speaker1
																	?.sessionName ===
																	""
																	? null
																	: setModalStatus(
																			{
																				modalState: true,
																				speakerData:
																					d.speaker1,
																				sessionData: d,
																			}
																	  );
															}}
														>
															<div>
																<Typography
																	style={{
																		fontWeight:
																			"bold",
																		fontSize: 18,
																		paddingTop: 10,
																	}}
																>
																	{
																		d
																			.speaker1
																			?.sessionName
																	}
																</Typography>

																{/* Tags */}

																<div
																	className={
																		classes.tagsField
																	}
																>
																	<Tags
																		tags={
																			d
																				.speaker1
																				?.tags
																		}
																	/>
																</div>
															</div>

															<>
																{Speaker(
																	d.speaker1
																		?.speaker[0],
																	d.speaker1
																		?.speaker[0]
																		.companyLogo,
																	d.speaker1
																)}
															</>
														</div>

														<div
															className={
																classes.speaker2details
															}
															onClick={() => {
																setModalStatus({
																	modalState: true,
																	speakerData:
																		d.speaker2,
																	sessionData: d,
																});
															}}
														>
															<div>
																<Typography
																	style={{
																		fontWeight:
																			"bold",
																		fontSize: 18,
																		paddingTop: 10,
																	}}
																>
																	{
																		d
																			.speaker2
																			?.sessionName
																	}
																</Typography>

																{/* Tags */}
																<div
																	className={
																		classes.tagsField
																	}
																>
																	<Tags
																		tags={
																			d
																				.speaker2
																				?.tags
																		}
																	/>
																</div>
															</div>

															<>
																{Speaker(
																	d.speaker2
																		?.speaker[0],
																	d.speaker2
																		?.speaker[0]
																		.companyLogo,
																	d.speaker2
																)}
															</>
														</div>
													</div>
												)}
											</div>
										)}
									</>
								);
							})}
							{Closing(
								"10 Feb 2021 15:45:00 -0800",
								"(10min)",
								"Day 1 Closing Remarks"
							)}
						</div>

						<br />
						<br />
						{/* Day 2 */}
						<div className={classes.header}>
							<Typography
								variant="h4"
								style={{
									marginLeft: "10%",
									paddingTop: "1rem",
								}}
							>
								{day2Date.format("dddd, MMM D")}
							</Typography>
							<Typography className={classes.duration}>
								{day2StartTime} &#8211; {day2EndTime} {timeZone}
							</Typography>
						</div>

						{/* Day 2 Table */}
						<div className={classes.details}>
							{day2.map((d, i) => {
								return (
									<>
										{d.content === "break" ? (
											<Break
												title={
													"BOOT CAMP 1 AKS-PERCONA"
												}
											/>
										) : (
											<div className={classes.block}>
												<div className={classes.time}>
													{
														getLocale(
															d.startDateTime !==
																undefined
																? d.startDateTime
																: ""
														).time
													}
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
													<span
														style={{
															width: "100%",
															marginLeft: "1rem", //Hacks
														}}
													>
														{Keynote(d)}
														<div
															style={{
																textAlign:
																	"center",
															}}
														>
															<h1>
																Day 2 Sessions
															</h1>
														</div>
														<Hidden smDown>
															<div
																style={{
																	display:
																		"flex",
																	textAlign:
																		"center",
																}}
															>
																<div
																	style={{
																		background:
																			"linear-gradient(278.93deg, #0043F0 10.62%, #0043F0 10.63%, #0035BD 86.42%)",
																		width:
																			"50%",
																		padding:
																			"1rem 0",
																	}}
																>
																	<h2>
																		Track 1
																	</h2>
																</div>
																<div
																	style={{
																		background:
																			"linear-gradient(213.54deg, #00B399 4.68%, #004D42 100%)",
																		width:
																			"50%",
																		padding:
																			"1rem 0",
																	}}
																>
																	<h2>
																		Track 2
																	</h2>
																</div>
															</div>
														</Hidden>
													</span>
												) : (
													// For Regular speakers
													<div
														className={
															classes.events
														}
													>
														<div
															className={
																classes.speaker1details
															}
															onClick={() => {
																return d
																	.speaker1
																	?.sessionName ===
																	""
																	? null
																	: setModalStatus(
																			{
																				modalState: true,
																				speakerData:
																					d.speaker1,

																				sessionData: d,
																			}
																	  );
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
																<Tags
																	tags={
																		d
																			.speaker1
																			?.tags
																	}
																/>
															</div>

															<>
																{Speaker(
																	d.speaker1
																		?.speaker[0],
																	d.speaker1
																		?.speaker[0]
																		.companyLogo,
																	d.speaker1
																)}
															</>
														</div>
														{d.speaker2?.id ===
														31 ? (
															<div
																className={
																	classes.speaker2details
																}
															></div>
														) : (
															<div
																className={
																	classes.speaker2details
																}
																onClick={() => {
																	setModalStatus(
																		{
																			modalState: true,
																			speakerData:
																				d.speaker2,

																			sessionData: d,
																		}
																	);
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
																		d
																			.speaker2
																			?.sessionName
																	}
																</Typography>

																{/* Tags */}
																<div
																	className={
																		classes.tagsField
																	}
																>
																	<Tags
																		tags={
																			d
																				.speaker2
																				?.tags
																		}
																	/>
																</div>

																<>
																	{Speaker(
																		d
																			.speaker2
																			?.speaker[0],
																		d
																			.speaker2
																			?.speaker[0]
																			.companyLogo,
																		d.speaker2
																	)}
																</>
															</div>
														)}
													</div>
												)}
											</div>
										)}
									</>
								);
							})}
							{Closing(
								"11 Feb 2021 16:30:00 -0800",
								"(10min)",
								"Day 2 Closing Remarks"
							)}
						</div>
						<KeynoteModal
							modalState={keynoteModal.modalState}
							handleClose={handleKeynoteModalClose}
							speaker={keynoteModal.speakerData}
						/>
						<SpeakerModal
							modalState={modalStatus.modalState}
							handleClose={handleClose}
							speaker={modalStatus.speakerData}
							session={modalStatus.sessionData}
						/>
					</div>

					<Sponsors />
					<JoinCarnival />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default AgendaPage;
