import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function UserTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Instrument</TableCell>
            <TableCell>Bid</TableCell>
            <TableCell>Ask</TableCell>
            <TableCell align="right">Last updated time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(data).map((instrument) => {
            const row = data[instrument];
            return (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.instrument}</TableCell>
                <TableCell>{row.bid}</TableCell>
                <TableCell>{row.ask}</TableCell>
                <TableCell align="right">{row.timestamp}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
