import { FC, useEffect, useState } from "react";
import { api } from "../api";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { CatFactResponseModel } from "../api/entities/catFackts";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const CatFacktsViews: FC = () => {
  const classes = useStyles();
  const [catFacktsList, setCatFacktsList] = useState<CatFactResponseModel[]>(
    []
  );

  useEffect(() => {
    (async () => {
      try {
        const response = await api.getCatFacktData();
        setCatFacktsList(response.data.data);
      } catch (error) {
        throw new Error("ooops Covid19");
      }
    })();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Interesting fackts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {catFacktsList &&
            catFacktsList.map((row: CatFactResponseModel, index: number) => (
              <TableRow key={row.fact}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{row.fact}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
