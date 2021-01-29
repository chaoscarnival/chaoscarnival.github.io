import { Modal, Typography } from "@material-ui/core";
import * as React from "react";
import { useState } from "react";
import "../../scrollbar.css";
import data from "./data";
import { useStyles } from "./styles";

interface PopOverModal {
	modalState: boolean;
	speakerImg: string;
	speakerName: string;
	speakerRole: string;
	sessionName: string;
	sessionTime: string;
	sessionDescription: string;
	sessionTags: string[];
}

const AgendaPage: React.FC = () => {
	const classes = useStyles();
	const [modalStatus, setModalStatus] = useState<PopOverModal>({
		modalState: false,
		speakerImg: "",
		speakerName: "",
		speakerRole: "",
		sessionName: "",
		sessionTime: "",
		sessionDescription: "",
		sessionTags: [""],
	});
	const Speaker = (image: string, name: string, role: string, d: any) => {
		return (
			<div
				className={classes.speaker}
				onClick={() => {
					setModalStatus({
						modalState: true,
						speakerName: name,
						speakerRole: role,
						speakerImg: image,
						sessionName: d.sessionName,
						sessionTime: "",
						sessionDescription: d.description,
						sessionTags: d.tags,
					});
				}}
			>
				<img src={image} id="image" alt="speakerImg" />
				<div style={{ marginTop: "1rem" }}>
					<Typography id="subtitle">{name}</Typography>
					<Typography id="subtitle">{role}</Typography>
				</div>
			</div>
		);
	};
	console.log(modalStatus);
	const handleClose = () => {
		setModalStatus({
			modalState: false,
			speakerImg: "",
			speakerName: "",
			speakerRole: "",
			sessionName: "",
			sessionTime: "",
			sessionDescription: "",
			sessionTags: [""],
		});
	};
	const Keynote = (title?: string, speaker?: Array<Object>) => {
		return (
			<>
				<div className={classes.keynoteLeftDetail}>
					<h1>{title}</h1>
					{speaker?.map((s) => (
						<>
							{Speaker(
								Object.values(s)[2],
								Object.values(s)[0],
								Object.values(s)[1],
								speaker
							)}
						</>
					))}
				</div>
				<div className={classes.keynoteRightDetail}>
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
								<div className={classes.time}>
									{d.time}
									<br />
									<span
										style={{
											fontSize: "0.8rem",
											color: "rgba(255, 255, 255, 0.6)",
										}}
									>
										{d.duration}
									</span>
								</div>
								{i === 0 ? (
									// For Keynote speaker
									<>{Keynote(d.sessionName, d.speaker)}</>
								) : (
									// For Regular speakers
									<>
										<div
											className={classes.speaker1details}
											style={{
												background: `${d.speaker1?.background}`,
											}}
										>
											<h2>{d.speaker1?.sessionName}</h2>
											{/* Tags */}
											{d.speaker1?.speaker.map((s) => {
												return (
													<>
														{Speaker(
															Object.values(s)[2],
															Object.values(s)[0],
															Object.values(s)[1],
															d.speaker1
														)}
													</>
												);
											})}
										</div>

										<div
											className={classes.speaker2details}
											style={{
												background: `${d.speaker2?.background}`,
											}}
										>
											<h2>{d.speaker2?.sessionName}</h2>
											{/* Tags */}
											{d.speaker2?.speaker.map((s) => {
												return (
													<>
														{Speaker(
															Object.values(s)[2],
															Object.values(s)[0],
															Object.values(s)[1],
															d.speaker2
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
					s
				</span>
				<Modal
					open={modalStatus.modalState}
					onClose={handleClose}
					style={{
						margin: "auto",
						padding: 50,
						height: "70%",
						width: "60%",
						backgroundColor: "#161A1D",
					}}
				>
					<>
						<Typography className={classes.title}>
							{modalStatus.speakerName}
						</Typography>
						<Typography>{modalStatus.sessionName}</Typography>
						{modalStatus.sessionTags.map((a) => {
							return (
								<Typography style={{ color: "white" }}>
									{a}
								</Typography>
							);
						})}
						<Typography style={{ color: "white" }}>
							{modalStatus.sessionTime}
						</Typography>
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
