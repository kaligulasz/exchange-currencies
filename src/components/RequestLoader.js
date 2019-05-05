import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Error } from 'styled-icons/boxicons-regular/Error';

// Components
import Loader from './Loader';
import Message from './Message';

const Wrapper = styled.div`
  position: relative;
`;

const ErrorIcon = styled(Error)`
  margin-right: 0.5em;
`;

const RequestLoader = ({ status, children }) => (
  <Wrapper>
    {status === 'initial'
      && <Loader />
    }

    {(status === 'successful' || status === 'initial')
      && children
    }

    {status === 'failed'
      && (
        <Message message="something went wrong">
          <ErrorIcon size="35" />
        </Message>
      )
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
