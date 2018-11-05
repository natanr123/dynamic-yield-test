import React from 'react';
import PropTypes from 'prop-types';


import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';

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
      <Table />
      <TableHeaderRow />
    </Grid>);
};

UsersGrid.propTypes = {
  rows: PropTypes.any,
};

export default UsersGrid;
