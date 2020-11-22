import React from "react";
import LazyLoad from 'react-lazy-load';
import { CardProps } from "./model";
import { useStyles } from "./styles";

function CardContent(props: CardProps) {
	const {
		companyIcon,
	} = props;

	const classes = useStyles();

	return (
		<div className={classes.cardContent}>
			<LazyLoad offsetTop={100}>
				<img
					src={companyIcon}
					className={classes.imgMedia}
					alt="Speaker image"
				/>
			</LazyLoad>
	</div>
	);
}
export default CardContent;
