import React from "react";
import { getLocale } from "../../utils/getLocale";
import { useStyles } from "./styles";

interface BreakProps {
	title: string;
}

const Break: React.FC<BreakProps> = ({ title }) => {
	const classes = useStyles();
	return (
		<span
			style={{
				width: "100%",
				display: "flex",
				minHeight: "10rem",
				margin: "3rem 0",
			}}
		>
			<div
				style={{
					width: "10.5%",
				}}
			>
				<div className={classes.breakTime}>
					{getLocale("10 Feb 2021 12:15:00 -0800").time}
					<br />
					<span
						style={{
							fontSize: "0.8rem",
							color: "rgba(255, 255, 255, 0.6)",
						}}
					>
						(45min)
					</span>
				</div>
				<div className={classes.breakTime}>
					{getLocale("10 Feb 2021 13:00:00 -0800").time}
					<br />
					<span
						style={{
							fontSize: "0.8rem",
							color: "rgba(255, 255, 255, 0.6)",
						}}
					>
						(45min)
					</span>
				</div>
			</div>
			<div
				style={{
					width: "20%",
					background: "rgba(82, 145, 202, 0.4)",
				}}
			>
				<div
					style={{
						textAlign: "center",
						height: "50%",
					}}
				>
					<h2>Sponsor Booth</h2>
				</div>
				<div
					style={{
						height: "50%",
						textAlign: "center",
					}}
				>
					<h2>Sponsor Booth</h2>
				</div>
			</div>
			<div
				style={{
					width: "30%",
					background: "rgba(100, 10, 146, 0.5)",
				}}
			>
				<h2
					style={{
						marginTop: "10%",
						marginLeft: "20%",
						textAlign: "left",
					}}
				>
					{title}
					<br />
					{getLocale("10 Feb 2021 12:30:00 -0800").time}-
					{getLocale("10 Feb 2021 13:15:00 -0800").time}
				</h2>
			</div>
			<div
				style={{
					width: "20%",
					background: "rgba(255, 255, 255, 0.2)",
					textAlign: "center",
				}}
			>
				<h2
					style={{
						marginTop: "25%",
					}}
				>
					Break / Lunch
				</h2>
			</div>
		</span>
	);
};

export default Break;
