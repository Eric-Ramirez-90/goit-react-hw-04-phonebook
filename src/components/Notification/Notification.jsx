import PropTypes from 'prop-types';
import { Container, Title } from './Notification.styled';

function Notification({ message }) {
  return <Container>{message && <Title>{message}</Title>}</Container>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
