import React from "react";
import { CardProps } from "./model";
import { useStyles } from "./styles";
import LazyLoad from 'react-lazy-load';

function CardContent(props: CardProps) {
	const {
		// id,
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
						<LazyLoad offsetTop={100}>
							<img
								src={urlToIcon}
								className={classes.imgMedia}
								alt="Speaker image"
							/>
						</LazyLoad>
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
