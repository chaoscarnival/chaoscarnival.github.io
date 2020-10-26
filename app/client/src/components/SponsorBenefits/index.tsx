import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const SponsorBenefits = () => {
	const classes = useStyles();
	const imgLink = [
		{
			img: "/icons/speedometer.svg",
			alt: "speedometer",
			text:
				"Foster relationships and engage with the SREs, cloud-native developers, end-users, and vendors. Build connections with other industry experts, industry analysts, and thought leaders.",
		},
		{
			img: "/icons/network.svg",
			alt: "network",
			text:
				"Facilitate breakout sessions and conduct social online events during the 2-day conference to gain unparalleled networking opportunities with participants as well as other sponsors.",
		},
		{
			img: "/icons/video.svg",
			alt: "video",
			text:
				"Present demos, videos, and other resources. Grab participant attention, capture leads, and communicate directly with attendees via live chat as well as online sponsor based events/meetups.",
		},
		{
			img: "/icons/calender.svg",
			alt: "calender",
			text:
				"Build awareness among quality, regionally targeted attendees before, during, and after the event.",
		},
		{
			img: "/icons/community.svg",
			alt: "community",
			text:
				"Take advantage of a professionally-organized conference run by a neutral & nonprofit where content is curated by the community itself.",
		},
		{
			img: "/icons/cloud.svg",
			alt: "cloud",
			text:
				"Associate your brand with one of the fastest-growing cloud-native technology, community.",
		},
		{
			img: "/icons/opensource.svg",
			alt: "opensource",
			text:
				"Support and engage the ecosystem vital in driving some of the brightest upcoming open source projects and open source contributors in the industry.",
		},
	];
	return (
		<div className={classes.root}>
			<div className={classes.mainDiv}>
				<Typography className={classes.headerText}>
					Benefits of Sponsoring
				</Typography>
				<div className={classes.sponsorDiv}>
					{imgLink.map((data) => (
						<div className={classes.sponsorData}>
							<img
								src={data.img}
								alt={data.alt}
								className={classes.sponsorDataImg}
							/>
							<Typography className={classes.sponsorDataText}>
								{data.text}
							</Typography>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default SponsorBenefits;
