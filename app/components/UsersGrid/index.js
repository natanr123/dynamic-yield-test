import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
import './style.scss';

const Cell = (props) => {
  const { column } = props;
  if (column.name === 'avatar_url') {
    console.log('this.props.values: ', props.value);
    return (
      <Table.Cell {...props} >
        <image src={props.value} />
      </Table.Cell>);
  }
  return <Table.Cell {...props} />;
};


Cell.propTypes = {
  column: PropTypes.any,
  value: PropTypes.any,
};


const UsersGrid = ({ rows }) => {
  return (
    <Grid
      rows={rows}
      columns={[
        {
          name: 'id',
          title: 'ID',
        },
        {
          name: 'login',
          title: 'Name',
        },
        {
          name: 'avatar_url',
          title: 'Image',
        },
        {
          name: 'repos',
          title: 'Repos',
        },
      ]}
    >
      <Table cellComponent={Cell} />
      <TableHeaderRow />
    </Grid>);
};

UsersGrid.propTypes = {
  rows: PropTypes.any,
};

export default UsersGrid;
