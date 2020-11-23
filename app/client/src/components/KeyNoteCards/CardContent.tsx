import React from "react";
import LazyLoad from 'react-lazy-load';
import { CardProps } from "./model";
import { useStyles } from "./styles";

function CardContent(props: CardProps) {
	const {
		name,
		title,
		urlToIcon,
		companyIcon,
	} = props;

	const classes = useStyles();

	return (
		<div className={classes.cardContent}>
			<div>
						<LazyLoad offsetTop={100}>
							<img
								src={urlToIcon}
								className={classes.imgMedia}
								alt="Speaker image"
							/>
					</LazyLoad>
					</div>
					<div
						className={classes.mainTitle}
					>
						<p
							className={classes.speakerName}>
							{name}
						</p>
						{name !== 'To be\n announced' ?
							(<p
								className={classes.speakerTitle}>
								{title}
					</p>) : <p />}
						{name !== 'To be\n announced' ?
							(<p
								className={classes.speakerTitle}>
								<LazyLoad offsetTop={100}>
							<img
								src={companyIcon}
								className={classes.imgIcon}
								alt="Company image"
							/>
					</LazyLoad>
							</p>) : <p />}
					</div>
				</div>
	);
}
export default CardContent;
