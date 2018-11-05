import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
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
        <Table cellComponent={Cell} />
        <TableHeaderRow />
      </Grid>
    </div>);


UsersGrid.propTypes = {
  rows: PropTypes.any,
};

export default UsersGrid;
