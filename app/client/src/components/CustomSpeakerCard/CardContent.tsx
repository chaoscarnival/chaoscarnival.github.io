import React, { useState } from "react";
import SpeakerModal from "../../pages/AgendaPage/SpeakerModal";
import { CardProps } from "./model";
import { useStyles } from "./styles";

interface PopOverModal {
	modalState: boolean;
	speakerData: any;
	sessionData: any;
}

function CardContent(props: CardProps) {
	const { id, name, title, urlToIcon, company, agenda } = props;

	const classes = useStyles();

	const [modalStatus, setModalStatus] = useState<PopOverModal>({
		modalState: false,
		speakerData: "",
		sessionData: "",
	});

	const handleClose = () => {
		setModalStatus({
			modalState: false,
			speakerData: "",
			sessionData: "",
		});
	};

	const FilterDataAndOpenModal = (speakerName: string) => {
		let selectedSpeaker: any[] = [];
		let selectedSession: any[] = [];
		(agenda ?? []).forEach((sessionSet) => {
			if (sessionSet && sessionSet.speaker1 && sessionSet.speaker2) {
				if (selectedSpeaker.length === 0) {
					selectedSpeaker = (
						sessionSet.speaker1.speaker ?? []
					).filter((identity) => {
						return identity.name === speakerName;
					});
					if (selectedSpeaker.length > 0) {
						let otherSelectedSpeakers: any[] = (
							sessionSet.speaker1.speaker ?? []
						).filter((identity) => {
							return identity.name !== speakerName;
						});
						selectedSession.push(sessionSet.speaker1);
						selectedSession[0].speaker = selectedSpeaker.concat(
							otherSelectedSpeakers
						);
						selectedSession[0].startDateTime =
							sessionSet.startDateTime;
						selectedSession[0].endDateTime = sessionSet.endDateTime;
					}
				}
				if (selectedSpeaker.length === 0) {
					selectedSpeaker = (
						sessionSet.speaker2.speaker ?? []
					).filter((identity) => {
						return identity.name === speakerName;
					});
					if (selectedSpeaker.length > 0) {
						let otherSelectedSpeakers: any[] = (
							sessionSet.speaker2.speaker ?? []
						).filter((identity) => {
							return identity.name !== speakerName;
						});
						selectedSession.push(sessionSet.speaker2);
						selectedSession[0].speaker = selectedSpeaker.concat(
							otherSelectedSpeakers
						);
						selectedSession[0].startDateTime =
							sessionSet.startDateTime;
						selectedSession[0].endDateTime = sessionSet.endDateTime;
					}
				}
			}
		});
		if (selectedSession.length > 0 && !modalStatus.modalState) {
			setModalStatus({
				modalState: true,
				speakerData: selectedSession[0],
				sessionData: selectedSession[0],
			});
		}
	};

	return (
		<div
			className={classes.cardContent}
			onClick={() => {
				FilterDataAndOpenModal(name ?? "");
			}}
		>
			<div>
				{urlToIcon ? (
					<div className={classes.cardMedia}>
						<img
							src={urlToIcon}
							className={classes.imgMedia}
							alt="Speaker"
						/>
					</div>
				) : (
					<div>Image</div>
				)}
				<div>
					<div className={classes.mainTitle}>
						<div
							className={
								id % 2 === 0
									? classes.speakerName
									: classes.speaker2Name
							}
						>
							{name}
						</div>
						<div className={classes.speakerTitle}>
							{title}
							<br />
							{company}
						</div>
					</div>
				</div>
			</div>
			<SpeakerModal
				modalState={modalStatus.modalState}
				handleClose={handleClose}
				speaker={modalStatus.speakerData}
				session={modalStatus.sessionData}
			/>
		</div>
	);
}
export default CardContent;
