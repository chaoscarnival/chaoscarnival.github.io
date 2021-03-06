import { TableFooter, Typography } from "@material-ui/core";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import { TableData } from "../TableContent/TableData";
import { useStyles } from "./styles";

const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		root: {
			borderBottom: "none",
		},
		head: {
			fontSize: "26px",
			color: theme.palette.common.white,
		},
		body: {
			color: theme.palette.common.white,
			borderRadius: 4,
			fontSize: 18,
		},
		footer: {
			fontSize: "20px",
			color: theme.palette.common.white,
		},
	})
)(TableCell);

const textFormatter = (text: string) => {
	const value = text.split(",");
	const val = value[0];
	const valText = value[1];
	return (
		<div>
			{val === "Yes" ? (
				<img
					src="/icons/tick.svg"
					alt="Yes"
					style={{ width: 26, height: 26 }}
				/>
			) : val === "No" ? (
				<img
					src="/icons/cross.svg"
					alt="No"
					style={{ width: 26, height: 26 }}
				/>
			) : (
				<Typography>{val}</Typography>
			)}
			{valText !== "" || valText !== undefined ? (
				<Typography>{valText}</Typography>
			) : (
				<Typography>""</Typography>
			)}
		</div>
	);
};

export default function CustomizedTables() {
	const classes = useStyles();

	return (
		<TableContainer>
			<Table className={classes.table} aria-label="customized table">
				<TableHead
					style={{
						background:
							"linear-gradient(270.8deg, #C94CA8 8.38%, #2C84F9 96.25%)",
					}}
				>
					<TableRow>
						<StyledTableCell
							style={{
								borderTopLeftRadius: 10,
								borderBottomLeftRadius: 10,
								paddingLeft: 20,
							}}
						>
							Sponsorship details
						</StyledTableCell>
						<StyledTableCell align="center">
							Diamond
						</StyledTableCell>
						<StyledTableCell align="center">
							Platinum
						</StyledTableCell>
						<StyledTableCell align="center">Gold</StyledTableCell>
						<StyledTableCell
							style={{
								borderTopRightRadius: 10,
								borderBottomRightRadius: 10,
							}}
							align="center"
						>
							Silver
						</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{TableData.map((row) => (
						<TableRow hover key={row.id}>
							<StyledTableCell component="th" scope="row">
								<Typography
									style={{
										maxWidth: 360,
										fontSize: 18,
										paddingLeft: 10,
									}}
								>
									{row.detail}
								</Typography>
							</StyledTableCell>
							<StyledTableCell align="center">
								{textFormatter(row.diamond)}
							</StyledTableCell>
							<StyledTableCell align="center">
								{textFormatter(row.platinum)}
							</StyledTableCell>
							<StyledTableCell align="center">
								{textFormatter(row.gold)}
							</StyledTableCell>
							<StyledTableCell align="center">
								{textFormatter(row.silver)}
							</StyledTableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter
					style={{
						marginTop: 10,
						background:
							"linear-gradient(270.8deg, #C94CA8 8.38%, #2C84F9 96.25%)",
					}}
				>
					<TableRow>
						<StyledTableCell
							style={{
								borderTopLeftRadius: 10,
								borderBottomLeftRadius: 10,
							}}
						>
							Price (ex-VAT)
						</StyledTableCell>
						<StyledTableCell align="center">
							Talk to us
						</StyledTableCell>
						<StyledTableCell align="center">$4,000</StyledTableCell>
						<StyledTableCell align="center">$2,000</StyledTableCell>
						<StyledTableCell
							style={{
								borderTopRightRadius: 10,
								borderBottomRightRadius: 10,
							}}
							align="center"
						>
							$1,000
						</StyledTableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	);
}
