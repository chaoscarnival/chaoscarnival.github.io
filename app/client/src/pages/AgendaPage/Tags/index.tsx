import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

interface TagsProp {
	tags: string[] | undefined;
}

const Tags: React.FC<TagsProp> = ({ tags }) => {
	const classes = useStyles();
	return (
		<>
			{tags?.map((tag) => (
				<div className={classes.tagsDiv} key={Math.random()}>
					<div
						style={{
							height: 10,
							width: 10,
							marginTop: 4.2,
							backgroundColor:
								tag === "Chaos Engineering"
									? "#10B180"
									: tag === "Observability"
									? "#3168DA"
									: "#FF0858",
							borderRadius: "50%",
							display: "inline-block",
						}}
					/>
					<Typography className={classes.tagsText}>{tag}</Typography>
				</div>
			))}
		</>
	);
};

export default Tags;
