import React from "react";
import {
	withStyles,
	Theme,
	createStyles,
	makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TableFooter } from "@material-ui/core";

const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		head: {
			fontSize: "26px",
			color: theme.palette.common.white,
		},
		body: {
			color: theme.palette.common.black,
			backgroundColor: "#FFFFFF",
			fontSize: 18,
		},
		footer: {
			fontSize: "20px",
			color: theme.palette.common.white,
		},
	})
)(TableCell);

function createData(
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number
) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Number available", 159, 6.0, 24, 4.0),
	createData("Sponsor logo on the live stream", 237, 9.0, 37, 4.3),
	createData(
		"5 minute sponsor pitch on the main live stream",
		262,
		16.0,
		24,
		6.0
	),
	createData("Virtual sponsor booth ", 305, 3.7, 67, 4.3),
	createData("Recognition on website (Logo and Link)", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
	table: {
		maxWidth: 1500,
	},
});

export default function CustomizedTables() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="customized table">
				<TableHead
					style={{
						background:
							"linear-gradient(270.8deg, #C94CA8 8.38%, #2C84F9 96.25%)",
					}}
				>
					<TableRow>
						<StyledTableCell>Sponsorship details</StyledTableCell>
						<StyledTableCell align="center">
							Platinum
						</StyledTableCell>
						<StyledTableCell align="center">Gold</StyledTableCell>
						<StyledTableCell align="center">Silver</StyledTableCell>
						<StyledTableCell align="center">Bronze</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody style={{}}>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<StyledTableCell component="th" scope="row">
								{row.name}
							</StyledTableCell>
							<StyledTableCell align="center">
								{row.calories}
							</StyledTableCell>
							<StyledTableCell align="center">
								{row.fat}
							</StyledTableCell>
							<StyledTableCell align="center">
								{row.carbs}
							</StyledTableCell>
							<StyledTableCell align="center">
								{row.protein}
							</StyledTableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter
					style={{
						background:
							"linear-gradient(270.8deg, #C94CA8 8.38%, #2C84F9 96.25%)",
					}}
				>
					<TableRow>
						<StyledTableCell>Price (ex-VAT)</StyledTableCell>
						<StyledTableCell align="center">$10000</StyledTableCell>
						<StyledTableCell align="center">$5000</StyledTableCell>
						<StyledTableCell align="center">$2000</StyledTableCell>
						<StyledTableCell align="center">$1000</StyledTableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	);
}
