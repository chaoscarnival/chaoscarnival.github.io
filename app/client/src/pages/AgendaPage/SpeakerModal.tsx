import {
	Modal,
	Button,
	Typography,
	IconButton,
	MobileStepper,
	withStyles,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import JoinSession from "./JoinSession";
import AddCalendar from "./AddCalendar";
import Tags from "./Tags";
import ClearIcon from "@material-ui/icons/Clear";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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
	modalState: boolean;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({
	handleClose,
	speaker,
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
						<div>
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
							<Typography className={classes.modalTitle}>
								{speaker && speaker.speaker[activeStep]?.name}
							</Typography>
							<Typography className={classes.modalRole}>
								{speaker && speaker.speaker[activeStep]?.role}
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
					) : (
						<div>
							<img
								src={speaker && speaker.speaker[0].modalLogo}
								alt="Speakers"
								style={{
									height: "200px",
									width: "172px",
									borderRadius: 5,
								}}
							/>

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
					)}
					<div className={classes.sessionDetails}>
						<Typography className={classes.modalSessionName}>
							{speaker.sessionName}
						</Typography>
						<Typography style={{ color: "#FFFFFF", fontSize: 16 }}>
							{speaker.sessionTime}
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
							Join the pre-show before the Google Keynote starts
							which will bring two AI Experiments to life: NSynth,
							a synthesizer that generates new sounds using neural
							networks and World Draw, a live interactive
							experience to draw the world together using the same
							technology behind QuickDraw and AutoDraw.
						</Typography>
						<Tags tags={speaker?.tags} />

						<div className={classes.modalBtnDiv}>
							<JoinSession handleClick={() => {}} />
							<AddCalendar handleClick={() => {}} />
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
			</div>
		</Modal>
	);
};

export default SpeakerModal;
