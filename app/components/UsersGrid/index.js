import React from 'react';
import PropTypes from 'prop-types';
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './style.scss';

const Cell = (props) => {
  const { column } = props;
  if (column.name === 'avatar_url') {
    return (
      <Table.Cell {...props} >
        <img src={props.value} alt="Avatar" />
      </Table.Cell>);
  } else if (column.name === 'repos') {
    return <ReposCell {...props} />;
  } else if (column.name === 'login') {
    return <NameCell {...props} />;
  }
  return <Table.Cell {...props} />;
};

Cell.propTypes = {
  column: PropTypes.any,
  value: PropTypes.any,
};


class ReposCell extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 'Loading...' };
  }

  componentDidMount() {
    const { row } = this.props;

    axios.get(`https://api.github.com/users/${row.login}`)
      .then((response) => {
        this.setState({ count: response.data.public_repos });
      });
  }
  render() {
    return (
      <Table.Cell>
        <span>{this.state.count}</span>
      </Table.Cell>
    );
  }
}

ReposCell.propTypes = {
  row: PropTypes.any,
};

const NameCell = (props) => (
  <Table.Cell>
    <Link to={`/users/${props.value}`}>{props.value}</Link>
  </Table.Cell>
);

NameCell.propTypes = {
  value: PropTypes.any,
};

const UsersGrid = ({ rows }) =>
  (
    <div className={'the-grid'} >
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
        <SortingState
          defaultSorting={[{ columnName: 'id', direction: 'asc' }]}
        />
        <IntegratedSorting />
        <Table cellComponent={Cell} />
        <TableHeaderRow showSortingControls />
      </Grid>
    </div>);


UsersGrid.propTypes = {
  rows: PropTypes.any,
};

export default UsersGrid;
