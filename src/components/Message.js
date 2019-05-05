import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 300;
  background: ${props => props.theme.color.primary};
`;

const Message = ({
  message,
  children,
}) => (
  <MessageWrapper>
    {children}
    {message}
  </MessageWrapper>
);

Message.defaultProps = {
  children: '',
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Message;
