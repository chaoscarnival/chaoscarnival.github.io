import React from "react";
import { CardProps } from "./model";
import { useStyles } from "./styles";

function CardContent(props: CardProps) {
	const {
		id,
		name,
		title,
		urlToIcon,
	} = props;

	const classes = useStyles();

	return (
		<div className={classes.cardContent}>
			<div>
				{urlToIcon ? (
					<div
						className={classes.cardMedia}
					>
						<img
							src={urlToIcon}
							className={classes.imgMedia}
							alt="chart provider logo"
						/>
					</div>
				) : (
					<div>Image</div>
				)}
				<div >
					<div
						className={classes.mainTitle}
					>
					<div
							className={name !== 'Interested in Speaking ?' ? classes.speakerName : classes.dummyName}>
							{name}
						</div>
						<div
							className={name !== 'Interested in Speaking ?' ? classes.speakerTitle : classes.dummyTitle}>
							{title}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default CardContent;
