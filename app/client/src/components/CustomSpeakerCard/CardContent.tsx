import React from "react";
import { CardProps } from "./model";
import { useStyles } from "./styles";

function CardContent(props: CardProps) {
	const { id, name, title, urlToIcon, company } = props;

	const classes = useStyles();

	return (
		<div className={classes.cardContent}>
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
		</div>
	);
}
export default CardContent;
