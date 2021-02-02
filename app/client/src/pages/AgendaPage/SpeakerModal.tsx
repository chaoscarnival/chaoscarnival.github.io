import {
	Button,
	IconButton,
	MobileStepper,
	Modal,
	Typography,
	withStyles,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ClearIcon from "@material-ui/icons/Clear";
import React from "react";
import { getLocale } from "../../utils/getLocale";
import calenderTime from "../../utils/calenderTime";
import AddCalendar from "./AddCalendar";
import JoinSession from "./JoinSession";
import { useStyles } from "./styles";
import Tags from "./Tags";

const MobileSlider = withStyles({
	root: {
		padding: 0,
		backgroundColor: "#161A1D",
	},
	dot: {
		color: "transparent",
		backgroundColor: "transparent",
	},
})(MobileStepper);

interface SpeakerModalProps {
	handleClose: () => void;
	speaker: any;
	session: any;
	modalState: boolean;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({
	handleClose,
	speaker,
	session,
	modalState,
}) => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = speaker && speaker.speaker.length;
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
	const handleModalClose = () => {
		setActiveStep(0);
		handleClose();
	};
	const { dateString, time: startTime, timeZone } = getLocale(
		session.startDateTime
	);
	const { time: endTime } = getLocale(session.endDateTime);

	const joinUrl =
		"https://www.airmeet.com/e/cabe9140-62c8-11eb-8a3f-5f90a373e3d1";

	const twitterURL = `https://twitter.com/intent/tweet?text=Watch this session - ${speaker.sessionName} live at ChaosCarnival.io &hashtags=ChaosCarnival2021`;

	const inviteLink = calenderTime(
		session.startDateTime,
		session.endDateTime,
		speaker.sessionName,
		`${speaker.sessionName} by ${
			speaker && speaker.speaker[0].name
		} at ChaosCarnival.`
	);

	return (
		<Modal open={modalState} onClose={handleModalClose}>
			<div className={classes.modal}>
				<div style={{ width: "100%" }}>
					<Button
						onClick={handleModalClose}
						className={classes.modalCloseBtn}
					>
						<ClearIcon style={{ color: "#777777", marginTop: 5 }} />
					</Button>
				</div>
				<div className={classes.modalContent}>
					{speaker && speaker.speaker.length > 1 ? (
						<div className={classes.speakerDiv}>
							<div>
								<img
									src={
										speaker &&
										speaker.speaker[activeStep]?.modalLogo
									}
									alt="Speakers"
									style={{
										height: "200px",
										width: "172px",
										borderRadius: 5,
									}}
								/>
								<MobileSlider
									steps={maxSteps}
									variant="dots"
									position="static"
									activeStep={activeStep}
									style={{ width: "172px" }}
									nextButton={
										<IconButton
											className={classes.sliderBtnLeft}
											aria-label="next-button"
											onClick={handleNext}
											disabled={
												activeStep === maxSteps - 1
											}
										>
											<ArrowForwardIcon
												fontSize="small"
												style={{
													color: "#FFFFFF",
												}}
											/>
										</IconButton>
									}
									backButton={
										<IconButton
											aria-label="next-button"
											onClick={handleBack}
											disabled={activeStep === 0}
											className={classes.sliderBtnRight}
										>
											<ArrowBackIcon
												fontSize="small"
												style={{
													color: "#FFFFFF",
												}}
											/>
										</IconButton>
									}
								/>
							</div>
							<div className={classes.speakerData}>
								<Typography className={classes.modalTitle}>
									{speaker &&
										speaker.speaker[activeStep]?.name}
								</Typography>
								<Typography className={classes.modalRole}>
									{speaker &&
										speaker.speaker[activeStep]?.role}
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
												speaker.speaker[activeStep]
													.linkedInProfileLink) ===
												"" ||
											(speaker &&
												speaker.speaker[activeStep]
													.linkedInProfileLink) ===
												"N/A"
										}
										onClick={() => {
											window.open(
												speaker &&
													speaker.speaker[activeStep]
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
												speaker?.speaker[activeStep]
													.twitterProfileLink) ===
												"N/A" ||
											(speaker &&
												speaker?.speaker[activeStep]
													.twitterProfileLink) === ""
										}
										onClick={() => {
											window.open(
												speaker &&
													speaker.speaker[activeStep]
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
					) : (
						<div className={classes.speakerDiv}>
							<img
								src={speaker && speaker.speaker[0].modalLogo}
								alt="Speakers"
								style={{
									height: "200px",
									width: "172px",
									borderRadius: 5,
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
													.linkedInProfileLink) ===
												"" ||
											(speaker &&
												speaker.speaker[0]
													.linkedInProfileLink) ===
												"N/A"
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
												speaker?.speaker[0]
													.twitterProfileLink) ===
												"N/A" ||
											(speaker &&
												speaker?.speaker[0]
													.twitterProfileLink) === ""
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
					)}
					<div className={classes.sessionDetails}>
						<div className={classes.sessionDataDiv}>
							<Typography className={classes.modalSessionName}>
								{speaker.sessionName}
							</Typography>
							<Typography
								style={{ color: "#FFFFFF", opacity: 0.8 }}
							>
								{dateString} {startTime} - {endTime} ({timeZone}
								)
							</Typography>
							<Typography className={classes.modalDescription}>
								{speaker.description}
							</Typography>
						</div>
						<Tags tags={speaker?.tags} />

						<div className={classes.modalBtnDiv}>
							<JoinSession
								handleClick={() =>
									(window.location.href = joinUrl)
								}
							/>
							<AddCalendar
								handleClick={() => {
									window.open(inviteLink, "_blank");
								}}
							/>
						</div>
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

export default SpeakerModal;
