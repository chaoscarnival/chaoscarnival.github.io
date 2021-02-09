import { Typography } from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import React from "react";
import { useStyles } from "./styles";

export interface Link {
	link: string;
	linkText?: string;
}

export interface COCRule {
	textHeading: string;
	textDescription: string;
	images?: string[];
	links?: Link[];
}
export interface COCInterface {
	title: string;
	text?: string;
	textArray?: COCRule[];
	links?: Link[];
}

interface COCProps {
	cocData: COCInterface[];
}

const Bootcamps: React.FC<COCProps> = ({ cocData }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{cocData.map(({ title, text, textArray, links }) => {
				return (
					<div className={classes.info}>
						<Typography variant="h4">{title}</Typography>
						<Typography>{text}</Typography>
						{links?.map((link) => {
							return (
								<div>
									<a
										href={link.link}
										className={classes.link}
										target="_"
									>
										{link.linkText}
										<LaunchIcon
											className={classes.linkIcon}
										/>
									</a>
								</div>
							);
						})}
						{textArray?.map((textArrayElement) => {
							return (
								<div>
									<Typography variant="h5">
										{textArrayElement.textHeading}
									</Typography>
									<Typography>
										{textArrayElement.textDescription}
									</Typography>
									{textArrayElement.links?.map((link) => {
										return (
											<div>
												<a
													href={link.link}
													className={classes.link}
													target="_"
												>
													{link.linkText}
													<LaunchIcon
														className={
															classes.linkIcon
														}
														style={{
															marginLeft:
																"0.5rem",
															marginTop: "1rem",
															marginBottom:
																"-0.25rem",
														}}
													/>
												</a>
											</div>
										);
									})}
									{textArrayElement.images?.map((image) => {
										return (
											<div>
												<img
													src={image}
													alt="COC"
													className={classes.image}
												/>
											</div>
										);
									})}
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Bootcamps;
