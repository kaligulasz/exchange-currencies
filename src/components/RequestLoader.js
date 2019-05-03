import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Loader from './Loader';

const Wrapper = styled.div`
  position: relative;
`;

const RequestLoader = ({ status, children }) => (
  <Wrapper>
    {status === 'initial'
      && <Loader />
    }

    {(status === 'successful' || status === 'initial')
      && children
    }

    {status === 'error'
      && 'error'
    }
  </Wrapper>
);

RequestLoader.propTypes = {
  status: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default RequestLoader;
