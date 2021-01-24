import React from "react";
import { CardProps } from "./model";
import { useStyles } from "./styles";

function CardContent(props: CardProps) {
	const { id, name, title, urlToIcon, companyIcon } = props;

	const classes = useStyles();

	return (
		<div
			className={
				id === 0
					? classes.cardContent
					: `${classes.cardContent} ${classes.topMargin}`
			}
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
		</div>
	);
}
export default CardContent;
