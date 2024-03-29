/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Formik, Form, Field } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UsersGrid from 'components/UsersGrid/index';
import { Card } from 'reactstrap';


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { buildDispatch, buildStateProps } from 'utils/reduxHelper';

import * as pageSaga from './saga';
import * as actions from './actions';
import reducer from './reducer';


/* eslint-disable react/prefer-stateless-function */
export class Page extends React.PureComponent {
  static key = 'users';
  componentDidMount() {

  }

  render() {
    return (
      <article>
        <Helmet>
          <title>FlightsPage</title>
          <meta
            name="description"
            content="Users Page"
          />
        </Helmet>
        <Card>
          <h1>Users List</h1>

          <Formik
            onSubmit={(values) => { this.props.loadUsers(values.username); }}
            initialValues={{ username: 'natan' }}
          >
            {({ values }) => (
              <Form>
                <span>Enter the user name:</span>
                <br />
                <Field
                  type={'text'}
                  name={'username'}
                  style={{ width: '300px', height: '30px', border: 'solid' }}
                />
                <button type="submit" >
                  Submit
                </button>
                <br />
              </Form>
            )}
          </Formik>
          {this.props.users ?
            <UsersGrid rows={this.props.users} /> : ''
          }
          {this.props.loading ?
            <h3>Loading Please Wait ...</h3> : ''
          }
        </Card>


      </article>
    );
  }
}

Page.propTypes = {
  loadUsers: PropTypes.func,
  users: PropTypes.any,
  loading: PropTypes.any,
};

export function mapDispatchToProps(dispatch) {
  return buildDispatch(actions, Page.propTypes, dispatch);
}

const mapStateToProps = (state) => {
  return buildStateProps(Page.key, Page.propTypes, state);
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: Page.key, reducer });
const withSaga = injectSaga({ key: Page.key, saga: pageSaga.startWatcher });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Page);
