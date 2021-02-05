import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export interface CardData {
	desc: string;
	img: string;
	name: string;
	designation: string;
	logo: string;
}

interface UpNextProps {
	cardData: CardData[];
}

const UpNext: React.FC<UpNextProps> = ({ cardData }) => {
	const classes = useStyles();
	return (
		<div>
			<Typography className={classes.upNext}>Coming up next</Typography>
			<Typography className={classes.desc}>
				Watch the opening day keynote, featured sessions and daily
				highlights for a snapshot of Universe's biggest moments
			</Typography>
			<div className={classes.cardSection}>
				{cardData.map(({ desc, img, name, designation, logo }) => {
					return (
					<div className={classes.speakerCard}>
						<Typography>{desc}</Typography>
						<div className={classes.speakerSection}>
							<div className={classes.speakerDetails}>
								<img src={img} alt="speaker" />
								<div id="info">
									<Typography>{name}</Typography>
									<Typography>{designation}</Typography>
								</div>
							</div>
							<img id="Logo" src={logo} alt="company logo" />
						</div>
					</div>
					);
				})}
			</div>
		</div>
	);
};

export { UpNext };
