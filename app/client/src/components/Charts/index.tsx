import React from "react";
import CustomCard from "../CustomCard";
import { useStyles } from "./styles";


export function Charts() {
	const classes = useStyles();

	return (
	{/*	<div className={classes.root}>
			{experiments &&
				experiments.map((e: any) => (
					<CustomCard
						key={e.expGroup + "-" + e.metadataName}
						id={e.metadataName}
						title={e.name}
						expGrp={e.expGroup || ""}
						urlToIcon={""}
						handleClick={() =>
							{}
						}
						handleExpGrpClick={handleSearch}
						provider={e.provider}
						totalRuns={e.totalRuns || 0}
						chaosType={e.chaosType}
						chartType={e.expGroup || ""}
					/>
				))}
		</div>
					*/}
	);
}
