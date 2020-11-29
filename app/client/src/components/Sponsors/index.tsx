import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const imgLink = [
	{
		img: "/icons/MayadataFoundingSponsor.svg",
		alt: "MayaData",
		link: "https://mayadata.io",
	},
	{
		img: "/icons/Elastic.svg",
		alt: "Elastic",
		link: "https://www.elastic.co",
	},
	// {
	// 	img: "/icons/intuit.png",
	// 	alt: "intuit",
	// 	link: "https://www.intuit.com/",
	// },
	// {
	// 	img: "/icons/Okteto.svg",
	// 	alt: "okteto",
	// 	link: "https://okteto.com/",
	// },
];

const Sponsor = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.mainDiv}>
				<div className={classes.sponsorDiv}>
					<Typography variant="h1" className={classes.sponsorText}>
						Our
					</Typography>
					<Typography className={classes.headerText}>
						Sponsors
					</Typography>
				</div>
				<div className={classes.sponsorImgMainDiv}>
					<div className={classes.sponsorImgDiv}>
						{imgLink.map((sponsor) => (
							<div style={{ marginRight: 0 }} key={Math.random() * 99999}>
								<a href={sponsor.link} target="_blank" rel="noopener noreferrer">
										<img
											src={sponsor.img}
											alt={sponsor.alt}
											className={classes.sponsorImg}
										/>
								</a>
							</div>
						))}
					</div>
					<Typography className={classes.footerText}>
						Interested in sponsoring?<br></br>
						Email us at <br></br>
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
