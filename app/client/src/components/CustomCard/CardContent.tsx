import React from "react";
import { CardProps } from "./model";
import { useStyles } from "./styles";

function CardContent(props: CardProps) {
	const { companyIcon } = props;

	const classes = useStyles();

	return (
		<div className={classes.cardContent}>
			<img
				src={companyIcon}
				className={classes.imgMedia}
				alt="Speaker image"
			/>
		</div>
	);
}
export default CardContent;
