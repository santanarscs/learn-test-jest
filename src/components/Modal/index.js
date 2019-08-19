import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';

function Modal({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
export default Modal;
