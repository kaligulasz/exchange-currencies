import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import Loader from './Loader';

const RequestLoader = ({ status, children }) => (
  <Fragment>
    {status === 'initial'
      && <Loader />
    }

    {status === 'successful'
      && children
    }

    {status === 'error'
      && 'error'
    }
  </Fragment>
);

RequestLoader.propTypes = {
  status: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default RequestLoader;
