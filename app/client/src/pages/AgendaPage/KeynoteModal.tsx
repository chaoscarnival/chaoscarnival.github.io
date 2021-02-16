import { Button, IconButton, Modal, Typography } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import React from "react";
import { getLocale } from "../../utils/getLocale";
import { useStyles } from "./styles";
import Tags from "./Tags";

interface KeynoteModalProps {
	handleClose: () => void;
	speaker: any;
	modalState: boolean;
}

const KeynoteModal: React.FC<KeynoteModalProps> = ({
	handleClose,
	speaker,
	modalState,
}) => {
	const classes = useStyles();
	const { dateString, time: startTime, timeZone } = getLocale(
		speaker.startDateTime
	);
	const { time: endTime } = getLocale(speaker.endDateTime);
	const twitterURL = `https://twitter.com/intent/tweet?text=Watch this session - ${speaker.sessionName} live at ChaosCarnival.io &hashtags=ChaosCarnival2021`;

	return (
		<Modal open={modalState} onClose={handleClose}>
			<div className={classes.modal}>
				<div style={{ width: "100%" }}>
					<Button
						onClick={handleClose}
						className={classes.modalCloseBtn}
					>
						<ClearIcon style={{ color: "#777777", marginTop: 5 }} />
					</Button>
				</div>
				<div className={classes.modalContent}>
					<div className={classes.speakerDiv}>
						<img
							src={speaker && speaker.speaker[0].modalLogo}
							alt="Speakers"
							style={{
								height: "200px",
								width: "172px",
								borderRadius: 12,
							}}
						/>
						<div className={classes.speakerData}>
							<Typography className={classes.modalTitle}>
								{speaker && speaker.speaker[0].name}
							</Typography>
							<Typography className={classes.modalRole}>
								{speaker && speaker.speaker[0].role}
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
								<IconButton
									disabled={
										(speaker &&
											speaker.speaker[0]
												.linkedInProfileLink === "") ||
										(speaker &&
											speaker.speaker[0]
												.linkedInProfileLink === "N/A")
									}
									onClick={() => {
										window.open(
											speaker &&
												speaker.speaker[0]
													.linkedInProfileLink,
											"_blank"
										);
									}}
								>
									<img
										src="./icons/speaker-linkedin.svg"
										alt="Linkedin"
									/>
								</IconButton>
								<IconButton
									disabled={
										(speaker &&
											speaker.speaker[0]
												.twitterProfileLink === "") ||
										(speaker &&
											speaker.speaker[0]
												.twitterProfileLink === "N/A")
									}
									onClick={() => {
										window.open(
											speaker &&
												speaker.speaker[0]
													.twitterProfileLink,
											"_blank"
										);
									}}
								>
									<img
										src="./icons/speaker-twitter.svg"
										alt="Twitter"
									/>
								</IconButton>
							</div>
						</div>
					</div>
					<div className={classes.sessionDetails}>
						<Typography className={classes.modalSessionName}>
							{speaker.sessionName}
						</Typography>
						<Typography style={{ color: "#FFFFFF", opacity: 0.8 }}>
							{dateString} {startTime} - {endTime} ({timeZone})
						</Typography>
						<Typography className={classes.modalDescription}>
							{speaker?.description !== ""
								? speaker?.description
								: `A talk on cloud native Chaos Engineering.`}
						</Typography>
						<Tags tags={speaker?.tags} />
						<div style={{ display: "flex" }}>
							<Typography
								style={{ fontSize: 14, color: "white" }}
							>
								Share the session on{" "}
							</Typography>
							<img
								src="./icons/twitter-blue.svg"
								style={{ marginTop: -5, marginLeft: 2 }}
								alt="twitter-blue"
							/>
							<a
								href={twitterURL}
								style={{
									fontSize: 14,
									color: "#488FDF",
									cursor: "pointer",
									textDecoration: "none",
								}}
								target="_"
							>
								{" "}
								#chaoscarnival2021
							</a>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default KeynoteModal;
