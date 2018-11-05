/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as pageSaga from './saga';
import * as actions from './actions';
import reducer from './reducer';


/* eslint-disable react/prefer-stateless-function */
export class Page extends React.PureComponent {
  componentDidMount() {
    this.props.loadNotes();
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>FlightsPage</title>
          <meta
            name="description"
            content="ListPage"
          />
        </Helmet>
        <h1>Notes List</h1>
        <div className="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <div>
          {
            JSON.stringify(this.props.notes)
          }
        </div>
      </article>
    );
  }
}

Page.propTypes = {
  loadNotes: PropTypes.func,
  notes: PropTypes.any,
};

const buildDispatch = (props, dispatch) => {
  const keys = Object.keys(props);
  const obj = {};
  keys.forEach((key) => {
    const type = props[key];
    if (type === PropTypes.func) {
      obj[key] = () => {
        const action = actions[key];
        dispatch(action());
      };
    }
  });
  return obj;
};

const buildStateProps = (props, state) => {
  const list = state.get('list');
  const keys = Object.keys(props);
  const obj = {};
  keys.forEach((key) => {
    const type = props[key];
    if (type === PropTypes.any) {
      obj[key] = list.get(key);
    }
  });
  return obj;
};

export function mapDispatchToProps(dispatch) {
  return buildDispatch(Page.propTypes, dispatch);
}

const mapStateToProps = (state) => {
  return buildStateProps(Page.propTypes, state);
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'list', reducer });
const withSaga = injectSaga({ key: 'list', saga: pageSaga.startWatcher });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Page);
