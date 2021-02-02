import React, { useState } from "react";
import KeynoteModal from "../../pages/AgendaPage/KeynoteModal";
import { CardProps } from "./model";
import { useStyles } from "./styles";

interface PopOverModal {
	modalState: boolean;
	speakerData: any;
	sessionData: any;
}

function CardContent(props: CardProps) {
	const { id, name, title, urlToIcon, companyIcon, agenda } = props;

	const classes = useStyles();

	const [keynoteModal, setKeynoteModal] = useState<PopOverModal>({
		modalState: false,
		speakerData: "",
		sessionData: "",
	});

	const handleKeynoteModalClose = () => {
		setKeynoteModal({
			modalState: false,
			speakerData: "",
			sessionData: "",
		});
	};

	const FilterDataAndOpenModal = (speakerName: string) => {
		const speakerInformation = (agenda ?? []).filter((session) => {
			const selectedSpeaker: any[] = (session.speaker ?? []).filter(
				(identity) => {
					return identity.name === speakerName;
				}
			);
			return selectedSpeaker.length > 0;
		});
		if (speakerInformation.length > 0 && !keynoteModal.modalState) {
			setKeynoteModal({
				modalState: true,
				speakerData: speakerInformation[0],
				sessionData: "",
			});
		}
	};

	return (
		<div
			className={
				id === 0
					? classes.cardContent
					: `${classes.cardContent} ${classes.topMargin}`
			}
			onClick={() => {
				FilterDataAndOpenModal(name ?? "");
			}}
		>
			<div>
				<img
					src={urlToIcon}
					className={classes.imgMedia}
					alt="Speaker"
				/>
			</div>
			<div className={classes.mainTitle}>
				<p className={classes.speakerName}>{name}</p>
				{name !== "To be\n announced" ? (
					<p
						style={{ whiteSpace: "pre-line" }}
						className={classes.speakerTitle}
					>
						{title}
					</p>
				) : (
					<p />
				)}
				{name !== "To be\n announced" ? (
					<p className={classes.speakerTitle}>
						<img
							src={companyIcon}
							className={classes.imgIcon}
							alt="Company"
						/>
					</p>
				) : (
					<p />
				)}
			</div>
			<KeynoteModal
				modalState={keynoteModal.modalState}
				handleClose={handleKeynoteModalClose}
				speaker={keynoteModal.speakerData}
			/>
		</div>
	);
}
export default CardContent;
