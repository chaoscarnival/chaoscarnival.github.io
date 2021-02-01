import { Button, IconButton, Modal, Typography } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import React from "react";
import AddCalendar from "./AddCalendar";
import JoinSession from "./JoinSession";
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
					<div className={classes.sessionDetails}>
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
								whiteSpace: "pre-line",
							}}
						>
							{speaker?.description !== ""
								? speaker?.description
								: `Speaker Description.`}
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
