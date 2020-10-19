import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const imgLink = [
	{
		img: "/icons/MayaData.svg",
		alt: "MayaData",
		link: "https://mayadata.io/",
	},
	{
		img: "/icons/intuit.svg",
		alt: "intuit",
		link: "https://www.intuit.com/",
	},
	{
		img: "/icons/Okteto.svg",
		alt: "okteto",
		link: "https://okteto.com/",
	},
];

const Sponsor = () => {
	const classes = useStyles();
	return (
		<div style={{ width: "100%", backgroundColor: "#FFFFFF", padding: 60 }}>
			<div className={classes.mainDiv}>
				<div
					style={{
						width: "50%",
						marginLeft: 140,
						paddingLeft: 50,
						paddingTop: 20,
					}}
				>
					<Typography
						variant="h1"
						style={{
							color: "#000000",
							fontWeight: 700,
							fontSize: 60,
							textAlign: "left",
						}}
					>
						Our
					</Typography>
					<Typography className={classes.headerText}>
						Sponsors
					</Typography>
				</div>
				<div
					style={{
						width: "50%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div
						style={{
							width: "50%",
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							justifyContent: "space-between",
							alignItems: "left",
							marginLeft: 40,
						}}
					>
						{imgLink.map((sponsor) => (
							<a href={sponsor.link} target="_blank">
								<img
									src={sponsor.img}
									alt={sponsor.alt}
									style={{
										maxWidth: 300,
										height: 80,
										padding: 20,
									}}
								/>
							</a>
						))}
					</div>
					<Typography
						style={{
							color: "#8193B2",
							marginTop: 20,
							textAlign: "left",
							marginLeft: 60,
						}}
					>
						Interested for sponsorship , Email us at <br></br>
						<a href="mailto:sponsorship@chaoscarnival.io">
							sponsorship@chaoscarnival.io
						</a>
					</Typography>
				</div>
			</div>
		</div>
	);
};
export default Sponsor;
