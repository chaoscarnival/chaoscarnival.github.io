import { Typography } from "@material-ui/core";

import * as React from "react";
import { useState } from "react";
import "../../scrollbar.css";
import Break from "./Break";
import day1 from "./day1";
import day2 from "./day2";
import { useStyles } from "./styles";
import MainHeader from "../../components/Header";
import JoinCarnival from "../../components/JoinCarnival";
import Sponsors from "../../components/Sponsors";
import Footer from "../../components/Footer";
import Tags from "./Tags";
import SpeakerModal from "./SpeakerModal";
import KeynoteModal from "./KeynoteModal";

interface PopOverModal {
	modalState: boolean;
	speakerData: any;

	sessionTime: string | undefined;
}

const AgendaPage: React.FC = () => {
	const classes = useStyles();
	const [modalStatus, setModalStatus] = useState<PopOverModal>({
		modalState: false,
		speakerData: "",
		sessionTime: "",
	});
	const [keynoteModal, setKeynoteModal] = useState<PopOverModal>({
		modalState: false,
		speakerData: "",
		sessionTime: "",
	});
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
					<div className={classes.speaker}>
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

	const handleClose = () => {
		setModalStatus({
			modalState: false,
			speakerData: "",
			sessionTime: "",
		});
	};
	const handleKeynoteModalClose = () => {
		setKeynoteModal({
			modalState: false,
			speakerData: "",
			sessionTime: "",
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
							sessionTime: keynote.time,
						});
					}}
					className={classes.keynoteLeftDetail}
				>
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
		<>
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
													onClick={() => {
														return d.speaker1
															?.sessionName === ""
															? null
															: setModalStatus({
																	modalState: true,
																	speakerData:
																		d.speaker1,

																	sessionTime:
																		d.time,
															  });
													}}
												>
													<Typography
														style={{
															fontWeight: "bold",
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
																d.speaker1?.tags
															}
														/>
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
													onClick={() => {
														setModalStatus({
															modalState: true,
															speakerData:
																d.speaker2,
															sessionTime: d.time,
														});
													}}
												>
													<Typography
														style={{
															fontWeight: "bold",
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
																d.speaker2?.tags
															}
														/>
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
													onClick={() => {
														return d.speaker1
															?.sessionName === ""
															? null
															: setModalStatus({
																	modalState: true,
																	speakerData:
																		d.speaker1,

																	sessionTime:
																		d.time,
															  });
													}}
												>
													<Typography
														style={{
															fontWeight: "bold",
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
																d.speaker1?.tags
															}
														/>
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
													onClick={() => {
														setModalStatus({
															modalState: true,
															speakerData:
																d.speaker2,

															sessionTime: d.time,
														});
													}}
												>
													<Typography
														style={{
															fontWeight: "bold",
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
																d.speaker2?.tags
															}
														/>
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
				<KeynoteModal
					modalState={keynoteModal.modalState}
					handleClose={handleKeynoteModalClose}
					speaker={keynoteModal.speakerData}
				/>
				<SpeakerModal
					modalState={modalStatus.modalState}
					handleClose={handleClose}
					speaker={modalStatus.speakerData}
				/>
			</div>

			<Sponsors />

			<JoinCarnival />

			{/* Footer */}
			<Footer />
		</>
	);
};

export default AgendaPage;
