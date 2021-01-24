import clsx from "clsx";
import React from "react";
import { useStyles } from "./styles";

function CardContainer(props: any) {
	const classes = useStyles();
	return (
		<div key={props.key} className={clsx(classes.card, classes.mainCard)}>
			{props.children}
		</div>
	);
}
export default CardContainer;
