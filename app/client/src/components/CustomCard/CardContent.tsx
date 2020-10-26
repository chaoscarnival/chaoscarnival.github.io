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
						<a
							className={name !== 'Interested in Speaking?' ? classes.speakerName : classes.dummyName}
							href={name !== 'Interested in Speaking?' ? "#" : "https://www.papercall.io/chaoscarnival"} target={name !== 'Interested in Speaking ?' ? "" : "_blank"} rel="noopener noreferrer">
							{name}
						</a>
						<a
							className={name !== 'Interested in Speaking?' ? classes.speakerTitle : classes.dummyTitle}
							href={name !== 'Interested in Speaking?' ? "#" : "https://www.papercall.io/chaoscarnival"} target={name !== 'Interested in Speaking ?' ? "" : "_blank"} rel="noopener noreferrer">
							{title}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default CardContent;
