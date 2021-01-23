import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const sponsorsList = [
	{
		tier: "Diamond",
		sponsors: [
			{
				img: "/icons/MayadataFoundingSponsor.svg",
				alt: "MayaData",
				link: "https://mayadata.io",
			},
		],
	},
	{
		tier: "Platinum",
		sponsors: [
			{
				img: "/icons/Percona.svg",
				alt: "Percona",
				link: "https://www.percona.com",
			},
			{
				img: "/icons/Wipro.svg",
				alt: "Wipro",
				link: "https://www.wipro.com",
			},
			{
				img: "/icons/Epsagon.svg",
				alt: "Epsagon",
				link: "https://epsagon.com",
			},
		],
	},
	{
		tier: "Gold",
		sponsors: [
			{
				img: "/icons/CNCF.svg",
				alt: "CNCF",
				link: "https://www.cncf.io",
			},

			{
				img: "/icons/Elastic.svg",
				alt: "Elastic",
				link: "https://www.elastic.co",
			},

			{
				img: "/icons/Gremlin.svg",
				alt: "Gremlin",
				link: "https://www.gremlin.com",
			},
		],
	},
	// {
	// 	tier: "Silver",
	// 	sponsors: []
	// },
];

const Sponsor = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.mainDiv}>
				<div className={classes.sponsorDiv}>
					<Typography
						variant="h1"
						className={classes.sponsorText}
						display="inline"
					>
						Our
					</Typography>
					<Typography className={classes.headerText} display="inline">
						Sponsors
					</Typography>
				</div>
				<div className={classes.sponsorImgMainDiv}>
					{sponsorsList.map((sponsorTier) => (
						<div>
							<Typography
								className={`${classes.sponsorTierHeading} 
					${
						sponsorTier.tier === "Diamond"
							? classes.diamond
							: sponsorTier.tier === "Platinum"
							? classes.platinum
							: classes.gold
					}`}
							>
								{sponsorTier.tier}
							</Typography>
							<div
								className={classes.sponsorImgDiv}
								id={sponsorTier.tier}
								key={Math.random() * 99999}
							>
								{sponsorTier.sponsors.map((sponsor) => (
									<div
										style={{ marginRight: 0 }}
										key={Math.random() * 99999}
									>
										<a
											href={sponsor.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<img
												src={sponsor.img}
												alt={sponsor.alt}
												className={`${
													sponsorTier.tier ===
													"Diamond"
														? classes.sponsorImgDiamond
														: sponsorTier.tier ===
														  "Platinum"
														? classes.sponsorImgPlatinum
														: classes.sponsorImgGold
												}`}
											/>
										</a>
									</div>
								))}
							</div>
						</div>
					))}
					<Typography className={classes.footerText}>
						Interested in sponsoring? Email us at <br></br>
						<a
							href="mailto:sponsorship@chaoscarnival.io"
							className={classes.link}
						>
							sponsorship@chaoscarnival.io
						</a>
					</Typography>
				</div>
			</div>
		</div>
	);
};
export default Sponsor;
