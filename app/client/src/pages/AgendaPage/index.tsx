import { Button, Modal, Typography } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import * as React from "react";
import { useState } from "react";
import "../../scrollbar.css";
import Break from "./Break";
import data from "./data";
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

	const Speaker = (s: any, companyLogo: string | undefined, d: any) => {
		return (
			<div
				className={classes.speaker}
				onClick={() => {
					setModalStatus({
						modalState: true,
						speakerData: s,
						sessionName: d.sessionName,
						sessionTime: "",
						sessionDescription: d.description,
						sessionTags: d.tags,
					});
				}}
			>
				<div style={{ display: "flex" }}>
					<img src={s.speakerImage} id="image" alt="speakerImg" />
					<div style={{ marginTop: "0.5rem" }}>
						<Typography id="subtitle">{s.name}</Typography>
						<Typography id="subtitle">{s.role}</Typography>
					</div>
				</div>
				{companyLogo !== undefined ? (
					<img
						style={{
							marginTop: "0.5rem",
							height: "10%",
							objectFit: "contain",
						}}
						src={companyLogo}
						alt="companyLogo"
					/>
				) : null}
			</div>
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
			sessionName: "",
			sessionTime: "",
			sessionDescription: "",
			sessionTags: [""],
		});
	};
	const Keynote = (keynote: any) => {
		return (
			<>
				{console.log(keynote)}
				<div className={classes.keynoteLeftDetail}>
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
		<>
			{/* <MainHeader inHomePage={true} linksActive={true} /> */}
			{/* Agenda Page Content */}
			<div className={classes.root}>
				{/* Header */}
				<h1 className={classes.title}>Agenda</h1>
				{/* Day wise schedule */}

				<div className={classes.header}>
					<h1 style={{ marginLeft: "7%", lineHeight: "5rem" }}>
						Wednesday, Feb 10
					</h1>
				</div>

				{/* Agenda Table */}
				<div className={classes.details}>
					{data.map((d, i) => {
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
													<h2>
														{
															d.speaker1
																?.sessionName
														}
													</h2>
													{/* Tags */}
													{d.speaker1?.speaker.map(
														(s) => {
															return (
																<>
																	{Speaker(
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
													<h2>
														{
															d.speaker2
																?.sessionName
														}
													</h2>
													{/* Tags */}
													{d.speaker2?.speaker.map(
														(s) => {
															return (
																<>
																	{Speaker(
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
							<div
								style={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<img
									src={modalStatus.speakerData.modalLogo}
									alt="Speaker Image"
									style={{
										height: "220px",
										width: "192px",
										borderRadius: 5,
									}}
								/>
								<Typography className={classes.modalTitle}>
									{modalStatus.speakerData.name}
								</Typography>
								<Typography className={classes.modalRole}>
									{modalStatus.speakerData.role}
								</Typography>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									marginLeft: 40,
								}}
							>
								<Typography
									className={classes.modalSessionName}
								>
									{modalStatus.sessionName}
								</Typography>
								{modalStatus.sessionTags?.map((a) => {
									return (
										<Typography style={{ color: "white" }}>
											{a}
										</Typography>
									);
								})}
								<Typography
									style={{
										color: "white",
										width: "500px",
										fontSize: "16px",
									}}
								>
									Join the pre-show before the Google Keynote
									starts which will bring two AI Experiments
									to life: NSynth, a synthesizer that
									generates new sounds using neural networks
									and World Draw, a live interactive
									experience to draw the world together using
									the same technology behind QuickDraw and
									AutoDraw.
								</Typography>
							</div>
						</div>
					</>
				</Modal>
			</div>
			<br />
			{/* Footer */}
			{/* <Footer /> */}
		</>
	);
};

export default AgendaPage;
