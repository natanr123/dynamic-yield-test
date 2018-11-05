/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
/* eslint-disable react/prefer-stateless-function */
export class Page extends React.PureComponent {
  componentDidMount() {
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Start Page</title>
          <meta
            name="description"
            content="Start Page"
          />
        </Helmet>
        <div>
          <h1>Start Page</h1>
        </div>
      </article>
    );
  }
}

export default compose(
)(Page);
