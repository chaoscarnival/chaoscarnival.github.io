import { Typography } from "@material-ui/core";
import * as React from "react";
import { useState } from "react";
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
	const Speaker = (s: any, companyLogo: string | undefined, d: any) => {
		return (
			<>
				{d.id === 13 || d.id === 28 ? (
					<></>
				) : (
					<div className={classes.speaker}>
						<div style={{ display: "flex" }}>
							<img
								src={s.speakerImage}
								id="image"
								alt="speakerImg"
								style={{ objectFit: "scale-down" }}
							/>
							<div style={{ marginTop: "0.5rem" }}>
								<Typography id="subtitle">{s.name}</Typography>
								<Typography id="subtitle">{s.role}</Typography>
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
			<>
				<div
					onClick={() => {
						setKeynoteModal({
							modalState: true,
							speakerData: keynote,
							sessionData: "",
						});
					}}
					className={classes.keynoteLeftDetail}
				>
					<h1>{keynote.sessionName}</h1>
					{keynote.speaker?.map((s) => (
						<>{Speaker(s, undefined, keynote)}</>
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
										<Break
											title={"BOOT CAMP 1 AWS-KAFKA"}
										/>
									) : (
										<div className={classes.block}>
											<div className={classes.time}>
												{
													getLocale(
														d.startDateTime !=
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
														onClick={() => {
															return d.speaker1
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
																	d.speaker1
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

													<div
														className={
															classes.speaker2details
														}
														style={{
															background: `${d.speaker2?.background}`,
														}}
														onClick={() => {
															setModalStatus({
																modalState: true,
																speakerData:
																	d.speaker2,
																sessionData: d,
															});
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
															<Tags
																tags={
																	d.speaker2
																		?.tags
																}
															/>
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
												</>
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
										<Break
											title={"BOOT CAMP 1 AKS-PERCONA"}
										/>
									) : (
										<div className={classes.block}>
											<div className={classes.time}>
												{
													getLocale(
														d.startDateTime !=
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
														onClick={() => {
															return d.speaker1
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
																	d.speaker1
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

													<div
														className={
															classes.speaker2details
														}
														style={{
															background: `${d.speaker2?.background}`,
														}}
														onClick={() => {
															setModalStatus({
																modalState: true,
																speakerData:
																	d.speaker2,

																sessionData: d,
															});
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
															<Tags
																tags={
																	d.speaker2
																		?.tags
																}
															/>
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
												</>
											)}
										</div>
									)}
								</>
							);
						})}
						{Closing(
							"11 Feb 2021 15:45:00 -0800",
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
	);
};

export default AgendaPage;
