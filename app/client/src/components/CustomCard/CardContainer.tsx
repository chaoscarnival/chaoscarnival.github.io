import React from "react";
import { useStyles } from "./styles";
import clsx from "clsx";

function CardContainer(props: any) {
	const classes = useStyles();
	return (
		<div
			key={props.key}
			className={clsx(classes.card,
				classes.mainCard
			)}
		>
			{props.children}
		</div>
	);
}
export default CardContainer;
