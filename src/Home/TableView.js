import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
    paddingTop: '5px',
  },
  table: {
    minWidth: 650,
  },
  textWhite: {
      color: 'white',
  },
  tableHead: {
    backgroundColor: '#3f51b5',
    fontWeight: 'bold'
  },
});

function createData(name, rotationPeriod, diameter, gravity, terrain) {
  return { name, rotationPeriod, diameter, gravity, terrain };
}

const rows = [];

export default function TableView(props) {
  const classes = useStyles(); 
  const { searchResult} = props;
  console.log(searchResult);

  searchResult && searchResult.map((data, index) => {
    rows.push(createData(data.name, data.rotation_period, data.diameter, data.gravity, data.terrain));
  });

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tableHead}>
            <TableCell className={classes.textWhite}>Name</TableCell>
            <TableCell className={classes.textWhite}>Rotation Period</TableCell>
            <TableCell className={classes.textWhite}>Diameter</TableCell>
            <TableCell className={classes.textWhite}>Gravity</TableCell>
            <TableCell className={classes.textWhite}>Terrain</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.rotationPeriod}</TableCell>
              <TableCell >{row.diameter}</TableCell>
              <TableCell >{row.gravity}</TableCell>
              <TableCell >{row.terrain}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}