import { Modal, Button, Typography, IconButton } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import JoinSession from "./JoinSession";
import AddCalendar from "./AddCalendar";
import Tags from "./Tags";
import ClearIcon from "@material-ui/icons/Clear";

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
	return (
		<Modal open={modalState} onClose={handleClose}>
			<div
				style={{
					top: "50%",
					left: "50%",
					transform: `translate(-50%, -50%)`,
					outline: 0,
				}}
				className={classes.modal}
			>
				<div style={{ width: "100%" }}>
					<Button
						onClick={handleClose}
						className={classes.modalCloseBtn}
					>
						<ClearIcon style={{ color: "#777777", marginTop: 5 }} />
					</Button>
				</div>
				<div className={classes.modalContent}>
					<div>
						<img
							src={speaker && speaker.speaker[0].modalLogo}
							alt="Speakers"
							style={{
								height: "200px",
								width: "172px",
								borderRadius: 12,
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
					<div
						style={{
							marginLeft: 40,
						}}
					>
						<Typography className={classes.modalSessionName}>
							{speaker.sessionName}
						</Typography>
						<Typography style={{ color: "#FFFFFF", fontSize: 16 }}>
							{speaker.time}
						</Typography>
						<Typography
							style={{
								color: "white",
								maxWidth: "510px",
								fontSize: "16px",
								marginTop: 10,
								marginBottom: 20,
							}}
						>
							{speaker?.description !== ""
								? speaker?.description
								: `Join the pre-show before the Google Keynote starts
							which will bring two AI Experiments to life: NSynth,
							a synthesizer that generates new sounds using neural
							networks and World Draw, a live interactive
							experience to draw the world together using the same
							technology behind QuickDraw and AutoDraw.`}
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

export default KeynoteModal;