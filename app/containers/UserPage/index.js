/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Formik, Form, Field } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UsersGrid from 'components/UsersGrid/index';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { buildDispatch, buildStateProps } from 'utils/reduxHelper';

import * as pageSaga from './saga';
import * as actions from './actions';
import reducer from './reducer';


/* eslint-disable react/prefer-stateless-function */
export class Page extends React.PureComponent {
  static key = 'user';
  componentDidMount() {
    const { login } = this.props.match.params;
    this.props.loadUser(login);
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>FlightsPage</title>
          <meta
            name="description"
            content="User"
          />
        </Helmet>
        <h1>{`User Page: ${this.props.match.params.login}`}</h1>
        <div>
          {JSON.stringify(this.props.user)}
        </div>

      </article>
    );
  }
}

Page.propTypes = {
  loadUser: PropTypes.func,
  user: PropTypes.any,
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
