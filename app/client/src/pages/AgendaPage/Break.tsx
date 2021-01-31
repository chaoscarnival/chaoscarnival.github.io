import React from "react";
import { useStyles } from "./styles";

const Break: React.FC = () => {
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
					11:30 AM
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
					12:15 PM
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
					BOOT CAMP 1 AWS-KAFKA
					<br />
					(12-12.45)
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
